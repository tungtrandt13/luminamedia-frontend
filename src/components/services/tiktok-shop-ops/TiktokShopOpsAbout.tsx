'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TiktokShopOpsAboutProps {
  title: string;
  paragraphs: string[];
  image: string;
}

export default function TiktokShopOpsAbout({
  title,
  paragraphs,
  image,
}: TiktokShopOpsAboutProps) {
  return (
    <section className="w-full bg-[#000000] text-white py-[60px] md:py-[100px] px-5 flex justify-center">
      <div className="w-full max-w-[1240px] flex flex-col gap-[40px] md:gap-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-[40px]"
        >
          {/* Top row: title + two text columns như Figma */}
          <div className="flex flex-col md:flex-row gap-[40px] items-start">
            <h2 className="flex-1 text-[40px] md:text-[56px] font-semibold leading-tight whitespace-pre-wrap">
              {title}
            </h2>

            <div className="flex-1 flex flex-col md:flex-row gap-[24px] text-[16px] md:text-[20px] font-light leading-relaxed">
              {paragraphs.map((p, index) => (
                <p
                  key={index}
                  className="whitespace-pre-wrap flex-1"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Bottom row: full-width image */}
          {image && (
            <div className="relative w-full aspect-[1240/558] rounded-[16px] overflow-hidden bg-black">
              <Image
                src={image}
                alt={title}
                fill
                className="object-fill"
                sizes="(min-width: 1240px) 1240px, 100vw"
                priority
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

