import Link from "next/link";
import Section from "@/components/Section";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ExperienceCard from "@/components/ExperienceCard";
import CTASection from "@/components/CTASection";
import { PAST_GATHERINGS } from "./past-gatherings";

export const metadata = {
  title: "Experiences — LaddHers",
  description:
    "Curated LaddHers gatherings — cocktails, private dinners, and roundtables — built around belonging, financial confidence, and community.",
};

// Image slot: curated dinner table or private salon atmosphere, per card.
const SIGNATURE_EXPERIENCES = [
  {
    title: "Cocktails & Connections",
    description: "An evening of unhurried conversation, curated introductions.",
    variant: "salon",
    src: "/images/experiences/cocktails-connections.png",
    alt: "Cocktails on a marble table with a city skyline at dusk in the background",
    focalPoint: "center 45%",
  },
  {
    title: "Women & Wealth",
    description: "Candid, off-the-record conversations on building capital.",
    variant: "dusk",
    src: "/images/experiences/women-wealth.png",
    alt: "Books on women and wealth stacked beside a globe on a sunlit desk",
    focalPoint: "30% 65%",
  },
  {
    title: "Private Dinners",
    description: "Small tables, exceptional company, no agenda but the room.",
    variant: "architecture",
    src: "/images/experiences/private-dinners.png",
    alt: "A private outdoor dinner table set with flowers along a colonnade",
    focalPoint: "35% 60%",
  },
  {
    title: "Founder Roundtables",
    description: "Operators and founders trading counsel in confidence.",
    variant: "hospitality",
    src: "/images/experiences/founder-roundtable.png",
    alt: "A round table set for a small private gathering in a moody dining room",
    focalPoint: "center 45%",
  },
];

const ROOM_OUTCOMES = [
  {
    title: "Belonging",
    body: "A room where ambitious women recognize each other on sight — showing up as you are is the whole point.",
  },
  {
    title: "Financial Confidence",
    body: "Real conversations about money and ownership that leave you better equipped for your next decision.",
  },
  {
    title: "Shared Knowledge",
    body: "Lessons passed between women who've already navigated the questions you're asking.",
  },
  {
    title: "Community",
    body: "Relationships that continue long after the evening ends.",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      {/* 1. EXPERIENCES HERO */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-0">
          <ImagePlaceholder
            variant="courtyard"
            aspect="aspect-auto h-full"
            className="h-full"
            src="/images/hero/experiences-hero.png"
            alt="A candlelit courtyard at dusk with a warmly lit interior opening onto a reflecting pool"
            focalPoint="65% 50%"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-editorial px-6 pb-16 md:px-10 md:pb-20">
          <p className="mb-6 text-sm tracking-wide2 text-fuchsia-light">
            Experiences
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
            Gatherings designed like moments, not meetings.
          </h1>
        </div>
      </section>

      {/* 2. JOIN PROMPT */}
      <Section>
        <p className="max-w-narrow font-serif text-2xl leading-snug text-charcoal md:text-3xl">
          Join the Circle to receive invitations to upcoming curated
          experiences.
        </p>
      </Section>

      {/* 3. SIGNATURE EXPERIENCE CARDS */}
      <Section eyebrow="Signature Experiences" title="Four Formats. One Standard.">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNATURE_EXPERIENCES.map((exp) => (
            <ExperienceCard key={exp.title} {...exp} />
          ))}
        </div>
      </Section>

      {/* 4. BROWSE PAST GATHERINGS — real LaddHers events, newest first.
          Every card shares one archive cover image (see
          app/experiences/past-gatherings.js) and routes to its own
          dedicated archive page at /experiences/[slug], which holds the
          real event photography. */}
      <Section id="past-gatherings" eyebrow="Event Archive" title="Browse past gatherings.">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {PAST_GATHERINGS.map((gathering) => (
            <Link
              key={gathering.slug}
              href={`/experiences/${gathering.slug}`}
              className="group hover-lift block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia"
            >
              <ImagePlaceholder
                aspect="aspect-[4/5]"
                zoom
                src={gathering.cover}
                alt={`${gathering.title} — LaddHers gathering`}
              />
              <div className="mt-5">
                <h3 className="font-serif text-xl">{gathering.title}</h3>
                {gathering.partner && (
                  <p className="mt-1 text-xs uppercase tracking-wide2 text-charcoal/50">
                    {gathering.partner}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {gathering.subtitle}
                </p>
                <p className="mt-3 text-xs uppercase tracking-wide2 text-fuchsia">
                  View Archive
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 5. WHAT THESE ROOMS CREATE */}
      <Section eyebrow="What These Rooms Create" title="What you leave with.">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {ROOM_OUTCOMES.map((outcome) => (
            <div key={outcome.title} className="border-t border-charcoal/20 pt-6">
              <h3 className="font-serif text-xl">{outcome.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {outcome.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. JOIN THE CIRCLE CTA */}
      <CTASection />
    </>
  );
}
