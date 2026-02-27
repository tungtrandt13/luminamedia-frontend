'use client';

import { TrainingCourseItem } from '@/lib/mock-data/training-mock';
import { Package, Settings, MonitorPlay } from 'lucide-react'; // Fallback icons if needed

interface Props {
    title: string;
    highlightedText: string;
    items: TrainingCourseItem[];
    ctaText: string;
}

export default function TrainingCourses({ title, highlightedText, items, ctaText }: Props) {
    const renderIcon = (iconName: string) => {
        // Here we map the icon strings to icons
        switch (iconName) {
            case 'basic':
                return <Settings className="w-6 h-6 text-white" />;
            case 'advanced':
                return <Package className="w-6 h-6 text-white" />;
            case 'internal':
                return <MonitorPlay className="w-6 h-6 text-white" />;
            default:
                return <Settings className="w-6 h-6 text-white" />;
        }
    };

    return (
        <section className="w-full bg-[#FFF9EF] text-black py-[60px] lg:py-[100px]">
            <div className="mx-auto w-full max-w-[1500px] px-[20px]">
                <div className="flex flex-col gap-[60px] items-center">

                    {/* Header */}
                    <div className="flex flex-col items-center gap-[10px] text-center max-w-[800px]">
                        <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-tight flex flex-col sm:flex-row gap-2 justify-center">
                            <span>{title}</span>
                            <span className="text-[#AF7E2D]">{highlightedText}</span>
                        </h2>
                    </div>

                    {/* Course Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full items-stretch">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="bg-black border border-[#939292] rounded-[16px] p-[24px] flex flex-col gap-[24px]"
                            >
                                <div className="bg-[#AF7E2D] w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0">
                                    {renderIcon(item.icon)}
                                </div>
                                <h3 className="text-white text-[24px] lg:text-[32px] font-semibold leading-[40px]">
                                    {item.title}
                                </h3>
                                <ul className="flex flex-col mt-auto w-full">
                                    {item.list.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="border-t border-[#dbe0ec]/30 py-[16px] text-white text-[16px] lg:text-[20px] font-semibold flex items-center min-h-[80px] lg:min-h-[96px]"
                                        >
                                            <p className="leading-snug w-full">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button className="mt-4 flex items-center justify-center border border-[#AF7E2D] px-[40px] py-[20px] rounded-[8px] text-[#AF7E2D] font-medium text-[16px] hover:bg-[#AF7E2D] hover:text-white transition-colors">
                        {ctaText}
                    </button>

                </div>
            </div>
        </section>
    );
}
