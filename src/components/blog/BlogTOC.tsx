'use client';

import { useTranslations } from 'next-intl';

interface TocItem {
  id: string;
  label: string;
  level: number;
}

interface Props {
  items: TocItem[];
}

export default function BlogTOC({ items }: Props) {
  const t = useTranslations('blog');

  if (!items || items.length === 0) return null;

  return (
    <aside className="hidden xl:block w-[220px] shrink-0 sticky top-[120px] self-start">
      <div className="border border-white/10 rounded-[12px] p-5 bg-[#0f0f0f]">
        <h4 className="text-[13px] font-bold uppercase tracking-wider text-white/40 mb-4">
          {t('tableOfContents')}
        </h4>
        <nav className="flex flex-col gap-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[14px] font-light leading-snug text-white/60 hover:text-[#AF7E2D] transition-colors ${
                item.level === 3 ? 'pl-3' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
