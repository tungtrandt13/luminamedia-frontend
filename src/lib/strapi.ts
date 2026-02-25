import qs from 'qs';

// Prefer explicit STRAPI_API_URL (server-side), then NEXT_PUBLIC_STRAPI_API_URL (client-side),
// and fall back to the default Strapi dev port 1337.
const STRAPI_API_URL =
  process.env.STRAPI_API_URL ||
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  'http://localhost:1337';

const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export type FetchOptions = {
  path: string;
  query?: any;
  locale?: string;
  next?: RequestInit['next'];
};

export async function strapiFetch<T = unknown>({
  path,
  query,
  locale,
  next
}: FetchOptions): Promise<T> {
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  // In Strapi v5, locale filtering doesn't work as expected via query params
  // We'll get all and filter by locale on the frontend if needed
  const mergedQuery = { ...query };

  const queryString = qs.stringify(mergedQuery, {
    encodeValuesOnly: true
  });

  const url = `${STRAPI_API_URL}${path}${queryString ? `?${queryString}` : ''}`;

  try {
    const res = await fetch(url, {
      headers,
      next: next ?? { revalidate: 60 },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error('Strapi Request URL:', url);
      console.error('Strapi error details:', JSON.stringify(errorData, null, 2));
      throw new Error(`Strapi request failed: ${res.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
}

/**
 * Media helper to resolve Strapi relative URLs
 */
export function getStrapiMedia(input: any) {
  if (!input) return null;

  // Handle Strapi v5 structure which might be direct or nested in data.attributes
  // Also handle if input is just a string (url)
  const url = typeof input === 'string' ? input : (input.url || input.data?.attributes?.url || input.data?.url);

  if (!url) return null;
  if (url.startsWith('http') || url.startsWith('//')) return url;

  // Do not prefix local mock images
  if (url.startsWith('/images/')) return url;

  return `${STRAPI_API_URL}${url}`;
}

// --- Types ---

export interface StrapiImage {
  url: string;
  alternativeText?: string;
  name?: string;
  formats?: any;
}

export type StrapiMedia = StrapiImage;

export interface HPProjectMetric {
  id: number;
  value: string;
  label: string;
}

export interface HPProjectCard {
  id: number;
  market_tag?: string;
  category?: string;
  title: string;
  description: string;
  image?: any;
  metrics: HPProjectMetric[];
  url?: string;
}

export interface HPServiceFeature {
  id: number;
  text: string;
}

export interface HPServiceCard {
  id: number;
  title: string;
  description: string;
  icon?: any;
  features: HPServiceFeature[];
  url?: string;
}

export interface HPStatCard {
  id: number;
  value: string;
  label: string;
}

export interface HomepageData {
  hp_hero?: {
    headline: string;
    cta_text?: string;
    cta_url?: string;
    background?: any;
  };
  hp_journey?: {
    title: string;
    subtitle?: string;
    quote?: string;
    body: Array<{ id: number; text: string }>;
    cta_text?: string;
    cta_url?: string;
    hero_quote?: string;
    hero_background?: StrapiMedia;
    hero_cta_text?: string;
    hero_cta_url?: string;
    image?: StrapiMedia;
  };
  hp_partners?: {
    title: string;
    logos?: { data: any[] };
  };
  hp_featured_projects?: {
    title: string;
    description?: string;
    projects: HPProjectCard[];
    cta_text?: string;
    cta_url?: string;
  };
  hp_services?: {
    title: string;
    description?: string;
    services: HPServiceCard[];
    cta_text?: string;
    cta_url?: string;
  };
  hp_why_us?: {
    title: string;
    description?: string;
    primary_cta_text?: string;
    primary_cta_url?: string;
    secondary_cta_text?: string;
    secondary_cta_url?: string;
    stats: HPStatCard[];
    image?: any;
  };
  hp_contact?: {
    title: string;
    description?: string;
    cta_text?: string;
    cta_url?: string;
  };
}

export interface AboutHero {
  title: string;
  headline: string;
  bg_image: string; // url
}

export interface AboutStory {
  subtitle: string;
  title: string;
  description: string;
  commitments: string[];
}

export interface AboutPhilosophy {
  title: string;
  principles: { label: string; value: string }[];
  images: string[];
}

export interface AboutCoreValue {
  id: number;
  title: string;
  description: string;
}

export interface AboutTeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string; // url
}

export interface AboutTestimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string; // url
}

export interface AboutContact {
  title: string;
  description: string;
  cta_text: string;
}

export interface AboutPageData {
  about_hero: AboutHero;
  about_story: AboutStory;
  about_philosophy: AboutPhilosophy;
  about_core_values: {
    title: string;
    values: AboutCoreValue[];
  };
  about_team: {
    title: string;
    members: AboutTeamMember[];
  };
  about_testimonials: {
    title: string;
    reviews: AboutTestimonial[];
  };
  about_contact: AboutContact;
}

export interface StrapiResponse<T> {
  data: T;
  meta: any;
}

export interface Service {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  short_description?: string;
  locale: string;
  icon?: any;
  full_content?: string;
}

export interface MenuItem {
  id: number;
  label: string;
  url: string;
  order: number;
  isExternal: boolean;
}

export interface GlobalSettings {
  logo?: any;
  menu_items?: MenuItem[];
}

// --- API Functions ---

export async function getServices(locale: string): Promise<Service[]> {
  try {
    const res = await strapiFetch<StrapiResponse<Service[]>>({
      path: '/api/services',
      query: {
        fields: ['name', 'slug', 'short_description'],
        populate: {
          icon: {
            fields: ['url', 'alternativeText', 'formats', 'name']
          }
        }
      }
    });
    // Filter by locale on frontend
    const data = Array.isArray(res.data)
      ? res.data.filter((item: any) => item.locale === locale)
      : [];
    return data;
  } catch (error) {
    // Return empty array if services endpoint doesn't exist
    console.log('Returning empty services array due to error');
    return [];
  }
}

export async function getHomepage(locale: string): Promise<HomepageData | null> {
  try {
    const populateQuery = {
      locale: locale,
      populate: {
        hp_hero: {
          populate: {
            background: {
              fields: ['url', 'alternativeText', 'formats', 'name']
            }
          }
        },
        hp_journey: {
          populate: '*'
        },
        hp_partners: {
          populate: {
            logos: {
              fields: ['url', 'alternativeText', 'formats', 'name']
            }
          }
        },
        hp_featured_projects: {
          populate: {
            projects: {
              populate: {
                image: {
                  fields: ['url', 'alternativeText', 'formats', 'name']
                },
                metrics: { populate: '*' }
              }
            }
          }
        },
        hp_services: {
          populate: {
            services: {
              populate: {
                icon: {
                  fields: ['url', 'alternativeText', 'formats', 'name']
                },
                features: { populate: '*' }
              }
            }
          }
        },
        hp_why_us: {
          populate: {
            image: {
              fields: ['url', 'alternativeText', 'formats', 'name']
            },
            stats: { populate: '*' }
          }
        },
        hp_contact: { populate: '*' },
      }
    };

    // Fetch all homepage records and filter by locale on frontend
    const res = await strapiFetch<StrapiResponse<HomepageData[]>>({
      path: '/api/homepage',
      query: populateQuery
    });

    // Find the record matching the requested locale
    const data = Array.isArray(res.data)
      ? res.data.find((item: any) => item.locale === locale)
      : res.data;

    return data || null;
  } catch (error) {
    console.error('Error fetching Homepage:', error);
    return null;
  }
}

export async function getServiceBySlug(slug: string, locale: string): Promise<Service | null> {
  try {
    const res = await strapiFetch<StrapiResponse<Service[]>>({
      path: '/api/services',
      query: {
        filters: { slug: { $eq: slug } },
        populate: {
          icon: {
            fields: ['url', 'alternativeText', 'formats', 'name']
          }
        }
      }
    });
    // Filter by locale on frontend
    const data = Array.isArray(res.data)
      ? res.data.find((item: any) => item.locale === locale)
      : null;
    return data || null;
  } catch (error) {
    // Return null if services endpoint doesn't exist
    return null;
  }
}

export async function getGlobalSettings(locale: string): Promise<GlobalSettings | null> {
  try {
    const res = await strapiFetch<StrapiResponse<GlobalSettings[]>>({
      path: '/api/global-setting',
      query: {
        populate: {
          logo: {
            fields: ['url', 'alternativeText', 'formats', 'name']
          }
        }
      },
      next: { revalidate: 3600 }
    });

    // Find the record matching the requested locale
    const data = Array.isArray(res.data)
      ? res.data.find((item: any) => item.locale === locale)
      : res.data;

    return data || null;
  } catch (error) {
    console.error('Error fetching Global Settings:', error);
    return null;
  }
}

/**
 * Fetch About Us page data from Strapi and transform to AboutPageData format.
 * Falls back to null if API is unavailable.
 */
export async function getAboutPage(locale: string): Promise<AboutPageData | null> {
  try {
    const populateQuery = {
      locale: locale,
      populate: {
        hero: {
          populate: {
            bg_image: { fields: ['url', 'alternativeText', 'formats', 'name'] }
          }
        },
        story: {
          populate: {
            commitments: { populate: '*' }
          }
        },
        philosophy: {
          populate: {
            principles: { populate: '*' },
            images: { fields: ['url', 'alternativeText', 'formats', 'name'] }
          }
        },
        core_values: {
          populate: {
            values: { populate: '*' }
          }
        },
        team: {
          populate: {
            members: {
              populate: {
                avatar: { fields: ['url', 'alternativeText', 'formats', 'name'] }
              }
            }
          }
        },
        testimonials: {
          populate: {
            reviews: {
              populate: {
                avatar: { fields: ['url', 'alternativeText', 'formats', 'name'] }
              }
            }
          }
        },
        contact: { populate: '*' }
      }
    };

    const res = await strapiFetch<StrapiResponse<any[]>>({
      path: '/api/about',
      query: populateQuery
    });

    // Handle both single object and array responses
    const raw = Array.isArray(res.data)
      ? res.data.find((item: any) => item.locale === locale)
      : res.data;

    if (!raw) return null;

    // Transform Strapi response to AboutPageData
    const transformed: AboutPageData = {
      about_hero: {
        title: raw.hero?.title || '',
        headline: raw.hero?.headline || '',
        bg_image: getStrapiMedia(raw.hero?.bg_image) || ''
      },
      about_story: {
        subtitle: raw.story?.subtitle || '',
        title: raw.story?.title || '',
        description: raw.story?.description || '',
        // Strapi commitments are {id, text} objects, mock data uses string[]
        commitments: (raw.story?.commitments || []).map((c: any) =>
          typeof c === 'string' ? c : c.text || ''
        )
      },
      about_philosophy: {
        title: raw.philosophy?.title || '',
        principles: (raw.philosophy?.principles || []).map((p: any) => ({
          label: p.label || '',
          value: p.value || ''
        })),
        images: (raw.philosophy?.images || []).map((img: any) =>
          getStrapiMedia(img) || ''
        )
      },
      about_core_values: {
        title: raw.core_values?.title || '',
        values: (raw.core_values?.values || []).map((v: any) => ({
          id: v.id,
          title: v.title || '',
          description: v.description || ''
        }))
      },
      about_team: {
        title: raw.team?.title || '',
        members: (raw.team?.members || []).map((m: any) => ({
          id: m.id,
          name: m.name || '',
          role: m.role || '',
          avatar: getStrapiMedia(m.avatar) || ''
        }))
      },
      about_testimonials: {
        title: raw.testimonials?.title || '',
        reviews: (raw.testimonials?.reviews || []).map((r: any) => ({
          id: r.id,
          quote: r.quote || '',
          author: r.author || '',
          role: r.role || '',
          avatar: getStrapiMedia(r.avatar) || ''
        }))
      },
      about_contact: {
        title: raw.contact?.title || '',
        description: raw.contact?.description || '',
        cta_text: raw.contact?.cta_text || ''
      }
    };

    return transformed;
  } catch (error) {
    console.error('Error fetching About page:', error);
    return null;
  }
}
