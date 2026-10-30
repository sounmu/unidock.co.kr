import { Hero } from "@/components/hero";
import { Faq, FeatureRows, FinalCta, Pillars, Roadmap, SiteFooter, Trust } from "@/components/sections";
import { SiteNav } from "@/components/site-nav";
import { installHref, site, universities } from "@/lib/site";

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  description: site.description,
  url: site.url,
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  softwareVersion: site.version,
  installUrl: installHref,
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  inLanguage: "ko",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: universities.map((u) => u.name).join(", "),
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <SiteNav />
      <main>
        <Hero />
        <Pillars />
        <FeatureRows />
        <Trust />
        <Roadmap />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
