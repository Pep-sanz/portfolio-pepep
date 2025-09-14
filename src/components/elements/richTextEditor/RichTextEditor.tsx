'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { Image as TiptapImage } from '@tiptap/extension-image';
import { EditorToolbar } from './EditorToolbar';
import DOMPurify from 'dompurify';

type Props = {
  value?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
};

// Opsional: Custom Image Extension
const CustomImage = TiptapImage.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      filePath: {
        default: null,
        parseHTML: (element) => element.getAttribute('data-file-path'),
        renderHTML: (attributes) =>
          attributes.filePath ? { 'data-file-path': attributes.filePath } : {},
      },
    };
  },
});

export default function RichTextEditor({
  value = '',
  onChange,
  placeholder = 'Tulis sesuatu...',
}: Props) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => setIsMounted(true), []);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      CustomImage.configure({
        HTMLAttributes: { class: 'max-w-full rounded-md' },
      }),
      Placeholder.configure({ placeholder }),
    ],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      if (onChange) {
        // 🔹 Sanitize HTML sebelum dikirim
        const dirtyHTML = editor.getHTML();
        const cleanHTML = DOMPurify.sanitize(dirtyHTML, {
          USE_PROFILES: { html: true },
        });
        onChange(cleanHTML);
      }
    },
  });

  React.useEffect(() => {
    if (!editor || !isMounted) return;
    if (value !== editor.getHTML()) editor.commands.setContent(value);
  }, [editor, isMounted, value]);

  if (!isMounted) {
    return <div className="border rounded-md p-3 min-h-[150px] bg-muted" />;
  }

  if (!editor) return null;

  return (
    <div>
      <div className="border rounded-3xl w-full min-h-[200px] prose prose-sm max-w-none space-y-2">
        <EditorToolbar editor={editor} />
        <EditorContent
          editor={editor}
          className="w-full p-3 h-full [&_.ProseMirror]:min-h-[200px] [&_.ProseMirror]:outline-none"
        />
      </div>
    </div>
  );
}
