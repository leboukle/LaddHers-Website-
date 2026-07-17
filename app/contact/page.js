import Section from "@/components/Section";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTASection from "@/components/CTASection";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact — LaddHers",
  description: "Get in touch with LaddHers — general inquiries, partnerships, and press.",
};

// Add future channels (YouTube, Newsletter, Media) here as they launch.
const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/the-laddhers/" },
  { label: "Instagram", href: "https://www.instagram.com/laddhers_official/" },
];

export default function ContactPage() {
  return (
    <>
      {/* 1. CONTACT HERO */}
      <section className="relative flex min-h-[45vh] items-end overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-0">
          <ImagePlaceholder
            variant="architecture"
            aspect="aspect-auto h-full"
            className="h-full"
            src="/images/hero/contact-hero.png"
            alt="A warmly lit stone entrance with an open wooden door at golden hour"
            focalPoint="60% 45%"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-editorial px-6 pb-16 md:px-10 md:pb-20">
          <p className="mb-6 text-sm tracking-wide2 text-fuchsia-light">
            Contact
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
            We&apos;d like to hear from you.
          </h1>
        </div>
      </section>

      {/* 2. CONTACT FORM */}
      <Section eyebrow="Get in Touch" title="Send us a note.">
        <div className="max-w-narrow">
          <ContactForm />
        </div>
      </Section>

      {/* 3 & 4. GENERAL INQUIRY EMAIL + SOCIAL LINKS */}
      <Section className="pt-0 md:pt-0">
        <div className="grid grid-cols-1 gap-10 border-t border-charcoal/12 pt-16 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-wide2 text-charcoal/50">
              General Inquiries
            </p>
            {/* Placeholder inquiry address — replace with live inbox. */}
            <a
              href="mailto:info@laddhers.com"
              className="link-underline font-serif text-xl"
            >
              info@laddhers.com
            </a>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-wide2 text-charcoal/50">
              Follow Along
            </p>
            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-serif text-xl"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. JOIN THE CIRCLE CTA */}
      <CTASection />
    </>
  );
}
