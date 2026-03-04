'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { normalizeStrapiText } from '@/lib/strapi';
import SuccessModal from '@/components/shared/SuccessModal';

interface Props {
  title?: string;
  description?: string;
  ctaText?: string;
}

export default function HPContact({ title, description, ctaText }: Props) {
  const t = useTranslations('HomePage.hp_contact');
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      website: formData.get('website'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(t('error'));

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-full bg-[#FFF8ED] text-black">
        <div className="mx-auto w-full max-w-[1500px] px-5 md:px-[20px] py-[100px]">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-[115px] items-start justify-center w-full max-w-[1500px] mx-auto">
            <div className="flex-1 flex flex-col gap-8 md:gap-[60px] w-full lg:max-w-[50%]">
              <div className="flex flex-col gap-[32px]">
                <h2 className="text-[32px] sm:text-[40px] font-semibold leading-[1.3] whitespace-pre-line text-black text-center lg:text-left">
                  {title ? (
                    <span dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title) }} />
                  ) : (
                    t('title')
                  )}
                </h2>
                {description && (
                  <p
                    className="text-[16px] md:text-[20px] text-black font-light leading-snug whitespace-pre-line text-center lg:text-left lg:max-w-[600px]"
                    dangerouslySetInnerHTML={{ __html: normalizeStrapiText(description) }}
                  />
                )}
              </div>

              <Link href={`/${locale}/about`} className="self-center lg:self-start border border-[#AF7E2D] px-[40px] py-[20px] rounded-[8px] text-[#AF7E2D] font-medium text-[16px] hover:bg-[#AF7E2D] hover:text-white transition-colors">
                {t('view_all')}
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-[10px] w-full max-w-[600px] lg:max-w-none mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-[10px]">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder={t('name')}
                  className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[19px] py-[14px] text-[16px] font-medium text-[#171717] outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-colors placeholder:text-[#939292]"
                />
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder={t('phone')}
                  className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[23px] py-[14px] text-[16px] font-medium text-[#171717] outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-colors placeholder:text-[#939292]"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-[10px]">
                <input
                  name="website"
                  type="url"
                  placeholder={t('website')}
                  className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[19px] py-[14px] text-[16px] font-medium text-[#171717] outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-colors placeholder:text-[#939292]"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder={t('email')}
                  className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[23px] py-[14px] text-[16px] font-medium text-[#171717] outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-colors placeholder:text-[#939292]"
                />
              </div>
              <div className="relative">
                <select
                  name="service"
                  defaultValue=""
                  className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[19px] py-[16px] text-[16px] font-medium outline-none focus:ring-2 focus:ring-[#AF7E2D] appearance-none cursor-pointer transition-colors text-[#939292]"
                >
                  <option value="" disabled hidden>{t('service')}</option>
                  <option value="google-ads" className="text-[#171717]">Google Ads</option>
                  <option value="tiktok-ads" className="text-[#171717]">TikTok Ads</option>
                  <option value="tiktok-shop" className="text-[#171717]">TikTok Shop</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#939292]">
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <textarea
                name="message"
                placeholder={t('message')}
                className="w-full h-[131px] rounded-[16px] border-none bg-[#D9D9D9] px-[19px] py-[18px] text-[16px] font-medium text-[#171717] outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-colors resize-none placeholder:text-[#939292]"
              ></textarea>

              {error && <p className="text-red-500 text-sm text-center lg:text-left">{error}</p>}

              <button
                disabled={loading}
                type="submit"
                className="w-full rounded-[8px] bg-[#AF7E2D] py-[16px] px-[40px] text-[16px] font-medium text-white transition-all hover:bg-black active:scale-[0.98] disabled:opacity-50 mt-4"
              >
                {loading ? t('sending') : normalizeStrapiText(ctaText) || t('submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
      <SuccessModal isOpen={success} onClose={() => setSuccess(false)} />
    </>
  );
}
