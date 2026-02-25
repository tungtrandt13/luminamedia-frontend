'use client';

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

    return (
        <section className="w-full bg-white text-[#111111] py-[60px] md:py-[100px] overflow-hidden">
            <div className="mx-auto w-full max-w-[1240px] px-5 flex flex-col gap-10 md:gap-[80px]">

                {/* Header */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
                    <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-[1.2] text-[#111111] max-w-[600px]">
                        {title || defaultTitle}
                    </h2>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-4">
                        <button className="w-[48px] h-[48px] rounded-full bg-[#AF7E2D] flex items-center justify-center text-white hover:bg-[#8F6623] transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="w-[48px] h-[48px] rounded-full bg-[#AF7E2D] flex items-center justify-center text-white hover:bg-[#8F6623] transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Team Members Grid - Using custom scroll on mobile, grid on desktop */}
                {/* Team Members Grid - Mobile slider, Desktop Grid */}
                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 scrollbar-hide">
                    {displayMembers.map((member, idx) => (
                        <div key={member.id || idx} className="min-w-[280px] md:min-w-0 snap-start flex flex-col gap-4 group cursor-pointer">
                            {/* Avatar Box */}
                            <div className="w-full bg-[#E5E9F0] rounded-[16px] overflow-hidden relative" style={{ aspectRatio: '290 / 320' }}>
                                {member.avatar && (
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none'; // Ẩn ảnh nếu lỗi để lòi nền xám ra
                                        }}
                                    />
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
                {/* Pagination Dots */}
                <div className="flex justify-center mt-2 md:mt-6 gap-3">
                    {Array.from({ length: 7 }).map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-[14px] h-[14px] rounded-full transition-all duration-300 ${idx === 0 ? 'bg-[#AF7E2D]' : 'bg-[#D9D9D9]'}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
