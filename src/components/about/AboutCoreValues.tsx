'use client';

interface CoreValue {
    id: number;
    title: string;
    description: string;
}

interface Props {
    title?: string;
    values?: CoreValue[];
}

export default function AboutCoreValues({ title, values = [] }: Props) {
    // Mock data fallbacks for design
    const defaultTitle = 'Sứ mệnh giá trị cốt lõi';
    const displayValues = values.length > 0 ? values : [];

    return (
        <section className="w-full bg-white text-[#111111] py-[60px] md:py-[100px]">
            <div className="mx-auto w-full max-w-[1240px] px-5 flex flex-col gap-10 md:gap-[80px]">

                {/* Title */}
                <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold text-left">
                    {title || defaultTitle}
                </h2>

                {/* Core Values Grid: 3 columns layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {displayValues.map((item, idx) => (
                        <div key={item.id || idx} className="bg-[#fff9ef] rounded-[16px] p-6 lg:px-6 lg:py-10 flex flex-col gap-4 lg:gap-5">
                            {/* Title */}
                            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#111111] leading-tight flex items-start">
                                <span>{idx + 1}. {item.title}</span>
                            </h3>

                            {/* Description */}
                            <p className="text-[16px] md:text-[20px] text-[#111111] font-light leading-[1.6]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
