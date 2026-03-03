'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    avatar: string;
}

interface Props {
    title?: string;
    members?: TeamMember[];
}

export default function AboutTeam({ title, members = [] }: Props) {
    // Mock data fallbacks
    const defaultTitle = 'Được dẫn dắt bởi các chuyên gia';
    const displayMembers = members.length > 0 ? members : [];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isScrollable, setIsScrollable] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkScroll = () => {
            if (scrollRef.current) {
                // Ensure there is actual overflow
                setIsScrollable(scrollRef.current.scrollWidth > scrollRef.current.clientWidth + 5);
            }
        };
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [displayMembers]);

    const scrollToIndex = useCallback((idx: number) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const cards = container.querySelectorAll('[data-card]');
        if (cards[idx]) {
            cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
        setActiveIndex(idx);
    }, []);

    const handleNext = useCallback(() => {
        const nextIdx = (activeIndex + 1) % displayMembers.length;
        scrollToIndex(nextIdx);
    }, [activeIndex, displayMembers.length, scrollToIndex]);

    const handlePrev = useCallback(() => {
        const prevIdx = (activeIndex - 1 + displayMembers.length) % displayMembers.length;
        scrollToIndex(prevIdx);
    }, [activeIndex, displayMembers.length, scrollToIndex]);

    return (
        <section className="w-full bg-white text-[#111111] py-[60px] md:py-[100px] overflow-hidden">
            <div className="mx-auto w-full max-w-[1240px] px-5 flex flex-col gap-10 md:gap-[80px]">

                {/* Header */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
                    <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-[1.2] text-[#111111] max-w-[600px]">
                        {title || defaultTitle}
                    </h2>

                    {/* Navigation Arrows */}
                    {isScrollable && (
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handlePrev}
                                className="w-[48px] h-[48px] rounded-full bg-[#AF7E2D] flex items-center justify-center text-white hover:bg-[#8F6623] transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-[48px] h-[48px] rounded-full bg-[#AF7E2D] flex items-center justify-center text-white hover:bg-[#8F6623] transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Team Members Grid - Slider */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-hide pb-4"
                >
                    {displayMembers.map((member, idx) => (
                        <div
                            key={member.id || idx}
                            data-card
                            className="flex-none w-[280px] lg:w-[290px] snap-start flex flex-col gap-4 group cursor-pointer"
                        >
                            {/* Avatar Box */}
                            <div className="w-full bg-[#E5E9F0] rounded-[16px] overflow-hidden relative" style={{ aspectRatio: '290 / 320' }}>
                                {member.avatar ? (
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none'; // Ẩn ảnh nếu lỗi để lòi nền xám ra
                                        }}
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full w-full bg-[#f1f1f1] text-[#939292]"></div>
                                )}
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Member Info */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[18px] md:text-[20px] font-semibold text-[#111111]">{member.name}</h3>
                                <p className="text-[16px] md:text-[18px] text-[#4A4A4A] font-light">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                {isScrollable && (
                    <div className="flex justify-center mt-2 md:mt-6 gap-3">
                        {displayMembers.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToIndex(idx)}
                                className={`w-[14px] h-[14px] rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#AF7E2D]' : 'bg-[#D9D9D9]'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
