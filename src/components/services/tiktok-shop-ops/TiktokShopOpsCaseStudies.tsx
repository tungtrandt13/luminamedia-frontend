'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TiktokShopOpsCaseStudy } from '@/lib/mock-data/tiktok-shop-ops-mock';
import Image from 'next/image';

interface TiktokShopOpsCaseStudiesProps {
  title: string;
  description: string;
  items: TiktokShopOpsCaseStudy[];
}

export default function TiktokShopOpsCaseStudies({
  title,
  description,
  items,
}: TiktokShopOpsCaseStudiesProps) {
  return (
    <section className="w-full bg-[#000000] text-white py-[60px] md:py-[100px] px-5 flex justify-center">
      <div className="w-full max-w-[1240px] flex flex-col gap-[40px] md:gap-[60px]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-[24px]">
          <h2 className="flex-1 text-[40px] md:text-[56px] font-semibold leading-tight whitespace-pre-wrap">
            {title}
          </h2>
          <p className="flex-1 text-[16px] md:text-[20px] font-light leading-relaxed whitespace-pre-wrap">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {items.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-white text-black rounded-[16px] overflow-hidden flex flex-col"
            >
              <div className="relative h-[220px] md:h-[260px] w-full">
                <Image
                  src={item.image || '/images/services/tiktok-shop-case-default.png'}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[20px] px-[20px] pt-[24px] pb-[32px]">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-baseline gap-[8px]">
                    <span className="text-[14px] md:text-[16px] font-medium text-[#939292] uppercase">
                      {item.country_code}
                    </span>
                    <h3 className="flex-1 text-[18px] md:text-[20px] font-semibold leading-snug whitespace-pre-wrap">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[16px] md:text-[20px] font-light leading-snug whitespace-pre-wrap">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-[#E0E0E0] pt-[16px] flex items-center justify-between gap-[16px]">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-[6px]">
                      <span className="text-[#AF7E2D] text-[28px] md:text-[40px] font-semibold leading-none">
                        {item.metric_primary.value}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M11.6667 23.3333L20.0001 15L28.3334 23.3333H11.6667Z"
                          fill="#11C900"
                        />
                      </svg>
                    </div>
                    <p className="text-[12px] md:text-[14px] font-normal leading-[16px] tracking-[-0.02em] text-black">
                      {item.metric_primary.label}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-[6px]">
                      <span className="text-[#AF7E2D] text-[28px] md:text-[40px] font-semibold leading-none">
                        {item.metric_secondary.value}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M11.6667 23.3333L20.0001 15L28.3334 23.3333H11.6667Z"
                          fill="#11C900"
                        />
                      </svg>
                    </div>
                    <p className="text-[12px] md:text-[14px] font-normal leading-[16px] tracking-[-0.02em] text-black">
                      {item.metric_secondary.label}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

