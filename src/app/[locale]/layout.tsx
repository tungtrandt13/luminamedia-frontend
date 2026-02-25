import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServices, getGlobalSettings } from "@/lib/strapi";
import "../globals.css";
import { routing } from "@/i18n/routing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VISS International",
  description: "Công ty TNHH Thương mại và Dịch vụ Quốc tế VISS - Đối tác chiến lược cho sự tăng trưởng bền vững",
  alternates: {
    languages: {
      'vi': '/vi',
      'en': '/en',
    },
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const [messages, services, globalSettings] = await Promise.all([
    getMessages(),
    getServices(locale),
    getGlobalSettings(locale),
  ]);

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-dvh bg-black text-white flex flex-col">
            <Header locale={locale} services={services} globalSettings={globalSettings} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
