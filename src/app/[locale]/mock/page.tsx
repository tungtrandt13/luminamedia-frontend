import HPContact from "@/components/home/HPContact";
import HPFeaturedProjects from "@/components/home/HPFeaturedProjects";
import HPHero from "@/components/home/HPHero";
import HPJourney from "@/components/home/HPJourney";
import HPPartners from "@/components/home/HPPartners";
import HPServices from "@/components/home/HPServices";
import HPWhyUs from "@/components/home/HPWhyUs";
import { homepageMockData } from "@/lib/mock-data/homepage-mock";
import type { HomepageData } from "@/lib/strapi";

interface Props {
  params: { locale: string };
}

export default async function MockHomePage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = (locale as "vi" | "en") || "vi";
  const data = (homepageMockData[currentLocale] || homepageMockData["vi"]) as HomepageData;

  return (
    <div className="flex flex-col w-full overflow-hidden bg-black text-white">
      <HPHero
        headline={data.hp_hero?.headline || ""}
        ctaText={data.hp_hero?.cta_text || ""}
        ctaUrl={data.hp_hero?.cta_url || ""}
        background={data.hp_hero?.background}
      />

      <HPJourney
        title={data.hp_journey?.title}
        subtitle={data.hp_journey?.subtitle}
        quote={data.hp_journey?.quote}
        body={data.hp_journey?.body}
        ctaText={data.hp_journey?.cta_text}
        ctaUrl={data.hp_journey?.cta_url}
      />

      <HPPartners title={data.hp_partners?.title} logos={data.hp_partners?.logos} />

      <HPFeaturedProjects
        title={data.hp_featured_projects?.title || ""}
        description={data.hp_featured_projects?.description || ""}
        projects={data.hp_featured_projects?.projects || []}
        ctaText={data.hp_featured_projects?.cta_text || ""}
        ctaUrl={data.hp_featured_projects?.cta_url || ""}
      />

      <HPServices
        title={data.hp_services?.title || ""}
        description={data.hp_services?.description || ""}
        services={data.hp_services?.services || []}
        ctaText={data.hp_services?.cta_text || ""}
        ctaUrl={data.hp_services?.cta_url || ""}
      />

      <HPWhyUs
        title={data.hp_why_us?.title}
        description={data.hp_why_us?.description}
        primaryCtaText={data.hp_why_us?.primary_cta_text}
        primaryCtaUrl={data.hp_why_us?.primary_cta_url}
        secondaryCtaText={data.hp_why_us?.secondary_cta_text}
        secondaryCtaUrl={data.hp_why_us?.secondary_cta_url}
        stats={data.hp_why_us?.stats}
        image={data.hp_why_us?.image}
      />

      <HPContact
        title={data.hp_contact?.title || ""}
        description={data.hp_contact?.description || ""}
        ctaText={data.hp_contact?.cta_text || ""}
      />
    </div>
  );
}
