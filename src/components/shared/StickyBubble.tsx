'use client';

import CallEnd from '@/components/icons/CallEnd';
import { useTranslations } from 'next-intl';

export default function StickyBubble() {
  const t = useTranslations('footer');

  return (
    <div className="fixed right-4 bottom-6 z-[9980] flex flex-col gap-3 md:hidden">
      {/* Zalo Bubble */}
      <a
        href={`https://zalo.me/${t('phoneNumber').replace(/\s/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-white hover:bg-gray-50 text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-gray-100"
        aria-label="Zalo"
      >
        <img
          src="/zalo-icon.png"
          alt="Zalo"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      </a>

      {/* Gọi tư vấn */}
      <a
        href={`tel:${t('phoneNumber').replace(/\s/g, '')}`}
        className="flex items-center justify-center w-14 h-14 bg-[#AF7E2D] hover:bg-[#c28c32] text-white rounded-full shadow-[0_4px_12px_rgba(175,126,45,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Gọi tư vấn"
      >
        <CallEnd className="h-6 w-6" />
      </a>
    </div>
  );
}
