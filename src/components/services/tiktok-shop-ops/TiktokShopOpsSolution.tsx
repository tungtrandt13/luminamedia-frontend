'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TiktokShopOpsSolutionStep } from '@/lib/mock-data/tiktok-shop-ops-mock';

interface TiktokShopOpsSolutionProps {
  title: string;
  description: string;
  steps: TiktokShopOpsSolutionStep[];
}

export default function TiktokShopOpsSolution({
  title,
  description,
  steps,
}: TiktokShopOpsSolutionProps) {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="w-full bg-[#000000] text-white py-[60px] md:py-[100px] px-5 flex justify-center">
      <div className="w-full max-w-[1240px] flex flex-col lg:flex-row gap-[40px] items-start justify-center">
        {/* Left: Title + description */}
        <div className="flex-1 w-full lg:sticky lg:top-[120px] flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold leading-tight whitespace-pre-wrap"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[16px] md:text-[20px] font-light leading-relaxed whitespace-pre-wrap max-w-[540px]"
          >
            {description}
          </motion.p>
        </div>

        {/* Right: steps timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex-[1.2] w-full flex flex-col gap-[30px] md:gap-[40px]"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariant}
              className="flex gap-[20px] md:gap-[31px] items-start group"
            >
              <div className="flex flex-col items-center shrink-0 w-[40px] md:w-[60px]">
                <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-[#AF7E2D] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="text-white font-semibold text-[16px] md:text-[20px] leading-none">
                    {step.step_number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-[2px] h-[80px] md:h-[90px] bg-gradient-to-b from-[#AF7E2D] to-[#AF7E2D]/10 mt-4" />
                )}
              </div>

              <div className="flex-1 flex flex-col gap-[8px]">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-snug whitespace-pre-wrap">
                  {step.title}
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {step.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-[16px] md:text-[20px] font-light leading-snug whitespace-pre-wrap"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

