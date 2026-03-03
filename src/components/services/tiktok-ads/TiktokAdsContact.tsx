'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { normalizeStrapiText } from '@/lib/strapi';

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
}

export default function TiktokAdsContact({
    title,
    description,
    ctaText,
    fields,
}: TiktokAdsContactProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        website: '',
        email: '',
        service_interest: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({
                name: '',
                phone: '',
                website: '',
                email: '',
                service_interest: '',
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            if (submitStatus === 'success') {
                setTimeout(() => setSubmitStatus('idle'), 3000);
            }
        }
    };

    return (
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
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={fields.name}
                                required
                                className="flex-1 bg-[#DBE0EC] border-none text-black placeholder-[#939292] px-[16px] py-[14px] rounded-[16px] h-[51px] font-medium text-[16px] focus:outline-none focus:ring-1 focus:ring-[#AF7E2D] transition-all font-['Inter']"
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
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
                                value={formData.website}
                                onChange={handleChange}
                                placeholder={fields.website}
                                className="flex-1 bg-[#DBE0EC] border-none text-black placeholder-[#939292] px-[16px] py-[14px] rounded-[16px] h-[51px] font-medium text-[16px] focus:outline-none focus:ring-1 focus:ring-[#AF7E2D] transition-all font-['Inter']"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={fields.email}
                                required
                                className="flex-1 bg-[#DBE0EC] border-none text-black placeholder-[#939292] px-[16px] py-[14px] rounded-[16px] h-[51px] font-medium text-[16px] focus:outline-none focus:ring-1 focus:ring-[#AF7E2D] transition-all font-['Inter']"
                            />
                        </div>

                        {/* Row 3 - Service Selection */}
                        <textarea
                            name="service_interest"
                            value={formData.service_interest}
                            onChange={handleChange}
                            placeholder={fields.service_interest}
                            required
                            className="w-full bg-[#DBE0EC] border-none text-black placeholder-[#939292] px-[16px] py-[18px] rounded-[16px] font-medium text-[16px] focus:outline-none focus:ring-1 focus:ring-[#AF7E2D] transition-all font-['Inter'] min-h-[171px] resize-y"
                        />

                        {submitStatus === 'success' && (
                            <p className="text-green-600 font-medium text-sm mt-2">
                                Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ lại sớm.
                            </p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-500 font-medium text-sm mt-2">
                                Có lỗi xảy ra, vui lòng thử lại sau.
                            </p>
                        )}

                        {/* Submit Button */}
                        <div className="mt-4 md:mt-[40px] text-left">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center bg-transparent border border-[#AF7E2D] hover:bg-[#AF7E2D] hover:text-white text-[#AF7E2D] px-[40px] py-[20px] rounded-[8px] font-medium text-[16px] transition-colors duration-300 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Đang gửi...' : ctaText}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
