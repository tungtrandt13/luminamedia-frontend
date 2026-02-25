"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import ServicesDropdown from '@/components/ServicesDropdown';
import MobileMenu from '@/components/MobileMenu';
import { getStrapiMedia, StrapiImage } from '@/lib/strapi';

import { Service } from '@/lib/strapi';

type MenuItem = {
  label: string;
  url: string;
  order: number;
  isExternal?: boolean;
};

type Props = {
  locale: string;
  services: Service[];
  globalSettings: {
    logo?: StrapiImage;
    menu_items?: MenuItem[];
  } | null;
};

export default function Header({ locale, services, globalSettings }: Props) {
  const t = useTranslations('common');
  const tHeader = useTranslations('header');
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Debug: Log pathname and locale (remove in production)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && mounted) {
      console.log('[Header] Current pathname:', pathname, 'Locale:', locale);
    }
  }, [pathname, locale, mounted]);

  const logoUrl = globalSettings?.logo
    ? getStrapiMedia(globalSettings.logo)
    : '/logo.png';

  // Map menu items from Strapi to use translations
  // This ensures menu labels change based on locale
  const mapMenuLabel = (url: string): string | null => {
    // Remove locale prefix if exists (e.g., /vi/about -> /about)
    const urlWithoutLocale = url.replace(/^\/(vi|en)\//, '/').replace(/^\/(vi|en)$/, '/');
    
    // Map URL patterns to translation keys
    if (urlWithoutLocale === '/about' || urlWithoutLocale.includes('/about')) return t('about');
    if (urlWithoutLocale === '/training' || urlWithoutLocale.includes('/training')) return t('training');
    if (urlWithoutLocale === '/careers' || urlWithoutLocale.includes('/careers') || 
        urlWithoutLocale === '/recruitment' || urlWithoutLocale.includes('/recruitment')) {
      return t('recruitment');
    }
    if (urlWithoutLocale === '/contact' || urlWithoutLocale.includes('/contact')) return t('contact');
    if (urlWithoutLocale === '/services' || urlWithoutLocale.includes('/services')) return t('services');
    // If no match, return null to keep original label (for custom menu items)
    return null;
  };

  const menuItems = globalSettings?.menu_items
    ? [...globalSettings.menu_items]
        .sort((a: MenuItem, b: MenuItem) => a.order - b.order)
        .map((item: MenuItem) => {
          const translatedLabel = mapMenuLabel(item.url);
          return {
            ...item,
            // Replace label with translation if we can map it, otherwise keep original
            label: translatedLabel !== null ? translatedLabel : item.label
          };
        })
    : [];

  const getLocalizedPath = (targetLocale: string) => {
    // next-intl's usePathname() may return pathname WITH or WITHOUT locale prefix
    // We need to handle both cases:
    // 1. Pathname with locale: /en, /en/services
    // 2. Pathname without locale: /, /services (next-intl strips locale prefix)
    
    let pathWithoutLocale = pathname;
    
    // Try to remove locale prefix if it exists
    // Case 1: /locale/path -> /path
    if (pathname.startsWith(`/${locale}/`)) {
      pathWithoutLocale = pathname.slice(`/${locale}`.length);
    } 
    // Case 2: /locale (exact match) -> /
    else if (pathname === `/${locale}`) {
      pathWithoutLocale = '/';
    }
    // Case 3: Pathname doesn't have locale prefix (next-intl already stripped it)
    // In this case, pathname is already the path without locale
    // So we use it as is
    else {
      pathWithoutLocale = pathname;
    }
    
    // Ensure path starts with /
    if (!pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = '/' + pathWithoutLocale;
    }
    
    // Always use full path with locale prefix for navigation
    // This ensures navigation always happens, even for default locale
    // Middleware will handle redirecting /vi to / if needed
    const result = pathWithoutLocale === '/' 
      ? `/${targetLocale}` 
      : `/${targetLocale}${pathWithoutLocale}`;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[getLocalizedPath] ${locale} -> ${targetLocale}: pathname="${pathname}" -> result="${result}"`);
    }
    
    return result;
  };

  const fallbackMenuItems = [
    { label: t('about'), url: `/${locale}/about`, order: 1 },
    { label: t('training'), url: `/${locale}/training`, order: 3 },
    { label: t('recruitment'), url: `/${locale}/careers`, order: 4 },
    { label: t('contact'), url: `/${locale}/contact`, order: 5 },
  ];

  const displayMenuItems = menuItems.length > 0 ? menuItems : fallbackMenuItems;

  return (
    <header className="w-full bg-black sticky top-0 z-50 border-b border-white/5">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-4 md:py-5 lg:px-10">
        {/* Logo */}
        <Link href={`/${locale}`} className="shrink-0">
          <Image
            src={logoUrl || '/logo.png'}
            alt="VISSCOM"
            width={98}
            height={40}
            priority
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation - Desktop & iPad */}
        <nav className="hidden lg:flex items-center justify-between flex-1 max-w-[659px] mx-10">
          {displayMenuItems.map((item, index) => (
            <Link
              key={item.url || index}
              href={item.url}
              className="text-white font-semibold text-[18px] xl:text-[20px] leading-[1.21] hover:text-brand-gold transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
          <ServicesDropdown locale={locale} services={services} label={tHeader('servicesDropdown.title')} />
        </nav>

        {/* Language Switcher & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Link
              href={getLocalizedPath('vi')}
              prefetch={false}
              scroll={true}
              className={`grid h-[32px] w-[32px] md:h-[35px] md:w-[35px] place-items-center text-[16px] md:text-[20px] font-semibold rounded-sm transition-all ${
                locale === 'vi' ? 'bg-brand-gold text-white' : 'bg-transparent text-white hover:text-brand-gold'
              }`}
              onClick={(e) => {
                if (locale !== 'vi') {
                  e.preventDefault();
                  const targetPath = getLocalizedPath('vi');
                  if (process.env.NODE_ENV === 'development') {
                    console.log('[Language Switcher] Click VI, navigating to:', targetPath);
                  }
                  // Force navigation
                  router.push(targetPath);
                }
              }}
            >
              VI
            </Link>
            <Link
              href={getLocalizedPath('en')}
              prefetch={false}
              scroll={true}
              className={`grid h-[32px] w-[32px] md:h-[35px] md:w-[35px] place-items-center text-[16px] md:text-[20px] font-semibold rounded-sm transition-all ${
                locale === 'en' ? 'bg-brand-gold text-white' : 'bg-transparent text-white hover:text-brand-gold'
              }`}
              onClick={(e) => {
                if (locale !== 'en') {
                  e.preventDefault();
                  const targetPath = getLocalizedPath('en');
                  if (process.env.NODE_ENV === 'development') {
                    console.log('[Language Switcher] Click EN, navigating to:', targetPath);
                  }
                  // Force navigation
                  router.push(targetPath);
                }
              }}
            >
              EN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu locale={locale} services={services} menuItems={displayMenuItems} />
        </div>
      </div>
    </header>
  );
}
