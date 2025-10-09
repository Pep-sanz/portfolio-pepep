// src/components/JsonLd.tsx
export default function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      // Penting: stringify tanpa indentation biar kecil
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
