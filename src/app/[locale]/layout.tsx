import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBubble from "@/components/shared/StickyBubble";
import { getServices, getGlobalSettings } from "@/lib/strapi";
import "../globals.css";
import { routing } from "@/i18n/routing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "vietnamese"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Lumina Media Agency",
  description: "Lumina Media Agency - Đối tác chiến lược cho tăng trưởng truyền thông, quảng cáo và thương mại điện tử bền vững",
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
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
      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} resend-theme antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-dvh text-white flex flex-col">
            <Header locale={locale} services={services} globalSettings={globalSettings} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale} />
          </div>
          <StickyBubble />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
