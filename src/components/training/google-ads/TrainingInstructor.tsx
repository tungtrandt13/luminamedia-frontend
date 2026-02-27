'use client';

interface Props {
    title: string;
    name: string;
    role: string;
    details: string[];
    quote: string;
    image: string;
}

export default function TrainingInstructor({ title, name, role, details, quote, image }: Props) {
    return (
        <section className="w-full bg-black text-white py-[60px] lg:py-[100px]">
            <div className="mx-auto w-full max-w-[1500px] px-[20px] flex flex-col gap-[60px] lg:gap-[80px]">

                {/* Header */}
                <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-tight">
                    {title}
                </h2>

                {/* Content block */}
                <div className="w-full flex flex-col lg:flex-row bg-[#FFF8ED] rounded-[16px] overflow-hidden text-black items-stretch">

                    {/* Image side */}
                    <div className="w-full lg:w-[45%] lg:max-w-[500px] h-[350px] lg:h-auto shrink-0 relative">
                        {image ? (
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#E5E5E5] flex items-center justify-center text-black/40">
                                <span className="text-[60px]">👨‍🏫</span>
                            </div>
                        )}
                    </div>

                    {/* Details side */}
                    <div className="flex flex-col gap-[32px] lg:gap-[40px] p-[24px] lg:p-[40px] lg:pr-[80px] justify-center w-full">

                        {/* Title & Stats */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#AF7E2D] text-[36px] sm:text-[48px] lg:text-[56px] font-semibold leading-tight">
                                {name}
                            </h3>
                            <ul className="list-disc pl-5 flex flex-col gap-2">
                                <li className="text-[16px] lg:text-[20px] font-medium">
                                    {role}
                                </li>
                                {details.map((detail, idx) => (
                                    <li key={idx} className="text-[16px] lg:text-[20px] font-light leading-snug">
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quote Box */}
                        <div className="border-t border-[#939292]/30 pt-8 mt-4 relative">
                            <p className="text-[#939292] text-[16px] lg:text-[20px] font-semibold italic pr-12 relative z-10 leading-snug">
                                {quote}
                            </p>
                            <div className="absolute right-0 bottom-0 text-[#E3DC73]/30 text-[80px] lg:text-[120px] leading-none font-serif select-none pointer-events-none -mt-10">
                                ”
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
