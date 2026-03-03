'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

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
    const defaultTitle = 'Khách hàng nói gì về VISS International';
    const displayReviews = reviews.length > 0 ? reviews : [];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isScrollable, setIsScrollable] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkScroll = () => {
            if (scrollRef.current) {
                setIsScrollable(scrollRef.current.scrollWidth > scrollRef.current.clientWidth + 5);
            }
        };
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [displayReviews]);

    const scrollToIndex = useCallback((idx: number) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const cards = container.querySelectorAll('[data-card]');
        if (cards[idx]) {
            cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
        setActiveIndex(idx);
    }, []);

    return (
        <section className="w-full bg-[#000000] text-white py-[60px] md:py-[100px] overflow-hidden">
            <div className="mx-auto w-full max-w-[1240px] px-5 flex flex-col gap-10 md:gap-[80px]">

                {/* Title */}
                <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold text-center max-w-[800px] mx-auto leading-tight">
                    {title || defaultTitle}
                </h2>

                {/* Testimonials List */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-[22px] pb-8 lg:pb-0 scrollbar-hide"
                >
                    {displayReviews.map((item, idx) => (
                        <div
                            key={item.id || idx}
                            data-card
                            className="min-w-[320px] lg:min-w-0 snap-start bg-[#AF7E2D] p-5 lg:px-[21px] lg:py-[19px] rounded-[16px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 min-h-[250px]"
                        >
                            <div className="mb-6 lg:mb-11">
                                <p className="text-[18px] md:text-[20px] text-white font-light leading-snug whitespace-pre-wrap">
                                    {item.quote}
                                </p>
                            </div>

                            <div className="flex items-center gap-[15px] mt-auto">
                                <img
                                    src={item.avatar || '/images/default-avatar.png'}
                                    alt={item.author}
                                    className="w-[50px] h-[50px] rounded-full object-cover bg-white"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://via.placeholder.com/100?text=Avatar';
                                        target.style.display = 'none';
                                    }}
                                />
                                <div className="flex flex-col gap-[3px]">
                                    <h4 className="text-[16px] font-medium text-white leading-tight">{item.author}</h4>
                                    <p className="text-[14px] text-white opacity-90 font-mono tracking-tighter leading-tight whitespace-pre-wrap">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                {isScrollable && (
                    <div className="flex justify-center mt-10 gap-2">
                        {displayReviews.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToIndex(idx)}
                                className={`w-[12px] h-[12px] rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#AF7E2D]' : 'bg-[#D9D9D9]'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
