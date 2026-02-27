import type { CareersCoreValue } from "@/lib/mock-data/careers-mock";

interface Props {
  title: string;
  values: CareersCoreValue[];
}

export default function CareersCoreValues({ title, values }: Props) {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-[60px] md:py-[100px]">
        <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-semibold leading-[1.1]">
          {title}
        </h2>

        <div className="mt-[40px] md:mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {values.map((v) => (
            <div
              key={v.id}
              className="bg-[#FFF9EF] text-black px-[16px] md:px-[20px] py-[22px] md:py-[28px]"
            >
              <div className="flex flex-col gap-[14px] md:gap-[18px]">
                <div className="text-[18px] md:text-[20px] font-semibold">
                  <span className="mr-2">{v.id}.</span>
                  {v.title}
                </div>
                <p className="text-[14px] md:text-[20px] font-light leading-[1.5] text-black/90">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

