'use client';

import * as React from 'react';
import { Editor } from '@tiptap/react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Heading1,
  List,
  ListOrdered,
  Highlighter,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from 'lucide-react';

type Props = {
  editor: Editor | null;
};

export function EditorToolbar({ editor }: Props) {
  if (!editor) return null;

  // 📝 Config tombol basic formatting
  const basicFormatting = [
    {
      value: 'bold',
      icon: Bold,
      isActive: () => editor.isActive('bold'),
      action: () => editor.chain().focus().toggleBold().run(),
    },
    {
      value: 'italic',
      icon: Italic,
      isActive: () => editor.isActive('italic'),
      action: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      value: 'underline',
      icon: UnderlineIcon,
      isActive: () => editor.isActive('underline'),
      action: () => editor.chain().focus().toggleUnderline().run(),
    },
    {
      value: 'highlight',
      icon: Highlighter,
      isActive: () => editor.isActive('highlight'),
      action: () => editor.chain().focus().toggleHighlight().run(),
    },
  ];

  // 📝 Config tombol list & heading
  const listAndHeading = [
    {
      value: 'bullet',
      icon: List,
      isActive: () => editor.isActive('bulletList'),
      action: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      value: 'ordered',
      icon: ListOrdered,
      isActive: () => editor.isActive('orderedList'),
      action: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      value: 'heading1',
      icon: Heading1,
      isActive: () => editor.isActive('heading', { level: 1 }),
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
  ];

  // 📝 Config tombol alignment
  const textAlignments = [
    {
      value: 'left',
      icon: AlignLeft,
      action: () => editor.chain().focus().setTextAlign('left').run(),
    },
    {
      value: 'center',
      icon: AlignCenter,
      action: () => editor.chain().focus().setTextAlign('center').run(),
    },
    {
      value: 'right',
      icon: AlignRight,
      action: () => editor.chain().focus().setTextAlign('right').run(),
    },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-2 border-b p-3">
      <ToggleGroup type="multiple" className="flex gap-1 rounded-full">
        {basicFormatting.map(({ value, icon: Icon, isActive, action }) => (
          <ToggleGroupItem
            key={value}
            value={value}
            aria-label={value}
            onClick={action}
            className={isActive() ? 'bg-primary text-white rounded-full' : ''}
          >
            <Icon className="w-4 h-4" />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {/* 🔹 Lists & Heading in Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="border rounded-md p-2 hover:bg-muted"
          >
            <List className="w-4 h-4" />
          </button>
        </PopoverTrigger>

        <PopoverContent className="flex gap-2 p-2">
          <ToggleGroup type="multiple" className="flex gap-1">
            {listAndHeading.map(({ value, icon: Icon, isActive, action }) => (
              <ToggleGroupItem
                key={value}
                value={value}
                aria-label={value}
                onClick={action}
                className={isActive() ? 'bg-primary text-white' : ''}
              >
                <Icon className="w-4 h-4" />
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </PopoverContent>
      </Popover>

      {/* 🔹 Text alignment */}
      <ToggleGroup type="single" className="flex gap-1">
        {textAlignments.map(({ value, icon: Icon, action }) => (
          <ToggleGroupItem
            key={value}
            value={value}
            aria-label={value}
            onClick={action}
          >
            <Icon className="w-4 h-4" />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
