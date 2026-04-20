'use client';

interface Props {
  content?: string;
}

export default function BlogBody({ content }: Props) {
  if (!content) return null;

  return (
    <div
      className="blog-prose"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
