'use client';

interface Props {
    title: string;
    description: string;
    ctaText: string;
    image: string;
}

export default function TrainingHero({ title, description, ctaText, image }: Props) {
    return (
        <section className="w-full bg-black text-white px-[20px] py-[60px] lg:py-[100px]">
            <div className="mx-auto w-full max-w-[1500px]">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-[35px] items-center justify-center">

                    {/* Left – Text */}
                    <div className="flex flex-1 flex-col gap-10 lg:gap-[60px] items-center lg:items-start w-full">
                        <div className="flex flex-col gap-6 lg:gap-[36px] items-center lg:items-start w-full leading-normal whitespace-pre-wrap text-center lg:text-left">
                            <h1 className="font-semibold text-[36px] sm:text-[48px] lg:text-[56px] w-full lg:max-w-[523px] shrink-0 text-white">
                                {title}
                            </h1>
                            <p className="font-light text-[16px] lg:text-[20px] min-w-full lg:w-fit shrink-0 text-white leading-snug lg:leading-[1.5]">
                                {description}
                            </p>
                        </div>

                        <button
                            onClick={() => document.getElementById('training-contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border border-white flex items-center justify-center px-[40px] py-[20px] rounded-[8px] font-medium text-[16px] text-white self-center lg:self-start hover:bg-white hover:text-black transition-colors shrink-0"
                        >
                            {ctaText}
                        </button>
                    </div>

                    {/* Right – Image */}
                    <div className="relative shrink-0 w-full lg:w-[589px] h-[300px] lg:h-[486px]">
                        {image ? (
                            <img
                                src={image}
                                alt={title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center border border-white/10">
                                <span className="text-white/40">Hero Image</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
