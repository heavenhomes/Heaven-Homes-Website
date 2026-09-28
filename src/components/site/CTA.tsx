// import { Reveal } from "@/components/site/Reveal";

// export function CTA() {
//   return (
//     <section className="surface-emerald section-y">
//       <Reveal className="container-page text-center">
//         <h2 className="mx-auto max-w-2xl text-[1.85rem] leading-tight text-on-dark sm:text-4xl">
//           Looking for the Right Property?
//         </h2>
//         <span className="gold-rule mx-auto mt-6" />
//         <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-on-dark-muted">
//           Tell us what you're looking for and our team will help you take the next step.
//         </p>
//         <a
//           href="#contact"
//           className="mt-9 inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-gold-bright"
//         >
//           Start Your Property Enquiry
//         </a>
//       </Reveal>
//     </section>
//   );
// }



import { Reveal } from "@/components/site/Reveal";

export function CTA() {
  const whatsappNumber = "919510833599";

  const whatsappMessage = encodeURIComponent(
    "Hi Heaven Homes & Realty, I am interested in a property. I would like to know more about available properties."
  );

  return (
    <section className="surface-emerald section-y">
      <Reveal className="container-page text-center">
        <h2 className="mx-auto max-w-2xl text-[1.85rem] leading-tight text-on-dark sm:text-4xl">
          Looking for the Right Property?
        </h2>

        <span className="gold-rule mx-auto mt-6" />

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-on-dark-muted">
          Tell us what you’re looking for and our team will help you find the
          right property. Get an instant response on WhatsApp.
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-gold-bright"
        >
          Instant Enquiry on WhatsApp
        </a>
      </Reveal>
    </section>
  );
}