// components/FormGenerator.tsx
'use client';

import * as React from 'react';
import {
  UseFormReturn,
  SubmitHandler,
  FieldValues,
  Path,
} from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { FormFile } from './FormFile';
import RichTextEditor from './richTextEditor/RichTextEditor';

type FieldType =
  | 'text'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'number'
  | 'password'
  | 'file'
  | 'richtext';

export type BaseFieldConfig = {
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: { label: string; value: string }[];
  leftIcon?: React.ReactNode; // hanya dekorasi
  rightIcon?: React.ReactNode; // hanya dekorasi
  rightElement?: React.ReactNode; // bisa interaktif
  className?: string; // styling per field
};

export type FormFieldConfig<TFormValues extends FieldValues> =
  BaseFieldConfig & {
    name: Path<TFormValues>;
  };

interface FormGeneratorProps<TFormValues extends FieldValues> {
  fields: FormFieldConfig<TFormValues>[];
  form: UseFormReturn<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
  submitLabel?: string;
  className?: string;
  id: string;
}

export function FormGenerator<TFormValues extends FieldValues>({
  fields,
  form,
  onSubmit,
  className = 'flex flex-col gap-4 w-full',
  id,
}: FormGeneratorProps<TFormValues>) {
  const renderField = (field: FormFieldConfig<TFormValues>) => {
    switch (field.type) {
      case 'text':
      case 'number':
      case 'password':
        return (
          <FormField
            key={String(field.name)}
            control={form.control}
            name={field.name}
            render={({ field: rhfField }) => (
              <FormItem className={field.className}>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`${field.leftIcon ? 'pl-10' : ''} ${
                      field.rightIcon || field.rightElement ? 'pr-10' : ''
                    }`}
                    {...rhfField}
                    leftIcon={field.leftIcon}
                    rightElement={field.rightElement}
                    rightIcon={field.rightIcon}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case 'textarea':
        return (
          <FormField
            key={String(field.name)}
            control={form.control}
            name={field.name}
            render={({ field: rhfField }) => (
              <FormItem className={field.className}>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Textarea placeholder={field.placeholder} {...rhfField} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case 'select':
        return (
          <FormField
            key={String(field.name)}
            control={form.control}
            name={field.name}
            render={({ field: rhfField }) => (
              <FormItem className={field.className}>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={rhfField.onChange}
                    value={rhfField.value ?? ''}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case 'checkbox':
        return (
          <FormField
            key={String(field.name)}
            control={form.control}
            name={field.name}
            render={({ field: rhfField }) => (
              <FormItem
                className={`flex flex-row items-start space-x-3 space-y-0 ${field.className}`}
              >
                <FormControl>
                  <Checkbox
                    checked={!!rhfField.value}
                    onCheckedChange={rhfField.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>{field.label}</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case 'file':
        return (
          <FormField
            key={String(field.name)}
            control={form.control}
            name={field.name}
            render={({ field: rhfField }) => (
              <FormFile
                field={rhfField}
                label={field.label}
                className={field.className}
              />
            )}
          />
        );

      case 'richtext':
        return (
          <FormField
            key={String(field.name)}
            control={form.control}
            name={field.name}
            render={({ field: rhfField }) => (
              <FormItem className={field.className}>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <RichTextEditor
                    value={rhfField.value}
                    onChange={rhfField.onChange}
                    placeholder={field.placeholder}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className={className}
      >
        {fields.map((f) => renderField(f))}
      </form>
    </Form>
  );
}
