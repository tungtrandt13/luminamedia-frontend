import Image from "next/image";

interface Props {
  title: string;
  description: string;
  ctaText: string;
  image: string;
}

export default function CareersHero({ title, description, ctaText, image }: Props) {
  const highlight = "VISS International";
  const parts = title.split(highlight);

  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-[60px] md:py-[100px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[40px] lg:gap-[80px]">
          <div className="w-full lg:max-w-[596px] flex flex-col gap-[40px]">
            <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] font-semibold leading-[1.15] whitespace-pre-wrap">
              {parts.length === 1 ? (
                title
              ) : (
                <>
                  {parts[0]}
                  <span className="text-[#AF7E2D]">{highlight}</span>
                  {parts.slice(1).join(highlight)}
                </>
              )}
            </h1>
            <p className="text-[16px] md:text-[20px] font-light leading-[1.5] text-white/90">
              {description}
            </p>
            <button
              type="button"
              className="self-start border border-white px-[40px] py-[20px] rounded-[8px] text-white font-medium text-[16px] hover:bg-white hover:text-black transition-colors"
            >
              {ctaText}
            </button>
          </div>

          <div className="relative w-full lg:w-[610px] h-[320px] sm:h-[420px] lg:h-[553px] rounded-[16px] overflow-hidden">
            <Image
              src={image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 610px"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

