// import { createFileRoute } from "@tanstack/react-router";

// import { About } from "@/components/site/About";
// import { CTA } from "@/components/site/CTA";
// import { ContactSection } from "@/components/site/ContactSection";
// import { Footer } from "@/components/site/Footer";
// import { Hero } from "@/components/site/Hero";
// import { Navbar } from "@/components/site/Navbar";
// import { Process } from "@/components/site/Process";
// import { PropertySolutions } from "@/components/site/PropertySolutions";
// import { Services } from "@/components/site/Services";
// import { TrustSection } from "@/components/site/TrustSection";
// import { WhyChooseUs } from "@/components/site/WhyChooseUs";

// const TITLE =
//   "Heaven Homes & Realty | Real Estate Consultant in Surat";
// const DESCRIPTION =
//   "Heaven Homes & Realty is a trusted real estate consultancy in Surat offering professional guidance for buying, selling, resale and rental of residential and commercial properties.";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: TITLE },
//       { name: "description", content: DESCRIPTION },
//       { property: "og:title", content: TITLE },
//       { property: "og:description", content: DESCRIPTION },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: Index,
// });

// function Index() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Hero />
//         <TrustSection />
//         <Services />
//         <PropertySolutions />
//         <WhyChooseUs />
//         <Process />
//         <About />
//         <CTA />
//         <ContactSection />
//       </main>
//       <Footer />
//     </>
//   );
// }





import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Process } from "@/components/site/Process";
import { PropertySolutions } from "@/components/site/PropertySolutions";
import { Services } from "@/components/site/Services";
import { TrustSection } from "@/components/site/TrustSection";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";

const SITE_URL = "https://www.heavenhomess.in";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// Title: 55 characters (Google shows up to ~60)
const TITLE = "Real Estate Consultant in Surat | Heaven Homes & Realty";

// Description: ~150 characters (Google shows up to ~155–160)
const DESCRIPTION =
  "Trusted real estate agent in Surat. Buy, sell, rent or lease flats, shops, offices, open plots & land in Adajan, Pal, Palanpur & Jahangirabad. Call now.";

const KEYWORDS = [
  "real estate agent in Surat",
  "real estate consultant in Surat",
  "property consultant in Surat",
  "property dealer in Surat",
  "buy property in Surat",
  "sell property in Surat",
  "flats for sale in Surat",
  "new projects in Surat",
  "resale flats in Surat",
  "flats for rent in Surat",
  "commercial property in Surat",
  "shops for sale in Surat",
  "office space for rent in Surat",
  "open plots in Surat",
  "land for sale in Surat",
  "land for developers in Surat",
  "property for lease in Surat",
  "property dealer in Adajan",
  "property dealer in Pal Surat",
  "property dealer in Palanpur",
  "property dealer in Jahangirabad",
  "property dealer in Jahangirpura",
  "property in Gauravpath Road",
  "property dealer in Vanakala",
  "Heaven Homes & Realty",
].join(", ");

const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "en-IN",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: OG_IMAGE,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
    ],
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "en-IN", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(WEBPAGE_SCHEMA),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <PropertySolutions />
        <WhyChooseUs />
        <Process />
        <About />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}