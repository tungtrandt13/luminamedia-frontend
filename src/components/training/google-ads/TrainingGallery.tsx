'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
    title: string;
    highlightedText: string;
    images: string[];
}

export default function TrainingGallery({ title, highlightedText, images }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 3 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1));
    };

    // To ensure we always have something to show, using fallback logic if array is exactly 3 or less
    const canSlide = images.length > 3;

    return (
        <section className="w-full bg-black text-white py-[60px] lg:py-[100px] overflow-hidden">
            <div className="mx-auto w-full max-w-[1500px] px-[20px] flex flex-col gap-[60px] items-center">

                {/* Header */}
                <div className="flex flex-col md:flex-row w-full justify-between items-center gap-[40px]">
                    <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-tight flex flex-col sm:flex-row gap-2">
                        <span>{title}</span>
                        <span className="text-[#AF7E2D]">{highlightedText}</span>
                    </h2>

                    {/* Desktop Navigation Arrows */}
                    {canSlide && (
                        <div className="hidden md:flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full border border-white flex justify-center items-center hover:bg-white hover:text-black transition"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full border border-white flex justify-center items-center hover:bg-white hover:text-black transition"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Images Carousel view */}
                <div className="w-full relative">
                    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className="min-w-[300px] md:min-w-[calc(33.333%-16px)] h-[250px] lg:h-[350px] rounded-[16px] overflow-hidden shrink-0 snap-center border border-white/20"
                            >
                                {img ? (
                                    <img
                                        src={img}
                                        alt={`Gallery ${idx}`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center text-white/40">
                                        Image {idx}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots indicator */}
                <div className="flex gap-3 mt-4">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-[#AF7E2D]' : 'bg-white/30'}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
