'use client';

import SectionHeading from '@/components/elements/SectionHeading';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiHomeSmile as HomeIcon } from 'react-icons/bi';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormFieldConfig,
  FormGenerator,
} from '@/components/elements/FormGenerator';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface HomeDataTypes {
  id: string;
  name: string;
  summary: string;
  position: string;
  address: string;
  image: string;
  type_of_work: string;
  user_id: string;
}

const schema = z.object({
  name: z.string(),
  image: z.any().optional(),
  summary: z.string(),
  position: z.string(),
  address: z.string(),
  type_of_work: z.string(),
});

type formTypes = z.infer<typeof schema>;

export default function HomeContainer() {
  const { toast } = useToast();
  const [data, setData] = useState<HomeDataTypes | null>(null);
  const [userId, setUserId] = useState<string>('');
  const form = useForm<formTypes>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      address: '',
      summary: '',
      image: '',
      position: '',
      type_of_work: '',
    },
  });

  console.log('data', data);

  /** 🔹 Ambil user_id dari session Supabase */
  const getUser = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error || !session?.user) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'User not authenticated',
      });
      return;
    }

    setUserId(session.user.id);
    return session.user.id;
  };

  /** 🔹 Ambil data home berdasarkan user_id */
  const getData = async (uid: string) => {
    const { data, error } = await supabase
      .from('home')
      .select('*')
      .eq('user_id', uid)
      .single();

    if (error && error.code !== 'PGRST116') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to fetch data',
      });
      return;
    }

    if (data) {
      setData(data);
      form.reset(data);
    }
  };

  const fields: FormFieldConfig<formTypes>[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      placeholder: 'Enter your address',
    },
    {
      name: 'summary',
      label: 'Summary',
      type: 'textarea',
      placeholder: 'Enter a brief Summary',
    },
    {
      name: 'position',
      label: 'Position',
      type: 'text',
      placeholder: 'Enter your position',
    },
    {
      name: 'type_of_work',
      label: 'Type of Work',
      type: 'text',
      placeholder: 'Enter your type of work',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'file',
      placeholder: 'Upload your image',
    },
  ];

  const handleSubmit = async (values: formTypes) => {
    try {
      let imageUrl = data?.image || '';

      if (values.image instanceof File) {
        const file = values.image;
        const filePath = `${userId}/${Date.now()}-${file.name}`;

        const { error: uploadError } = await supabase.storage
          .from('uploads')
          .upload(filePath, file, { upsert: true });

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from('uploads')
          .getPublicUrl(filePath);

        imageUrl = publicUrlData.publicUrl;
      }

      const payload = {
        user_id: userId,
        name: values.name,
        address: values.address,
        summary: values.summary,
        position: values.position,
        type_of_work: values.type_of_work,
        image: imageUrl,
      };

      if (data?.id) {
        const { error } = await supabase
          .from('home')
          .update(payload)
          .eq('id', data.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('home').insert(payload);
        if (error) throw error;
      }

      toast({
        variant: 'success',
        title: 'Success',
        description: 'Home updated successfully',
      });

      getData(userId);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Something went wrong when saving data',
      });
    }
  };

  /** 🔹 Jalankan saat pertama kali mount */
  useEffect(() => {
    (async () => {
      const uid = await getUser();
      if (uid) await getData(uid);
    })();
  }, []);

  return (
    <section className="p-6 space-y-12 min-h-screen rounded-3xl bg-secondary">
      <div>
        <SectionHeading title="Home Settings" icon={<HomeIcon size={36} />} />
        <SectionSubHeading className="ml-10">
          Update your home page content.
        </SectionSubHeading>
      </div>
      <div className="space-y-6">
        <FormGenerator
          form={form}
          fields={fields}
          id="formGenerator"
          onSubmit={handleSubmit}
        />
        <div className="flex justify-end">
          <Button type="submit" form="formGenerator">
            Save Changes
          </Button>
        </div>
      </div>
    </section>
  );
}
