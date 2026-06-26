'use client';

import InputField from '@/components/elements/InputField';
import GradientButton from '@/components/elements/GradientButton';
import { useToast } from '@/hooks/use-toast';
import fetcher from '@/lib/fetcher';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';

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
    <div className="glass-card rounded-2xl p-6 md:p-10 border border-glass-border flex flex-col gap-6">
      <div>
        <h2 className="font-geist text-headline-lg text-on-surface">
          Or Send Me a Message
        </h2>
        <p className="font-inter text-body-sm text-on-surface-variant mt-1">
          I&apos;ll get back to you soon
        </p>
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
        <GradientButton type="submit" disabled={isLoading} size="md">
          <FiSend className="shrink-0" />
          {buttonText}
        </GradientButton>
      </form>
    </div>
  );
}
