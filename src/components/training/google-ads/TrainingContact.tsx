'use client';

import { useState } from 'react';
import { normalizeStrapiText } from '@/lib/strapi';
import SuccessModal from '@/components/shared/SuccessModal';

interface TrainingContactFields {
    name: string;
    phone: string;
    email: string;
    course_interest: string;
    message: string;
}

interface CourseOption {
    value: string;
    label: string;
}

interface Props {
    title?: string;
    description?: string;
    ctaText?: string;
    fields?: TrainingContactFields;
    courseOptions?: CourseOption[];
    locale?: string;
}

export default function TrainingContact({ title, description, ctaText, fields, courseOptions, locale = 'vi' }: Props) {
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
            service: formData.get('course'), // map to same API field
            message: formData.get('message'),
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

    const defaultCourseOptions: CourseOption[] = courseOptions || [
        { value: 'basic', label: isEN ? 'Basic' : 'Cơ bản' },
        { value: 'advanced', label: isEN ? 'Advanced' : 'Nâng cao' },
        { value: 'internal', label: isEN ? 'Internal Training' : 'Đào tạo nội bộ' },
    ];

    return (
        <>
            <section id="training-contact" className="w-full bg-[#FFF8ED] text-black">
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
                                        {isEN ? 'Register for ' : 'Đăng ký tư vấn khoá học '}
                                        <span className="text-[#AF7E2D]">Google Ads</span>
                                    </h2>
                                )}
                                {description && (
                                    <p
                                        className="text-[16px] md:text-[20px] font-light leading-snug whitespace-pre-line text-center lg:text-left"
                                        dangerouslySetInnerHTML={{ __html: normalizeStrapiText(description) }}
                                    />
                                )}
                            </div>

                            <button
                                type="submit"
                                form="training-contact-form"
                                disabled={loading}
                                className="self-center lg:self-start border border-[#AF7E2D] px-[40px] py-[20px] rounded-[8px] text-[#AF7E2D] font-medium text-[16px] hover:bg-[#AF7E2D] hover:text-white transition-colors disabled:opacity-50"
                            >
                                {loading ? (isEN ? 'Sending...' : 'Đang gửi...') : (ctaText || (isEN ? 'Submit Information' : 'Gửi thông tin'))}
                            </button>
                        </div>

                        {/* Right – Form */}
                        <form id="training-contact-form" onSubmit={handleSubmit} className="flex-1 flex flex-col gap-[10px] w-full max-w-[600px] lg:max-w-none mx-auto lg:mx-0">
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
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder={fields?.email || 'Email'}
                                className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[19px] py-[14px] text-[16px] font-medium text-[#171717] outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-colors placeholder:text-[#939292]"
                            />
                            <div className="relative">
                                <select
                                    name="course"
                                    defaultValue=""
                                    className="w-full h-[51px] rounded-[16px] border-none bg-[#D9D9D9] px-[19px] py-[16px] text-[16px] font-medium outline-none focus:ring-2 focus:ring-[#AF7E2D] appearance-none cursor-pointer transition-colors text-[#939292]"
                                >
                                    <option value="" disabled hidden>
                                        {fields?.course_interest || 'Khoá học quan tâm'}
                                    </option>
                                    {defaultCourseOptions.map((opt) => (
                                        <option key={opt.value} value={opt.value} className="text-[#171717]">
                                            {opt.label}
                                        </option>
                                    ))}
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


                        </form>
                    </div>
                </div>
            </section >
            <SuccessModal isOpen={success} onClose={() => setSuccess(false)} />
        </>
    );
}
