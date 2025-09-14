'use client';

import * as React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { File as FileIcon, Upload, X } from 'lucide-react';
import Image from './Image';

interface FileFieldProps {
  field: ControllerRenderProps<any, string>;
  label: string;
  className?: string;
}

export function FormFile({ field, label, className }: FileFieldProps) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [fileName, setFileName] = React.useState<string | null>(null);

  React.useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFile = (file: File) => {
    field.onChange(file);
    setFileName(file.name);

    if (file.type.startsWith('image/')) {
      if (preview) URL.revokeObjectURL(preview);
      setPreview(URL.createObjectURL(file));
    } else {
      if (preview) URL.revokeObjectURL(preview);
      setPreview(null);
    }
  };

  const handleRemove = () => {
    field.onChange(null);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setFileName(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <FormItem className={` ${className}`}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        {/* Hidden input */}
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
        />
      </FormControl>

      {/* Dropzone */}
      <div
        className="relative flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-md p-6 cursor-pointer hover:border-gray-500 transition min-h-[150px]"
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        {preview ? (
          <>
            <Image
              src={preview}
              alt="preview"
              width={250}
              height={250}
              className="object-cover w-[250px] h-[250px] rounded-md"
            />
            <button
              type="button"
              className="absolute top-2 right-2 bg-black/50 rounded-full p-1"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </>
        ) : fileName ? (
          <div className="flex items-center gap-2 text-sm text-gray-600 border rounded-md px-3 py-2 bg-white">
            <FileIcon className="w-5 h-5 text-gray-500" />
            <span className="truncate">{fileName}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              className="ml-auto"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ) : (
          <>
            <Upload className="w-6 h-6 text-gray-500" />
            <p className="text-sm text-gray-600 text-center">
              Drag & drop file atau klik untuk pilih
            </p>
          </>
        )}
      </div>

      <FormMessage />
    </FormItem>
  );
}
