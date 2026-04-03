'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { normalizeStrapiText } from '@/lib/strapi';
import SuccessModal from '@/components/shared/SuccessModal';

interface TiktokAdsContactProps {
    title: string;
    description: string;
    ctaText: string;
    fields: {
        name: string;
        phone: string;
        website: string;
        email: string;
        service_interest: string;
        message: string;
    };
    locale?: string;
}

export default function TiktokAdsContact({
    title,
    description,
    ctaText,
    fields,
    locale = 'vi',
}: TiktokAdsContactProps) {
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
            service: 'tiktok-ads',
            message: formData.get('service_interest'),
            source: 'tiktok-ads-contact',
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error(isEN ? 'Failed to submit' : 'Gửi thông tin thất bại');
            setSuccess(true);
            e.currentTarget.reset();
        } catch (err) {
            setError(err instanceof Error ? err.message : (isEN ? 'An error occurred' : 'Đã có lỗi xảy ra'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section id="contact" className="w-full bg-[#FFF8ED] text-black py-[60px] md:py-[100px] px-5 flex justify-center">
                <div className="w-full max-w-[1240px] flex flex-col md:flex-row gap-[60px] md:gap-[122px] items-start">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 flex flex-col gap-[32px] w-full max-w-[505px]"
                    >
                        {title && (
                            <h2
                                className="text-[32px] md:text-[40px] font-semibold leading-tight whitespace-pre-wrap text-black"
                                dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title) }}
                            />
                        )}
                        {description && (
                            <div
                                className="font-light text-[18px] md:text-[20px] text-black leading-relaxed whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: normalizeStrapiText(description) }}
                            />
                        )}
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 w-full flex flex-col gap-[40px] md:gap-[60px]"
                    >
                        <form id="tiktok-ads-form" onSubmit={handleSubmit} className="flex flex-col gap-[12px] w-full">
                            {/* Row 1 */}
                            <div className="flex flex-col md:flex-row gap-[10px] w-full">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={fields.name}
                                    required
                                    className="flex-1 bg-[#DBE0EC] border-none text-black placeholder-[#939292] px-[16px] py-[14px] rounded-[16px] h-[51px] font-medium text-[16px] focus:outline-none focus:ring-1 focus:ring-[#AF7E2D] transition-all font-['Inter']"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={fields.phone}
                                    required
                                    className="flex-1 bg-[#DBE0EC] border-none text-black placeholder-[#939292] px-[16px] py-[14px] rounded-[16px] h-[51px] font-medium text-[16px] focus:outline-none focus:ring-1 focus:ring-[#AF7E2D] transition-all font-['Inter']"
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-col md:flex-row gap-[10px] w-full">
                                <input
                                    type="url"
                                    name="website"
                                    placeholder={fields.website}
                                    className="flex-1 bg-[#DBE0EC] border-none text-black placeholder-[#939292] px-[16px] py-[14px] rounded-[16px] h-[51px] font-medium text-[16px] focus:outline-none focus:ring-1 focus:ring-[#AF7E2D] transition-all font-['Inter']"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={fields.email}
                                    required
                                    className="flex-1 bg-[#DBE0EC] border-none text-black placeholder-[#939292] px-[16px] py-[14px] rounded-[16px] h-[51px] font-medium text-[16px] focus:outline-none focus:ring-1 focus:ring-[#AF7E2D] transition-all font-['Inter']"
                                />
                            </div>

                            {/* Row 3 - Service Interest */}
                            <textarea
                                name="service_interest"
                                placeholder={fields.service_interest}
                                required
                                className="w-full bg-[#DBE0EC] border-none text-black placeholder-[#939292] px-[16px] py-[18px] rounded-[16px] font-medium text-[16px] focus:outline-none focus:ring-1 focus:ring-[#AF7E2D] transition-all font-['Inter'] min-h-[171px] resize-y"
                            />

                            {error && <p className="text-red-500 font-medium text-sm mt-2">{error}</p>}

                            {/* Submit Button */}
                            <div className="mt-4 md:mt-[40px] text-left">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex items-center justify-center bg-transparent border border-[#AF7E2D] hover:bg-[#AF7E2D] hover:text-white text-[#AF7E2D] px-[40px] py-[20px] rounded-[8px] font-medium text-[16px] transition-colors duration-300 disabled:opacity-50"
                                >
                                    {loading ? (isEN ? 'Sending...' : 'Đang gửi...') : ctaText}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
            <SuccessModal isOpen={success} onClose={() => setSuccess(false)} />
        </>
    );
}
