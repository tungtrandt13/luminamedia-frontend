'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TiktokShopOpsAboutProps {
  title: string;
  paragraphs: string[];
  images: string[];
}

export default function TiktokShopOpsAbout({
  title,
  paragraphs,
  images,
}: TiktokShopOpsAboutProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (images.length <= 1) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  }, [images.length]);

  useEffect(() => {
    setCurrentIndex(0);
    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    startAutoPlay();
  };

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

          {/* Bottom row: full-width slideshow */}
          {images.length > 0 && (
            <div className="flex flex-col items-center gap-[16px]">
              {/* Slideshow image */}
              <div className="relative w-full aspect-[1240/558] rounded-[16px] overflow-hidden bg-black">
                {images.map((img, index) => (
                  <div
                    key={`${img}-${index}`}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{ opacity: index === currentIndex ? 1 : 0 }}
                  >
                    <Image
                      src={img}
                      alt={`${title} ${index + 1}`}
                      fill
                      className="object-fill"
                      sizes="(min-width: 1240px) 1240px, 100vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Dot indicators – below image */}
              {images.length > 1 && (
                <div className="flex gap-[10px]">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => goToSlide(index)}
                      className={`h-[12px] w-[12px] rounded-full transition-colors duration-300 ${
                        index === currentIndex ? 'bg-[#AF7E2D]' : 'bg-white/30'
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
