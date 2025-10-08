'use client';

import { useState } from 'react';
import RichTextEditor from '@/components/elements/richTextEditor/RichTextEditor';

export default function Page() {
  const [text, setText] = useState('');

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <RichTextEditor value={text} onChange={setText} />
      <p className="p-2 flex-wrap w-full bg-gray-100 rounded">{text}</p>
    </div>
  );
}
