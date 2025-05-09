'use client';

import InputField from '@/components/elements/InputField';
import SectionHeading from '@/components/elements/SectionHeading';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import fetcher from '@/lib/fetcher';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IFormEmail {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormEmail>();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Send Email');
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  async function handleFormSubmit(payload: IFormEmail) {
    setIsLoading(true);
    try {
      const response = await fetcher.post('/api/send-email', { ...payload });
      if (response.status === 200) {
        setIsSuccess(true);
        toast({
          variant: 'success',
          description: response.data.message,
        });
      }
      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setButtonText(isLoading ? 'Sending your message...' : 'Send Email');
    if (!isLoading && isSuccess) setButtonText('Your email sent successfully');
    const timeout = setTimeout(() => {
      setButtonText('Send Email');
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isLoading, isSuccess]);

  return (
    <div className="flex flex-col space-y-4 w-full dark:bg-secondary bg-white rounded-md shadow-md p-6 md:p-12">
      <div className="space-y-2">
        <SectionHeading title="Or send me a message" />
      </div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col space-y-4 transition-all duration-300"
      >
        <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
          <InputField
            name="name"
            rule={{ required: true }}
            register={register}
            error={errors}
          />
          <InputField
            name="email"
            rule={{
              required: true,
              pattern: {
                value: regexEmail,
                message: 'please enter a valid email',
              },
            }}
            register={register}
            error={errors}
          />
        </div>
        <InputField
          name="message"
          rule={{ required: true }}
          register={register}
          error={errors}
          isTextArea
        />
        <Button
          disabled={isLoading}
          type="submit"
          className="rounded-lg bg-neutral-700 px-4 py-2 text-white shadow-md hover:bg-neutral-800 hover:shadow-lg"
        >
          {buttonText}
        </Button>
      </form>
    </div>
  );
}
