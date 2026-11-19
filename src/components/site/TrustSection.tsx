// import aboutImage from "@/assets/about-interior.jpg";
// import { Reveal } from "@/components/site/Reveal";

// const POINTS = [
//   {
//     title: "Requirement Understanding",
//     body: "We start by understanding what you actually need before anything is recommended.",
//   },
//   {
//     title: "Property Matching",
//     body: "Options are shortlisted around your location, property type, budget and purpose.",
//   },
//   {
//     title: "Market Guidance",
//     body: "Clear, grounded guidance on the Surat market so decisions are made with context.",
//   },
//   {
//     title: "Transaction Assistance",
//     body: "Coordination and support through the steps of the property transaction.",
//   },
//   {
//     title: "Professional Consultation",
//     body: "Structured consultation for both residential and commercial requirements.",
//   },
// ];

// export function TrustSection() {
//   return (
//     <section className="section-y bg-background">
//       <div className="container-page grid items-center gap-14 text-center lg:grid-cols-2 lg:gap-20 lg:text-left">
//         <Reveal>
//           <span className="eyebrow-dark">Your Property Journey</span>
//           <h2 className="mt-5 text-[1.85rem] leading-tight text-foreground sm:text-4xl">
//             Your Property Journey,
//             <span className="block">Handled With Confidence.</span>
//           </h2>
//           <span className="gold-rule mx-auto mt-6 lg:mx-0" />
//           <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
//             Heaven Homes &amp; Realty helps clients navigate real estate decisions with
//             professional assistance, requirement-based property guidance and end-to-end
//             support — from the first conversation to the final coordination.
//           </p>

//           <ul className="mx-auto mt-9 max-w-xl space-y-5 text-left">
//             {POINTS.map((point) => (
//               <li key={point.title} className="border-l-2 border-gold/70 pl-5">
//                 <h3 className="font-sans text-sm font-semibold tracking-wide text-foreground">
//                   {point.title}
//                 </h3>
//                 <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
//                   {point.body}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </Reveal>

//         <Reveal delay={120} className="relative mx-auto w-full max-w-lg lg:max-w-none">
//           <div className="overflow-hidden rounded-lg shadow-[var(--shadow-lift)]">
//             <img
//               src={aboutImage}
//               alt="Calm, light-filled living space in a modern apartment"
//               loading="lazy"
//               width={1200}
//               height={1408}
//               className="h-full w-full object-cover transition-transform duration-[900ms] hover:scale-[1.03]"
//             />
//           </div>
//           <span
//             aria-hidden
//             className="absolute -bottom-4 -left-4 hidden h-24 w-24 border-b-2 border-l-2 border-gold lg:block"
//           />
//         </Reveal>
//       </div>
//     </section>
//   );
// }



import aboutImage from "@/assets/about-interior.jpg";
import { Reveal } from "@/components/site/Reveal";

const POINTS = [
  {
    title: "Requirement Understanding",
    body: "We start by understanding what you actually need, whether it is a flat, shop, office, open plot or land in Surat, before anything is recommended.",
  },
  {
    title: "Property Matching",
    body: "Options are shortlisted around your location, property type, budget and purpose, across Adajan, Pal, Palanpur, Jahangirabad and other areas of Surat.",
  },
  {
    title: "Surat Market Guidance",
    body: "Clear, grounded guidance on the Surat real estate market so buying, selling and renting decisions are made with context.",
  },
  {
    title: "Transaction Assistance",
    body: "Coordination and support through each step of buying, selling, renting or leasing a property.",
  },
  {
    title: "Professional Property Consultation",
    body: "Structured consultation for both residential and commercial property requirements.",
  },
];

export function TrustSection() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="section-y bg-background"
    >
      <div className="container-page grid items-center gap-14 text-center lg:grid-cols-2 lg:gap-20 lg:text-left">
        <Reveal>
          <span className="eyebrow-dark">Your Property Journey in Surat</span>
          <h2
            id="trust-heading"
            className="mt-5 text-[1.85rem] leading-tight text-foreground sm:text-4xl"
          >
            Your Property Journey in Surat,
            <span className="block">Handled With Confidence.</span>
          </h2>
          <span className="gold-rule mx-auto mt-6 lg:mx-0" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
            Heaven Homes &amp; Realty is a real estate consultant in Surat helping
            clients buy, sell, rent and lease residential and commercial properties,
            open plots and land. We offer professional assistance, requirement-based
            property guidance and end-to-end support, from the first conversation to
            the final coordination.
          </p>

          <ul className="mx-auto mt-9 max-w-xl space-y-5 text-left">
            {POINTS.map((point) => (
              <li key={point.title} className="border-l-2 border-gold/70 pl-5">
                <h3 className="font-sans text-sm font-semibold tracking-wide text-foreground">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {point.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="overflow-hidden rounded-lg shadow-[var(--shadow-lift)]">
            <img
              src={aboutImage}
              alt="Light-filled apartment living room, an example of residential property options from Heaven Homes & Realty in Surat"
              loading="lazy"
              decoding="async"
              width={1200}
              height={1408}
              className="h-full w-full object-cover transition-transform duration-[900ms] hover:scale-[1.03]"
            />
          </div>
          <span
            aria-hidden
            className="absolute -bottom-4 -left-4 hidden h-24 w-24 border-b-2 border-l-2 border-gold lg:block"
          />
        </Reveal>
      </div>
    </section>
  );
}