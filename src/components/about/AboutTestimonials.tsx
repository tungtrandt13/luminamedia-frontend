'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { normalizeStrapiText } from '@/lib/strapi';

interface ReviewInfo {
    id: number;
    quote: string;
    author: string;
    role: string;
    avatar: string;
}

interface Props {
    title?: string;
    reviews?: ReviewInfo[];
}

export default function AboutTestimonials({ title, reviews = [] }: Props) {
    const defaultTitle = 'Khách hàng nói gì về\nVISS International';
    const displayReviews = reviews.length > 0 ? reviews : [];

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const scrollToIndex = useCallback((idx: number, resetTimer = true) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const cards = container.querySelectorAll('[data-card]');
        if (cards[idx]) {
            const card = cards[idx] as HTMLElement;
            const scrollLeft = card.offsetLeft - container.offsetLeft;
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
        if (resetTimer) {
            setActiveIndex(idx);
            // Reset auto-scroll timer when user manually navigates
            if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current);
                autoScrollRef.current = setInterval(() => {
                    setActiveIndex((prev) => {
                        const next = (prev + 1) % displayReviews.length;
                        scrollToIndex(next, false);
                        return next;
                    });
                }, 4000);
            }
        }
    }, [displayReviews.length]);

    // Auto-scroll effect
    useEffect(() => {
        if (displayReviews.length <= 1) return;

        const startAutoScroll = () => {
            autoScrollRef.current = setInterval(() => {
                if (!isPaused) {
                    setActiveIndex((prev) => {
                        const next = (prev + 1) % displayReviews.length;
                        scrollToIndex(next, false);
                        return next;
                    });
                }
            }, 4000);
        };

        startAutoScroll();

        return () => {
            if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        };
    }, [displayReviews.length, isPaused, scrollToIndex]);

    return (
        <section className="w-full bg-[#000000] text-white py-[60px] md:py-[100px] overflow-hidden">
            <div className="mx-auto w-full max-w-[1240px] px-5 flex flex-col gap-[80px] items-center">

                {/* Title */}
                <h2
                    className="text-[32px] sm:text-[40px] font-semibold text-center max-w-[800px] mx-auto leading-[52px] whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title || defaultTitle) }}
                />

                {/* Cards + Dots */}
                <div className="flex flex-col gap-[60px] items-center w-full">
                    {/* Testimonials List */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-[22px] pb-4 lg:pb-0 scrollbar-hide w-full"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        {displayReviews.map((item, idx) => (
                            <div
                                key={item.id || idx}
                                data-card
                                className="min-w-[320px] lg:min-w-0 snap-start bg-[#AF7E2D] px-[21px] py-[19px] rounded-[16px] flex flex-col justify-between h-[250px]"
                            >
                                {/* Quote */}
                                <div>
                                    <p className="text-[20px] text-white font-semibold leading-[24px]">
                                        {item.quote}
                                    </p>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-[15px] mt-auto">
                                    {item.avatar ? (
                                        <img
                                            src={item.avatar}
                                            alt={item.author}
                                            className="w-[50px] h-[50px] rounded-full object-cover bg-white shrink-0"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9] shrink-0" />
                                    )}
                                    <div className="flex flex-col gap-[3px]">
                                        <h4 className="text-[16px] font-medium text-white leading-[19px]">{item.author}</h4>
                                        <p className="text-[14px] text-white font-normal font-mono tracking-[-0.03em] leading-[16px] whitespace-pre-wrap">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    {displayReviews.length > 1 && (
                        <div className="flex justify-center gap-[10px]">
                            {displayReviews.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => scrollToIndex(idx)}
                                    className={`w-[12px] h-[12px] rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#AF7E2D] scale-125' : 'bg-[#D9D9D9]'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
