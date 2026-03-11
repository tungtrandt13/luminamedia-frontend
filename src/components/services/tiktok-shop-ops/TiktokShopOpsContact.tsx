'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SuccessModal from '@/components/shared/SuccessModal';

interface TiktokShopOpsContactProps {
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  fields: {
    name: string;
    phone: string;
    tiktok_link: string;
    email: string;
    service_interest: string;
  };
  locale?: string;
}

export default function TiktokShopOpsContact({
  title,
  description,
  benefits,
  ctaText,
  fields,
  locale = 'vi',
}: TiktokShopOpsContactProps) {
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
      website: formData.get('tiktok_link'),
      service: 'tiktok-shop-ops',
      message: formData.get('service_interest'),
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
      <section
        id="contact"
        className="w-full bg-[#FFF8ED] text-black py-[60px] md:py-[100px] px-5 flex justify-center"
      >
        <div className="w-full max-w-[1240px] flex flex-col lg:flex-row gap-[60px] lg:gap-[120px] items-start">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col gap-[24px] md:gap-[32px] w-full max-w-[505px]"
          >
            <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.3] whitespace-pre-wrap">
              {title}
            </h2>
            <div className="flex flex-col gap-3 text-[16px] md:text-[20px] leading-relaxed">
              <p className="font-light whitespace-pre-wrap">{description}</p>
              <div className="font-light">
                <p className="font-semibold">
                  {isEN ? 'VISSECOM offers you:' : 'VISSECOM mang đến cho bạn:'}
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  {benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[10px] w-full"
            >
              <div className="flex flex-col md:flex-row gap-[10px] w-full">
                <input
                  type="text"
                  name="name"
                  placeholder={fields.name}
                  required
                  className="flex-1 bg-[#DBE0EC] text-black placeholder-[#939292] px-[19px] py-[14px] rounded-[16px] h-[51px] font-medium text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={fields.phone}
                  required
                  className="flex-1 bg-[#DBE0EC] text-black placeholder-[#939292] px-[19px] py-[14px] rounded-[16px] h-[51px] font-medium text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-all"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-[10px] w-full">
                <input
                  type="url"
                  name="tiktok_link"
                  placeholder={fields.tiktok_link}
                  className="flex-1 bg-[#DBE0EC] text-black placeholder-[#939292] px-[19px] py-[14px] rounded-[16px] h-[51px] font-medium text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={fields.email}
                  required
                  className="flex-1 bg-[#DBE0EC] text-black placeholder-[#939292] px-[19px] py-[14px] rounded-[16px] h-[51px] font-medium text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-all"
                />
              </div>

              <textarea
                name="service_interest"
                placeholder={fields.service_interest}
                required
                className="w-full bg-[#DBE0EC] text-black placeholder-[#939292] px-[19px] py-[18px] rounded-[16px] font-medium text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#AF7E2D] transition-all min-h-[150px] resize-y"
              />

              {error && <p className="text-red-500 font-medium text-sm mt-2">{error}</p>}

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center border border-[#AF7E2D] text-[#AF7E2D] hover:bg-[#AF7E2D] hover:text-white px-[40px] py-[20px] rounded-[8px] font-medium text-[16px] transition-colors duration-300 disabled:opacity-50"
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
