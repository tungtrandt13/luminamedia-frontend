'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import type { Service } from '@/lib/strapi';

type Props = {
  locale: string;
  services: Service[];
  label: string;
};

export default function ServicesDropdown({ locale, services, label }: Props) {
  const t = useTranslations('header');
  const [open, setOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpen(true);
  };

  const closeDropdownWithDelay = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  // Fallback services matching Figma pages, in correct order
  const fallbackServices = useMemo(() => [
    { name: t('servicesDropdown.rentAds'), href: `/${locale}/services/rent-ads` },
    { name: t('servicesDropdown.googleAds'), href: `/${locale}/services/google-ads` },
    { name: t('servicesDropdown.tiktokAds'), href: `/${locale}/services/tiktok-ads` },
    { name: t('servicesDropdown.tiktokShopOps'), href: `/${locale}/services/tiktok-shop-ops` },
  ], [locale, t]);

  const items = useMemo(() => {
    const serviceOrder = ['rent-ads', 'google-ads', 'tiktok-ads', 'tiktok-shop-ops'];
    const strapiItems = (services || [])
      .filter((s) => serviceOrder.includes(s.slug))
      .slice()
      .sort((a, b) => serviceOrder.indexOf(a.slug) - serviceOrder.indexOf(b.slug))
      .map((s) => ({
        name: s.name,
        href: `/${locale}/services/${s.slug}`,
      }));

    return strapiItems.length > 0 ? strapiItems : fallbackServices;
  }, [locale, services, fallbackServices]);

  return (
    <div
      className="relative"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdownWithDelay}
    >
      <button
        type="button"
        className="inline-flex items-center gap-2 text-white font-semibold text-[18px] xl:text-[20px] leading-[1.21] group transition-colors hover:text-brand-gold"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{label}</span>
        <svg
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M0 0L5 5L10 0H0Z" />
        </svg>
      </button>

      {open ? (
        <>
          <div className="absolute left-0 top-full h-3 w-full" aria-hidden="true" />
          <div
            role="menu"
            className="absolute left-0 top-full mt-3 min-w-64 rounded-[var(--radius-md)] border border-white/10 bg-black/95 p-2 shadow-lg"
          >
            {items.length === 0 ? (
              <div className="px-3 py-2 text-sm text-white/50">(No services)</div>
            ) : (
              <>
                {items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    role="menuitem"
                    className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {it.name}
                  </Link>
                ))}
              </>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
