'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import type { Service } from '@/lib/strapi';

interface MenuItem {
  label: string;
  url: string;
  order: number;
  isExternal?: boolean;
}

interface Props {
  locale: string;
  services: Service[];
  menuItems?: MenuItem[];
}

export default function MobileMenu({ locale, services, menuItems = [] }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('common');
  const tHeader = useTranslations('header');

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Fallback menu items if not provided - use translations
  const fallbackMenuItems: MenuItem[] = [
    { label: t('about'), url: `/${locale}/about`, order: 1, isExternal: false },
    { label: t('training'), url: `/${locale}/training`, order: 4, isExternal: false },
    { label: t('recruitment'), url: `/${locale}/careers`, order: 5, isExternal: false },
    { label: t('blog'), url: `/${locale}/blog`, order: 6, isExternal: false },
    { label: t('contact'), url: `/${locale}/contact`, order: 7, isExternal: false },
  ];

  const navLinks = menuItems.length > 0 ? menuItems : fallbackMenuItems;

  // Fallback services matching Figma pages when Strapi returns empty
  const fallbackServiceItems: Service[] = [
    { id: 1, documentId: 'google-ads', name: tHeader('servicesDropdown.googleAds'), slug: 'google-ads', locale },
    { id: 2, documentId: 'tiktok-ads', name: tHeader('servicesDropdown.tiktokAds'), slug: 'tiktok-ads', locale },
    { id: 3, documentId: 'tiktok-shop-ops', name: tHeader('servicesDropdown.tiktokShopOps'), slug: 'tiktok-shop-ops', locale },
  ];

  const displayServices = services.length > 0 ? services : fallbackServiceItems;
  const serviceLabelBySlug: Record<string, string> = {
    'google-ads': tHeader('servicesDropdown.googleAds'),
    'tiktok-ads': tHeader('servicesDropdown.tiktokAds'),
    'tiktok-shop-ops': tHeader('servicesDropdown.tiktokShopOps'),
  };
  const serviceLinks = displayServices
    .filter((service) => service.slug !== 'rent-ads')
    .map((service) => ({
      key: service.slug,
      name: serviceLabelBySlug[service.slug] || service.name,
      href: `/${locale}/services/${service.slug}`,
    }));
  const googleAdsIndex = serviceLinks.findIndex((service) => service.key === 'google-ads');
  const apiToolLink = {
    key: 'google-ads-api-tool',
    name: tHeader('servicesDropdown.apiTool'),
    href: `/${locale}/google-ads-api-tool`,
  };
  const displayServiceLinks = googleAdsIndex === -1
    ? [apiToolLink, ...serviceLinks]
    : [
      ...serviceLinks.slice(0, googleAdsIndex + 1),
      apiToolLink,
      ...serviceLinks.slice(googleAdsIndex + 1),
    ];

  // Split menu items: before services (order < 3) and after services (order >= 3)
  const navLinksBefore = navLinks.filter(link => link.order < 3);
  const navLinksAfter = navLinks.filter(link => link.order >= 3 && !link.url.includes('/services'));

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden text-white p-1"
        aria-label="Open menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Overlay & Menu Content */}
      <div
        className={`fixed inset-0 z-[100] bg-black transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-12">
            <div className="text-[20px] font-bold text-brand-gold">Lumina Media Agency</div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-1"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-8">
            {/* Menu items before Services (Giới thiệu) */}
            {navLinksBefore.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="text-[24px] font-semibold text-white hover:text-brand-gold"
              >
                {link.label}
              </Link>
            ))}

            {/* Services section */}
            <div className="pt-2 pb-2 border-t border-b border-white/10">
              <div className="text-[14px] text-white/40 uppercase mb-6">{t('services')}</div>
              <div className="flex flex-col space-y-6">
                {displayServiceLinks.map((s) => (
                  <Link
                    key={s.key}
                    href={s.href}
                    className="text-[18px] font-medium text-white/80"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Menu items after Services (Đào tạo, Tuyển dụng, Liên hệ) */}
            {navLinksAfter.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="text-[24px] font-semibold text-white hover:text-brand-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
