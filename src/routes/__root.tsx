// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import {
//   Outlet,
//   Link,
//   createRootRouteWithContext,
//   useRouter,
//   HeadContent,
//   Scripts,
// } from "@tanstack/react-router";
// import { useEffect, type ReactNode } from "react";

// import appCss from "../styles.css?url";
// import { FloatingActions } from "../components/site/FloatingActions";
// import { reportLovableError } from "../lib/lovable-error-reporting";

// /* -------------------------------------------------------------------------- */
// /*  SITE-WIDE SEO CONSTANTS                                                   */
// /* -------------------------------------------------------------------------- */

// const SITE_URL = "https://www.heavenhomess.in";
// const SITE_NAME = "Heaven Homes & Realty";
// const LOGO_URL = `${SITE_URL}/logo.png`; // 512x512+ square logo in /public
// const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // 1200x630 image in /public

// const DEFAULT_TITLE = "Real Estate Consultant in Surat | Heaven Homes & Realty";
// const DEFAULT_DESCRIPTION =
//   "Trusted real estate agent in Surat. Buy, sell, rent or lease flats, shops, offices, open plots & land in Adajan, Pal, Palanpur & Jahangirabad. Call now.";

// const KEYWORDS = [
//   "real estate agent in Surat",
//   "real estate consultant in Surat",
//   "property consultant in Surat",
//   "property dealer in Surat",
//   "real estate agency Surat",
//   "property dealer near me",
//   "estate agent near me Surat",
//   "buy property in Surat",
//   "sell property in Surat",
//   "flats for sale in Surat",
//   "new projects in Surat",
//   "new residential projects in Surat",
//   "resale flats in Surat",
//   "flats for rent in Surat",
//   "property for rent in Surat",
//   "commercial property in Surat",
//   "shops for sale in Surat",
//   "office space for rent in Surat",
//   "open plots in Surat",
//   "plots for sale in Surat",
//   "land for sale in Surat",
//   "land for developers in Surat",
//   "property for lease in Surat",
//   "property dealer in Adajan",
//   "real estate agent in Pal Surat",
//   "property dealer in Palanpur Surat",
//   "property dealer in Jahangirabad",
//   "property dealer in Jahangirpura",
//   "property in Gauravpath Road Surat",
//   "property dealer in Vanakala",
//   "Heaven Homes & Realty",
//   "Heaven Homes Surat",
// ].join(", ");

// const BUSINESS_ID = `${SITE_URL}/#business`;
// const WEBSITE_ID = `${SITE_URL}/#website`;

// const AREAS_SERVED = [
//   "Surat",
//   "Adajan",
//   "Pal",
//   "Palanpur",
//   "Gauravpath Road",
//   "Jahangirabad",
//   "Jahangirpura",
//   "Vanakala",
// ].map((name) => ({
//   "@type": "Place",
//   name: `${name}, Surat, Gujarat`,
// }));

// const SERVICES = [
//   "New Property Developments",
//   "Residential Property Buying and Selling",
//   "Commercial Property Buying and Selling",
//   "Open Plots and Land",
//   "Residential Rental and Leasing",
//   "Commercial Rental and Leasing",
//   "Developer Land Acquisition",
//   "Property Consultancy",
// ];

// const STRUCTURED_DATA = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": ["RealEstateAgent", "LocalBusiness"],
//       "@id": BUSINESS_ID,
//       name: SITE_NAME,
//       alternateName: ["Heaven Homes", "Heaven Homes Surat"],
//       description:
//         "Heaven Homes & Realty is a real estate agency and property consultancy in Surat, Gujarat, helping clients buy, sell, rent and lease residential and commercial properties, open plots and land.",
//       slogan: "Give your dreams a new address.",
//       url: SITE_URL,
//       logo: {
//         "@type": "ImageObject",
//         url: LOGO_URL,
//       },
//       image: [OG_IMAGE, LOGO_URL],
//       telephone: ["+91-82009-06261", "+91-97271-38080"],
//       email: "heavenhomesandrealty@gmail.com",
//       priceRange: "₹₹",
//       address: {
//         "@type": "PostalAddress",
//         streetAddress:
//           "207, Blue Eminence, Opp. Sangini Gardenia, Jahangirabad",
//         addressLocality: "Surat",
//         addressRegion: "Gujarat",
//         postalCode: "395009",
//         addressCountry: "IN",
//       },
//       areaServed: AREAS_SERVED,
//       knowsLanguage: ["en", "gu"],
//       contactPoint: [
//         {
//           "@type": "ContactPoint",
//           telephone: "+91-82009-06261",
//           contactType: "customer service",
//           areaServed: "IN",
//           availableLanguage: ["English", "Gujarati"],
//         },
//         {
//           "@type": "ContactPoint",
//           telephone: "+91-97271-38080",
//           contactType: "sales",
//           areaServed: "IN",
//           availableLanguage: ["English", "Gujarati"],
//         },
//         {
//           "@type": "ContactPoint",
//           telephone: "+91-95108-33599",
//           contactType: "customer support",
//           areaServed: "IN",
//           availableLanguage: ["English", "Gujarati"],
//           url: "https://wa.me/919510833599",
//         },
//       ],
//       hasOfferCatalog: {
//         "@type": "OfferCatalog",
//         name: "Real Estate Services in Surat",
//         itemListElement: SERVICES.map((service) => ({
//           "@type": "Offer",
//           itemOffered: { "@type": "Service", name: service },
//         })),
//       },
//       sameAs: [
//         "https://www.instagram.com/heavenhomesandrealty/",
//         "https://www.facebook.com/p/HeavenHomes-Realty-61583649045116/",
//         "https://share.google/0ZUCxGf3GV3w7bG7F",
//       ],
//     },
//     {
//       "@type": "WebSite",
//       "@id": WEBSITE_ID,
//       url: SITE_URL,
//       name: SITE_NAME,
//       inLanguage: "en-IN",
//       publisher: { "@id": BUSINESS_ID },
//     },
//   ],
// };

// /* -------------------------------------------------------------------------- */
// /*  ERROR / 404 COMPONENTS                                                    */
// /* -------------------------------------------------------------------------- */

// function NotFoundComponent() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background px-4">
//       <div className="max-w-md text-center">
//         <h1 className="text-7xl font-bold text-foreground">404</h1>
//         <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
//         <p className="mt-2 text-sm text-muted-foreground">
//           The page you're looking for doesn't exist or has been moved.
//         </p>
//         <div className="mt-6">
//           <Link
//             to="/"
//             className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
//           >
//             Go home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
//   console.error(error);
//   const router = useRouter();
//   useEffect(() => {
//     reportLovableError(error, { boundary: "tanstack_root_error_component" });
//   }, [error]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background px-4">
//       <div className="max-w-md text-center">
//         <h1 className="text-xl font-semibold tracking-tight text-foreground">
//           This page didn't load
//         </h1>
//         <p className="mt-2 text-sm text-muted-foreground">
//           Something went wrong on our end. You can try refreshing or head back home.
//         </p>
//         <div className="mt-6 flex flex-wrap justify-center gap-2">
//           <button
//             onClick={() => {
//               router.invalidate();
//               reset();
//             }}
//             className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
//           >
//             Try again
//           </button>
//           <a
//             href="/"
//             className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
//           >
//             Go home
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  ROOT ROUTE                                                                */
// /* -------------------------------------------------------------------------- */

// export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
//   head: () => ({
//     meta: [
//       { charSet: "utf-8" },
//       { name: "viewport", content: "width=device-width, initial-scale=1" },

//       // Core SEO
//       { title: DEFAULT_TITLE },
//       { name: "description", content: DEFAULT_DESCRIPTION },
//       { name: "keywords", content: KEYWORDS },
//       { name: "author", content: SITE_NAME },
//       { name: "publisher", content: SITE_NAME },
//       { name: "application-name", content: SITE_NAME },
//       {
//         name: "robots",
//         content:
//           "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
//       },
//       { name: "googlebot", content: "index, follow" },
//       { name: "theme-color", content: "#002117" },
//       { name: "format-detection", content: "telephone=yes" },

//       // Local SEO signals
//       { name: "geo.region", content: "IN-GJ" },
//       { name: "geo.placename", content: "Surat" },
//       { name: "language", content: "en-IN" },
//       { name: "rating", content: "general" },

//       // Open Graph
//       { property: "og:site_name", content: SITE_NAME },
//       { property: "og:title", content: DEFAULT_TITLE },
//       { property: "og:description", content: DEFAULT_DESCRIPTION },
//       { property: "og:type", content: "website" },
//       { property: "og:url", content: SITE_URL },
//       { property: "og:locale", content: "en_IN" },
//       { property: "og:locale:alternate", content: "gu_IN" },
//       { property: "og:image", content: OG_IMAGE },
//       { property: "og:image:width", content: "1200" },
//       { property: "og:image:height", content: "630" },
//       {
//         property: "og:image:alt",
//         content:
//           "Heaven Homes & Realty – Real Estate Agency and Property Consultant in Surat",
//       },

//       // Twitter / X
//       { name: "twitter:card", content: "summary_large_image" },
//       { name: "twitter:title", content: DEFAULT_TITLE },
//       { name: "twitter:description", content: DEFAULT_DESCRIPTION },
//       { name: "twitter:image", content: OG_IMAGE },
//     ],
//     links: [
//       {
//         rel: "stylesheet",
//         href: appCss,
//       },
//       { rel: "icon", type: "image/png", href: "/favicon.png" },
//       { rel: "apple-touch-icon", href: "/favicon.png" },
//       { rel: "preconnect", href: "https://fonts.googleapis.com" },
//       {
//         rel: "preconnect",
//         href: "https://fonts.gstatic.com",
//         crossOrigin: "anonymous",
//       },
//       {
//         rel: "stylesheet",
//         href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap",
//       },
//     ],
//     scripts: [
//       {
//         type: "application/ld+json",
//         children: JSON.stringify(STRUCTURED_DATA),
//       },
//     ],
//   }),
//   shellComponent: RootShell,
//   component: RootComponent,
//   notFoundComponent: NotFoundComponent,
//   errorComponent: ErrorComponent,
// });

// function RootShell({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en-IN">
//       <head>
//         <HeadContent />
//       </head>
//       <body>
//         {children}
//         <Scripts />
//       </body>
//     </html>
//   );
// }

// function RootComponent() {
//   const { queryClient } = Route.useRouteContext();

//   return (
//     <QueryClientProvider client={queryClient}>
//       {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
//       <Outlet />
//       <FloatingActions />
//     </QueryClientProvider>
//   );
// }




import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { FloatingActions } from "../components/site/FloatingActions";
import { reportLovableError } from "../lib/lovable-error-reporting";

/* -------------------------------------------------------------------------- */
/*  TRACKING IDS                                                              */
/* -------------------------------------------------------------------------- */

const GTM_ID = "GTM-NN66QJ38";
const GA_ID = "G-ZYPB50S5HN";
const META_PIXEL_ID = "1113184408191658";
// Paste ONLY the content value from Search Console's HTML tag method.
// Leave empty if you verify via GTM / Analytics / DNS instead.
const GSC_VERIFICATION = "";

/* -------------------------------------------------------------------------- */
/*  TRACKING SCRIPTS                                                          */
/* -------------------------------------------------------------------------- */

// Google Tag Manager (standard snippet)
const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;

const GTM_NOSCRIPT = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

// Google Analytics 4 (direct gtag). REMOVE this + the gtag.js loader below
// if your GA4 tag is already configured inside GTM, to avoid double counting.
const GA_SCRIPT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`;

// Meta Pixel
const META_PIXEL_SCRIPT = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`;

const META_PIXEL_NOSCRIPT = `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />`;

/* -------------------------------------------------------------------------- */
/*  SITE-WIDE SEO CONSTANTS                                                   */
/* -------------------------------------------------------------------------- */

const SITE_URL = "https://www.heavenhomess.in";
const SITE_NAME = "Heaven Homes & Realty";
const LOGO_URL = `${SITE_URL}/logo.png`; // 512x512+ square logo in /public
const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // 1200x630 image in /public

const DEFAULT_TITLE = "Real Estate Consultant in Surat | Heaven Homes & Realty";
const DEFAULT_DESCRIPTION =
  "Trusted real estate agent in Surat. Buy, sell, rent or lease flats, shops, offices, open plots & land in Adajan, Pal, Palanpur & Jahangirabad. Call now.";

const KEYWORDS = [
  "real estate agent in Surat",
  "real estate consultant in Surat",
  "property consultant in Surat",
  "property dealer in Surat",
  "real estate agency Surat",
  "property dealer near me",
  "estate agent near me Surat",
  "buy property in Surat",
  "sell property in Surat",
  "flats for sale in Surat",
  "new projects in Surat",
  "new residential projects in Surat",
  "resale flats in Surat",
  "flats for rent in Surat",
  "property for rent in Surat",
  "commercial property in Surat",
  "shops for sale in Surat",
  "office space for rent in Surat",
  "open plots in Surat",
  "plots for sale in Surat",
  "land for sale in Surat",
  "land for developers in Surat",
  "property for lease in Surat",
  "property dealer in Adajan",
  "real estate agent in Pal Surat",
  "property dealer in Palanpur Surat",
  "property dealer in Jahangirabad",
  "property dealer in Jahangirpura",
  "property in Gauravpath Road Surat",
  "property dealer in Vanakala",
  "Heaven Homes & Realty",
  "Heaven Homes Surat",
].join(", ");

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const AREAS_SERVED = [
  "Surat",
  "Adajan",
  "Pal",
  "Palanpur",
  "Gauravpath Road",
  "Jahangirabad",
  "Jahangirpura",
  "Vanakala",
].map((name) => ({
  "@type": "Place",
  name: `${name}, Surat, Gujarat`,
}));

const SERVICES = [
  "New Property Developments",
  "Residential Property Buying and Selling",
  "Commercial Property Buying and Selling",
  "Open Plots and Land",
  "Residential Rental and Leasing",
  "Commercial Rental and Leasing",
  "Developer Land Acquisition",
  "Property Consultancy",
];

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["RealEstateAgent", "LocalBusiness"],
      "@id": BUSINESS_ID,
      name: SITE_NAME,
      alternateName: ["Heaven Homes", "Heaven Homes Surat"],
      description:
        "Heaven Homes & Realty is a real estate agency and property consultancy in Surat, Gujarat, helping clients buy, sell, rent and lease residential and commercial properties, open plots and land.",
      slogan: "Give your dreams a new address.",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
      image: [OG_IMAGE, LOGO_URL],
      telephone: ["+91-82009-06261", "+91-97271-38080"],
      email: "heavenhomesandrealty@gmail.com",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "207, Blue Eminence, Opp. Sangini Gardenia, Jahangirabad",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        postalCode: "395009",
        addressCountry: "IN",
      },
      areaServed: AREAS_SERVED,
      knowsLanguage: ["en", "gu"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-82009-06261",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Gujarati"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-97271-38080",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Gujarati"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-95108-33599",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English", "Gujarati"],
          url: "https://wa.me/919510833599",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Real Estate Services in Surat",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service },
        })),
      },
      sameAs: [
        "https://www.instagram.com/heavenhomesandrealty/",
        "https://www.facebook.com/p/HeavenHomes-Realty-61583649045116/",
        "https://share.google/0ZUCxGf3GV3w7bG7F",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-IN",
      publisher: { "@id": BUSINESS_ID },
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  ERROR / 404 COMPONENTS                                                    */
/* -------------------------------------------------------------------------- */

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  ROOT ROUTE                                                                */
/* -------------------------------------------------------------------------- */

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // Core SEO
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "author", content: SITE_NAME },
      { name: "publisher", content: SITE_NAME },
      { name: "application-name", content: SITE_NAME },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#002117" },
      { name: "format-detection", content: "telephone=yes" },

      // Google Search Console verification (only rendered if you set a value)
      ...(GSC_VERIFICATION
        ? [{ name: "google-site-verification", content: GSC_VERIFICATION }]
        : []),

      // Local SEO signals
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Surat" },
      { name: "language", content: "en-IN" },
      { name: "rating", content: "general" },

      // Open Graph
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "en_IN" },
      { property: "og:locale:alternate", content: "gu_IN" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Heaven Homes & Realty – Real Estate Agency and Property Consultant in Surat",
      },

      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      // 1. Google Tag Manager
      { children: GTM_SCRIPT },

      // 2. Google Analytics 4 (remove both entries if GA4 lives inside GTM)
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
        async: true,
      },
      { children: GA_SCRIPT },

      // 3. Meta Pixel
      { children: META_PIXEL_SCRIPT },

      // 4. Structured data
      {
        type: "application/ld+json",
        children: JSON.stringify(STRUCTURED_DATA),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: GTM_NOSCRIPT }} />
        {/* Meta Pixel (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: META_PIXEL_NOSCRIPT }} />

        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <FloatingActions />
    </QueryClientProvider>
  );
}