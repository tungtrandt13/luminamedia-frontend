'use client';

import { useState } from 'react';
import type { AdsContactForm } from '@/lib/mock-data/google-ads-mock';
import { normalizeStrapiText } from '@/lib/strapi';
import SuccessModal from '@/components/shared/SuccessModal';

interface Props {
    title?: string;
    description?: string;
    ctaText?: string;
    fields?: AdsContactForm['fields'];
    locale?: string;
}

export default function AdsContact({ title, description, ctaText, fields, locale = 'vi' }: Props) {
    const isEN = locale === 'en';
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
            source: 'google-ads-contact',
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error(isEN ? 'Failed to submit' : 'Gửi thông tin thất bại');
            setSuccess(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : (isEN ? 'An error occurred' : 'Đã có lỗi xảy ra'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section id="contact" className="w-full bg-[#FFF8ED] text-black">
                <div className="mx-auto w-full max-w-[1500px] px-5 py-[60px] md:py-[100px]">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-[115px] items-start justify-center">

                        {/* Left – Text + CTA */}
                        <div className="flex-1 flex flex-col gap-8 lg:gap-[60px] w-full lg:max-w-[50%]">
                            <div className="flex flex-col gap-[32px]">
                                {title ? (
                                    <h2
                                        className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold leading-[1.3] whitespace-pre-line text-center lg:text-left"
                                        dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title) }}
                                    />
                                ) : (
                                    <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold leading-[1.3] whitespace-pre-line text-center lg:text-left">
                                        Bắt đầu tối ưu Google Ads cùng{' '}
                                        <span className="text-[#AF7E2D]">Lumina Media Agency</span>
                                    </h2>
                                )}
                                {description && (
                                    <p
                                        className="text-[16px] md:text-[20px] font-light leading-snug whitespace-pre-line text-center lg:text-left"
                                        dangerouslySetInnerHTML={{ __html: normalizeStrapiText(description) }}
                                    />
                                )}
                            </div>

                        </div>

                        {/* Right – Form */}
                        <form id="ads-contact-form" onSubmit={handleSubmit} className="flex-1 flex flex-col gap-[10px] w-full max-w-[600px] lg:max-w-none mx-auto lg:mx-0">
                            <div className="flex flex-col sm:flex-row gap-[10px]">
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder={fields?.name || 'Họ và tên'}
                                    className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[19px] py-[14px] text-[16px] font-medium text-[#171717] outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-colors placeholder:text-[#939292]"
                                />
                                <input
                                    required
                                    name="phone"
                                    type="tel"
                                    placeholder={fields?.phone || 'Số điện thoại'}
                                    className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[23px] py-[14px] text-[16px] font-medium text-[#171717] outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-colors placeholder:text-[#939292]"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-[10px]">
                                <input
                                    name="website"
                                    type="url"
                                    placeholder={fields?.website || 'Link website'}
                                    className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[19px] py-[14px] text-[16px] font-medium text-[#171717] outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-colors placeholder:text-[#939292]"
                                />
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder={fields?.email || 'Email'}
                                    className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[23px] py-[14px] text-[16px] font-medium text-[#171717] outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-colors placeholder:text-[#939292]"
                                />
                            </div>
                            <div className="relative">
                                <select
                                    name="service"
                                    defaultValue=""
                                    className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[19px] py-[16px] text-[16px] font-medium outline-none focus:ring-2 focus:ring-[#AF7E2D] appearance-none cursor-pointer transition-colors text-[#939292]"
                                >
                                    <option value="" disabled hidden>
                                        {fields?.service_interest || 'Dịch vụ quan tâm'}
                                    </option>
                                    <option value="account-management" className="text-[#171717]">{isEN ? 'Google Ads Account Management' : 'Quản trị tài khoản Google Ads'}</option>
                                    <option value="google-ads-full" className="text-[#171717]">{isEN ? 'Google Ads Full Package' : 'Google Ads trọn gói'}</option>
                                    <option value="account-rental" className="text-[#171717]">{isEN ? 'Rent Google Ads Account' : 'Thuê tài khoản Google Ads'}</option>
                                    <option value="google-search" className="text-[#171717]">Google Search</option>
                                    <option value="gdn" className="text-[#171717]">Google Display Network</option>
                                    <option value="youtube-ads" className="text-[#171717]">{isEN ? 'YouTube Advertising' : 'Quảng cáo YouTube'}</option>
                                    <option value="google-shopping" className="text-[#171717]">Google Shopping</option>
                                    <option value="landing-page" className="text-[#171717]">{isEN ? 'Landing Page Optimization' : 'Tối ưu Landing Page'}</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#939292]">
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <textarea
                                name="message"
                                placeholder={fields?.message || 'Bạn cần hỗ trợ điều gì?'}
                                className="w-full h-[131px] rounded-[16px] border-none bg-[#D9D9D9] px-[19px] py-[18px] text-[16px] font-medium text-[#171717] outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-colors resize-none placeholder:text-[#939292]"
                            />

                            {error && <p className="text-red-500 text-sm text-center lg:text-left">{error}</p>}

                            <button
                                disabled={loading}
                                type="submit"
                                className="w-full rounded-[8px] bg-[#AF7E2D] py-[16px] px-[40px] text-[16px] font-medium text-white transition-all hover:bg-black active:scale-[0.98] disabled:opacity-50 mt-4"
                            >
                                {loading ? (isEN ? 'Sending...' : 'Đang gửi...') : ctaText || (isEN ? 'Submit' : 'Gửi')}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <SuccessModal isOpen={success} onClose={() => setSuccess(false)} />
        </>
    );
}
