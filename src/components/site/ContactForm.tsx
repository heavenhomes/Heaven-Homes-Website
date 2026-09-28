import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

/* =========================================================
   EMAILJS CONFIGURATION
   ========================================================= */

const EMAILJS_SERVICE_ID = "service_5t1vlx1";
const EMAILJS_TEMPLATE_ID = "template_q4ab9g5";
const EMAILJS_PUBLIC_KEY = "j5Gnm4gPKjT6BtU6U";

/* =========================================================
   FORM OPTIONS
   ========================================================= */

const PROPERTY_TYPES = [
  "Residential",
  "Commercial",
  "Land / Plot",
  "Other",
];

const REQUIREMENT_TYPES = [
  "Buy",
  "Sell",
  "Resale",
  "Rent",
  "Other",
];

const BUDGETS = [
  "Under ₹25 Lakhs",
  "₹25 Lakhs – ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹2 Crore",
  "₹2 Crore+",
  "Prefer to Discuss",
];

const PURPOSES = [
  "Personal Use",
  "Investment",
  "Business",
  "Rental",
  "Other",
];

/* =========================================================
   STYLING
   ========================================================= */

const fieldClass =
  "w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground shadow-[var(--shadow-soft)] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

const labelClass =
  "block text-left text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground";

/* =========================================================
   SELECT COMPONENT
   ========================================================= */

function Select({
  id,
  label,
  placeholder,
  options,
  required = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
        {required && " *"}
      </label>

      <select
        id={id}
        name={id}
        required={required}
        defaultValue=""
        className={`${fieldClass} mt-2`}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* =========================================================
   CONTACT FORM
   ========================================================= */

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus("sending");
    setErrorMessage("");

    try {
      console.log("Sending enquiry through EmailJS...");

      /*
       * EmailJS sendForm automatically reads:
       *
       * name="full_name"
       * name="email"
       * name="phone"
       * name="preferred_location"
       * name="property_type"
       * name="requirement_type"
       * name="budget"
       * name="purpose"
       * name="message"
       *
       * and sends them to your EmailJS template.
       */

      const response = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("EmailJS Success:", response);

      /*
       * Reset form only after successful email
       */
      form.reset();

      setStatus("sent");
    } catch (error: any) {
      console.error("=================================");
      console.error("EMAILJS ERROR");
      console.error("=================================");
      console.error("Error:", error);

      if (error?.text) {
        console.error("EmailJS Error Message:", error.text);
      }

      if (error?.status) {
        console.error("EmailJS Status:", error.status);
      }

      /*
       * Show actual error when available.
       * This will make debugging much easier.
       */
      const actualError =
        error?.text ||
        error?.message ||
        "Unknown EmailJS error occurred.";

      setErrorMessage(
        `We couldn't send your enquiry. ${actualError}`
      );

      setStatus("error");
    }
  }

  /* =========================================================
     SUCCESS SCREEN
     ========================================================= */

  if (status === "sent") {
    return (
      <div className="card-premium mx-auto flex max-w-xl flex-col items-center px-6 py-14 text-center">

        <CheckCircle2
          className="h-10 w-10 text-emerald"
          strokeWidth={1.4}
        />

        <h3 className="mt-5 font-display text-2xl text-foreground">
          Enquiry Received
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for sharing your requirement. Our team will
          review it and get in touch with you shortly.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold"
        >
          Send Another Enquiry
        </button>

      </div>
    );
  }

  /* =========================================================
     MAIN FORM
     ========================================================= */

  return (
    <form
      onSubmit={handleSubmit}
      className="card-premium p-6 sm:p-9 lg:p-10"
    >
      <fieldset
        disabled={status === "sending"}
        className="space-y-10"
      >

        {/* =====================================================
            PERSONAL INFORMATION
        ===================================================== */}

        <div>
          <legend className="eyebrow-dark">
            Personal Information
          </legend>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {/* Full Name */}
            <div>
              <label
                className={labelClass}
                htmlFor="full_name"
              >
                Full Name *
              </label>

              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your full name"
                className={`${fieldClass} mt-2`}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className={labelClass}
                htmlFor="email"
              >
                Email Address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={`${fieldClass} mt-2`}
              />
            </div>

            {/* Phone */}
            <div className="md:col-span-2">
              <label
                className={labelClass}
                htmlFor="phone"
              >
                Contact Number *
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="Your contact number"
                className={`${fieldClass} mt-2`}
              />
            </div>

          </div>
        </div>


        {/* =====================================================
            PROPERTY REQUIREMENT
        ===================================================== */}

        <div>
          <legend className="eyebrow-dark">
            Property Requirement
          </legend>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {/* Preferred Location */}
            <div className="md:col-span-2">
              <label
                className={labelClass}
                htmlFor="preferred_location"
              >
                Preferred Location
              </label>

              <input
                id="preferred_location"
                name="preferred_location"
                type="text"
                placeholder="Where are you looking for a property?"
                className={`${fieldClass} mt-2`}
              />
            </div>

            {/* Property Type */}
            <Select
              id="property_type"
              label="Property Type"
              placeholder="Select Property Type"
              options={PROPERTY_TYPES}
            />

            {/* Requirement Type */}
            <Select
              id="requirement_type"
              label="Requirement Type"
              placeholder="Select Requirement Type"
              options={REQUIREMENT_TYPES}
            />

            {/* Budget */}
            <Select
              id="budget"
              label="Budget"
              placeholder="Select Budget Range"
              options={BUDGETS}
            />

            {/* Purpose */}
            <Select
              id="purpose"
              label="Purpose"
              placeholder="Select Purpose"
              options={PURPOSES}
            />

            {/* Additional Requirements */}
            <div className="md:col-span-2">
              <label
                className={labelClass}
                htmlFor="message"
              >
                Additional Requirements
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us more about your requirements..."
                className={`${fieldClass} mt-2 resize-y`}
              />
            </div>

          </div>
        </div>


        {/* =====================================================
            ERROR MESSAGE
        ===================================================== */}

        {status === "error" && (
          <div
            role="alert"
            className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700"
          >
            {errorMessage}
          </div>
        )}


        {/* =====================================================
            SUBMIT
        ===================================================== */}

        <div className="flex flex-col items-center gap-4 text-center">

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >

            {status === "sending" && (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}

            {status === "sending"
              ? "Sending…"
              : "Submit Property Enquiry"}

          </button>

          <p className="text-xs text-muted-foreground">
            Your information is used only to respond to your enquiry.
          </p>

        </div>

      </fieldset>
    </form>
  );
}