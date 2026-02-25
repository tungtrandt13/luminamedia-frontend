'use client';

import type { AdsWhyUsPoint } from '@/lib/mock-data/google-ads-mock';

interface Props {
    title?: string;
    highlightedText?: string;
    points?: AdsWhyUsPoint[];
    image?: string;
}

export default function AdsWhyUs({ title, highlightedText, points = [], image }: Props) {
    return (
        <section className="w-full bg-black text-white overflow-hidden">
            <div className="mx-auto w-full max-w-[1500px] px-[20px] py-[60px] lg:py-[100px]">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-[126px] items-start justify-center">

                    {/* Left – Text */}
                    <div className="flex flex-col gap-10 lg:gap-[80px] w-full lg:w-[507px] shrink-0">
                        {/* Title */}
                        <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold leading-[normal] whitespace-pre-line text-center lg:text-left">
                            <span className="leading-[normal]">
                                {title || 'Tại sao nên\nchọn '}
                            </span>
                            <span className="text-[#AF7E2D] leading-[normal]">{highlightedText || 'VISSCOM'}</span>
                        </h2>

                        {/* Checklist */}
                        <div className="flex flex-col gap-[20px]">
                            {points.map((point, idx) => (
                                <div key={point.id} className="flex flex-col gap-[20px]">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-[20px]">
                                            {/* Check icon */}
                                            <div className="w-[30px] h-[30px] rounded-[50px] bg-[#AF7E2D] p-[10px] flex items-center justify-center shrink-0">
                                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 4.5L5 8.5L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-[20px] font-semibold leading-[normal] text-white">
                                                {point.text}
                                            </p>
                                        </div>
                                        {/* Arrow dropdown */}
                                        <svg width="14" height="10" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                            <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    {/* Divider */}
                                    {idx < points.length - 1 && (
                                        <div className="w-full h-[1px] bg-[#333333]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right – Image */}
                    <div className="flex-1 w-full lg:h-[501px] rounded-[16px] overflow-hidden">
                        {image ? (
                            <img
                                src={image}
                                alt="Why choose VISSCOM"
                                className="w-full h-full object-cover rounded-[16px] pointer-events-none"
                            />
                        ) : (
                            <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-[#2a2015] to-[#1a1510] flex items-center justify-center rounded-[16px] border border-white/10">
                                <div className="text-center p-8">
                                    <div className="text-[60px] mb-4">🏆</div>
                                    <p className="text-white/40 text-[18px] font-light">VISSCOM</p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
