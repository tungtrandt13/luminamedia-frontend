'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { normalizeStrapiText } from '@/lib/strapi';

interface RentAdsContactProps {
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

export default function RentAdsContact({
    title,
    description,
    ctaText,
    fields,
}: RentAdsContactProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        website: '',
        email: '',
        service_interest: 'rent-ads-account', // Default to this page's service
        message: '',
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
                service_interest: 'rent-ads-account',
                message: '',
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            // Reset success message after 3 seconds
            if (submitStatus === 'success') {
                setTimeout(() => setSubmitStatus('idle'), 3000);
            }
        }
    };

    return (
        <section id="contact" className="w-full bg-[#FFF8ED] py-[60px] md:py-[100px] px-5 flex justify-center">
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row gap-[60px] lg:gap-[115px] items-start">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 flex flex-col gap-[32px] md:gap-[60px] w-full max-w-[500px]"
                >
                    <div className="flex flex-col gap-[20px] md:gap-[32px]">
                        {title && (
                            <h2
                                className="text-[32px] md:text-[40px] font-semibold text-black leading-tight whitespace-pre-wrap"
                                dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title) }}
                            />
                        )}
                        <p className="text-[16px] md:text-[20px] font-light text-black leading-relaxed whitespace-pre-wrap">
                            {description}
                        </p>
                    </div>

                    <div className="hidden lg:block">
                        {/* CTA Button placed here per Figma design, although usually it submits the form */}
                        <button
                            onClick={() => document.getElementById('rent-ads-form')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
                            disabled={isSubmitting}
                            className="inline-flex items-center justify-center border border-[#AF7E2D] hover:bg-[#AF7E2D] hover:text-white text-[#AF7E2D] px-[40px] py-[16px] rounded-[8px] font-medium text-[16px] transition-colors duration-300 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Đang gửi...' : ctaText}
                        </button>
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <form id="rent-ads-form" onSubmit={handleSubmit} className="flex flex-col gap-[10px] w-full">
                        {/* Row 1 */}
                        <div className="flex flex-col md:flex-row gap-[10px] w-full">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={fields.name}
                                required
                                className="flex-1 bg-[#D9D9D9] text-[#171717] placeholder-[#939292] px-[19px] py-[14px] rounded-[16px] h-[51px] font-medium text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#AF7E2D]/50 transition-all font-['Inter']"
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={fields.phone}
                                required
                                className="flex-1 bg-[#D9D9D9] text-[#171717] placeholder-[#939292] px-[19px] py-[14px] rounded-[16px] h-[51px] font-medium text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#AF7E2D]/50 transition-all font-['Inter']"
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
                                className="flex-1 bg-[#D9D9D9] text-[#171717] placeholder-[#939292] px-[19px] py-[14px] rounded-[16px] h-[51px] font-medium text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#AF7E2D]/50 transition-all font-['Inter']"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={fields.email}
                                required
                                className="flex-1 bg-[#D9D9D9] text-[#171717] placeholder-[#939292] px-[19px] py-[14px] rounded-[16px] h-[51px] font-medium text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#AF7E2D]/50 transition-all font-['Inter']"
                            />
                        </div>

                        {/* Row 3 - Service Selection */}
                        <div className="w-full relative">
                            <select
                                name="service_interest"
                                value={formData.service_interest}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#D9D9D9] text-[#171717] px-[19px] py-[14px] rounded-[16px] h-[51px] font-medium text-[14px] md:text-[16px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#AF7E2D]/50 transition-all font-['Inter'] disabled:opacity-80"
                            >
                                <option value="rent-ads-account" className="text-[#171717]">Thuê tài khoản Google Ads</option>
                                <option value="google-ads" className="text-[#171717]">Quảng cáo Google Ads</option>
                                <option value="facebook-ads" className="text-[#171717]">Quảng cáo Facebook</option>
                                <option value="other" className="text-[#171717]">Khác</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#939292]">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Row 4 - Message */}
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={fields.message}
                            required
                            className="flex-1 bg-[#D9D9D9] text-[#171717] placeholder-[#939292] px-[19px] py-[18px] rounded-[16px] font-medium text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#AF7E2D]/50 transition-all font-['Inter'] min-h-[131px] resize-y"
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

                        {/* Mobile Submit Button */}
                        <div className="lg:hidden mt-4 w-full">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center border border-[#AF7E2D] hover:bg-[#AF7E2D] hover:text-white text-[#AF7E2D] px-[40px] py-[16px] rounded-[8px] font-medium text-[16px] transition-colors duration-300 disabled:opacity-50"
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
