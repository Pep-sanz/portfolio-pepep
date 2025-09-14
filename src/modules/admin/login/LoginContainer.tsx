'use client';

import {
  FormFieldConfig,
  FormGenerator,
} from '@/components/elements/FormGenerator';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const schema = z.object({
  email: z
    .string()
    .email('Format email tidak valid')
    .min(1, 'Email wajib diisi'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

type FormLoginType = z.infer<typeof schema>;

export default function LoginContainer() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormLoginType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const field: FormFieldConfig<FormLoginType>[] = [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter your email here',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password here',
    },
  ];

  const handleSubmit = async (val: FormLoginType) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword(val);

      if (error || !data.session) {
        throw error ?? new Error('Login gagal, session tidak ditemukan');
      }

      toast({
        variant: 'success',
        title: 'Success',
        description: 'Login berhasil',
      });

      router.push('/admin/home');
      console.log('test ahh');
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: err.message,
      });
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email and password below to login your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormGenerator
            fields={field}
            id="loginForm"
            form={form}
            onSubmit={handleSubmit}
          />
        </CardContent>
        <CardFooter>
          <Button
            form="loginForm"
            type="submit"
            variant="secondary"
            className="w-full"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
