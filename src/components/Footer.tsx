import Link from "next/link";
import { useTranslations } from "next-intl";

import CallEnd from "@/components/icons/CallEnd";
import Facebook from "@/components/icons/Facebook";
import LocationOn from "@/components/icons/LocationOn";

import { normalizeStrapiText } from "@/lib/strapi";

type Props = {
  locale: string;
};

export default function Footer({ locale }: Props) {
  const t = useTranslations('common');
  const tFooter = useTranslations('footer');

  return (
    <footer className="w-full bg-[#000000] text-white">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-[60px] md:py-[100px]">

        {/* Company Name */}
        <div className="mb-[60px] md:mb-[100px] max-w-[800px]">
          <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.3] uppercase whitespace-pre-line">
            {normalizeStrapiText(tFooter('companyName'))}
          </h2>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid gap-12 lg:gap-[120px] lg:grid-cols-[auto_1fr_auto] items-start">

          {/* Cột 1: Address & Phone */}
          <div className="flex flex-col gap-6 w-full lg:w-[320px]">
            <div className="flex flex-col gap-[32px]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LocationOn className="h-[24px] w-[24px] shrink-0 text-white" />
                  <h4 className="text-[18px] font-semibold text-white">{tFooter('addressTitle')}</h4>
                </div>
                <p className="text-[16px] text-[#A3A3A3] font-light leading-[1.6]">
                  {tFooter('address1')}, {tFooter('address2')}, {tFooter('address3')}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <CallEnd className="h-[24px] w-[24px] shrink-0 text-white" />
                <span className="text-[18px] font-semibold text-white">{tFooter('phoneLabel')}: 0384367069</span>
              </div>
            </div>
          </div>

          {/* Cột 2: Links */}
          <div className="grid grid-cols-2 gap-8 text-[18px] font-semibold text-[#AF7E2D] lg:ml-[100px]">
            <div className="flex flex-col gap-[24px]">
              <Link href={`/${locale}/services/google-ads`} className="hover:text-white transition-colors w-fit">
                {t('services')}
              </Link>
              <Link href={`/${locale}/training`} className="hover:text-white transition-colors w-fit">
                {t('training')}
              </Link>
              <Link href={`/${locale}/careers`} className="hover:text-white transition-colors w-fit">
                {t('careers')}
              </Link>
            </div>
            <div className="flex flex-col gap-[24px]">
              <Link href={`/${locale}/about`} className="hover:text-white transition-colors w-fit">
                {tFooter('aboutUs')}
              </Link>
              <Link href={`/${locale}/contact`} className="hover:text-white transition-colors w-fit">
                {t('contact')}
              </Link>
            </div>
          </div>

          {/* Cột 3: Socials */}
          <div className="flex items-center gap-[20px]">
            <Link href="https://www.facebook.com/Viss.ecom" target="_blank" rel="noopener noreferrer" className="inline-flex h-[43px] w-[43px] items-center justify-center bg-[#D9D9D9] hover:bg-white transition-colors">
              <Facebook className="h-[20px] w-[20px] text-black" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
