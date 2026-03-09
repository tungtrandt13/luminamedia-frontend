'use client';

import React, { useState, useEffect, useCallback } from 'react';

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
    const defaultTitle = 'Được dẫn dắt bởi các chuyên gia';
    const displayMembers = members.length > 0 ? members : [];

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    // Responsive items per page
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 768) {
                setItemsPerPage(2);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(3);
            } else {
                setItemsPerPage(4);
            }
        };
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(displayMembers.length / itemsPerPage);
    const canNavigate = totalPages > 1;

    // Reset page if out of bounds after resize
    useEffect(() => {
        if (currentPage >= totalPages && totalPages > 0) {
            setCurrentPage(totalPages - 1);
        }
    }, [currentPage, totalPages]);

    const handleNext = useCallback(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    }, [totalPages]);

    const handlePrev = useCallback(() => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    }, [totalPages]);

    const goToPage = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    // Calculate translateX percentage based on current page
    const translateX = -(currentPage * (100 / totalPages));

    return (
        <section className="w-full bg-white text-[#111111] py-[60px] md:py-[100px] overflow-hidden">
            <div className="mx-auto w-full max-w-[1240px] px-5 flex flex-col gap-10 md:gap-[80px]">

                {/* Header */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
                    <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-[1.2] text-[#111111] max-w-[600px]">
                        {title || defaultTitle}
                    </h2>

                    {/* Navigation Arrows */}
                    {canNavigate && (
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

                {/* Team Members - Slide Carousel */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            width: `${(displayMembers.length / itemsPerPage) * 100}%`,
                            transform: `translateX(${translateX}%)`,
                        }}
                    >
                        {displayMembers.map((member, idx) => (
                            <div
                                key={member.id || idx}
                                className="flex flex-col gap-4 group cursor-pointer px-3"
                                style={{ width: `${100 / displayMembers.length}%` }}
                            >
                                {/* Avatar Box */}
                                <div className="w-full bg-[#E5E9F0] rounded-[16px] overflow-hidden relative" style={{ aspectRatio: '290 / 344' }}>
                                    {member.avatar ? (
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
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
                </div>

                {/* Pagination Dots */}
                {canNavigate && (
                    <div className="flex justify-center mt-2 md:mt-6 gap-3">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToPage(idx)}
                                className={`rounded-full transition-all duration-300 ${idx === currentPage
                                        ? 'bg-[#AF7E2D] w-[32px] h-[14px]'
                                        : 'bg-[#D9D9D9] w-[14px] h-[14px] hover:bg-[#BFBFBF]'
                                    }`}
                                aria-label={`Go to page ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
