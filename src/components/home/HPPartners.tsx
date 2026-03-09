import { getStrapiMedia } from "@/lib/strapi";

interface Props {
  title?: string;
  logos?: any;
}

export default function HPPartners({ title, logos }: Props) {
  const logoItems = Array.isArray(logos) ? logos : (logos?.data || []);

  if (logoItems.length === 0) return null;

  return (
    <section className="w-full bg-black text-white border-t border-white/10">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-[124px] py-[100px]">
        <div className="flex flex-col items-center gap-12 md:gap-[80px]">
          {title && (
            <h3 className="text-[24px] md:text-[40px] font-semibold text-center text-white leading-[1.3]">
              {title}
            </h3>
          )}

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-[80px]">
            {logoItems.map((logo: any) => {
              const finalUrl = getStrapiMedia(logo);

              return finalUrl ? (
                <img
                  key={logo.id}
                  src={finalUrl}
                  alt={logo.name || logo.attributes?.name || 'Partner Logo'}
                  className="max-h-[50px] md:max-h-[70px] max-w-[200px] md:max-w-[287px] w-auto h-auto object-contain"
                />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
