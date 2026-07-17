import Section from "@/components/Section";
import Button from "@/components/Button";
import Wordmark from "@/components/Wordmark";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ExperienceCard from "@/components/ExperienceCard";
import Perspectives from "@/components/Perspectives";
import PartnerLogoWall from "@/components/PartnerLogoWall";
import JoinCircleForm from "@/components/JoinCircleForm";

// Feature flag: the partner logo showcase is temporarily disabled until
// official partner permissions and brand assets are finalized. Flip to
// true to restore it — PartnerLogoWall itself is untouched.
const SHOW_PARTNER_LOGOS = false;

const CIRCLE_PILLARS = [
  {
    title: "Belonging",
    body: "A trusted circle where financial conversations are open, real, and empowering — where women learn from one another's stories, successes, and lessons.",
  },
  {
    title: "Curated Experiences",
    body: "From intimate dinners to expert-led discussions, every LaddHers experience is crafted to deepen your understanding of money, investing, and wealth-building while connecting you with women on a similar journey.",
  },
  {
    title: "Access to Experts",
    body: "Learn directly from financial leaders, wealth strategists, and entrepreneurs who share practical insights and lessons that move you closer to your financial goals.",
  },
  {
    title: "Financial Empowerment",
    body: "We bring clarity to topics that too often feel complex — investing, saving, generational wealth, and more — through curated conversations that help women make informed, confident money decisions.",
  },
];

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

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-0">
          <ImagePlaceholder
            variant="courtyard"
            aspect="aspect-auto h-full"
            className="h-full"
            src="/images/hero/home-hero.png"
            alt="A warmly lit archway entrance flanked by olive trees, opening onto a marble interior"
            focalPoint="center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-editorial px-6 pb-20 md:px-10 md:pb-28">
          <Wordmark size="text-3xl md:text-4xl" onDark className="mb-6 block" />
          <h1 className="max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
            Where ambitious women build wealth, relationships, and
            opportunity.
          </h1>
          <p className="mt-6 max-w-md text-sm text-ivory/75 md:text-base">
            A modern circle for women rising with intention.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/#join" variant="fuchsia" pill>
              Join the Circle
            </Button>
            <Button href="/experiences" variant="outlineLight">
              Explore Experiences
            </Button>
          </div>
        </div>
      </section>

      {/* 2. THE CIRCLE */}
      <Section eyebrow="The Circle" title="Not a network. A room.">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <ImagePlaceholder
            variant="library"
            label="The Circle"
            src="/images/home/circle-community.jpg"
            alt="Three women smiling together at a LaddHers gathering"
            focalPoint="center 25%"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="space-y-5 text-base leading-relaxed text-charcoal/75">
            <p>
              LaddHers gathers women who are already building — careers,
              companies, capital, and each other. We curate the room so the
              conversation can go further, faster, with people who understand
              exactly what it took to get here.
            </p>
            <p>
              It isn&apos;t a network you join and forget. It&apos;s a
              standing room of women who show up for one another — in
              business, in wealth, and in the quieter decisions in between.
            </p>
            <p>
              Every gathering, introduction, and experience is designed with
              one question in mind: who belongs in this room, and what do
              they need from it.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. WHAT THE ROOM IS BUILT ON */}
      <Section
        eyebrow="Why We Gather"
        title="A trusted circle for women building financial confidence, community, and possibility."
      >
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2">
          {CIRCLE_PILLARS.map((pillar) => (
            <div key={pillar.title} className="border-t border-charcoal/20 pt-6">
              <h3 className="font-serif text-2xl">{pillar.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal/70">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. SIGNATURE EXPERIENCES */}
      <Section
        eyebrow="Signature Experiences"
        title="Gatherings designed like moments, not meetings."
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNATURE_EXPERIENCES.map((exp) => (
            <ExperienceCard key={exp.title} href="/experiences" {...exp} />
          ))}
        </div>
      </Section>

      {/* 5. PERSPECTIVES */}
      <Perspectives />

      {/* 6. PARTNERS / SPONSORS — logo showcase hidden via
          SHOW_PARTNER_LOGOS until official partner permissions and brand
          assets are finalized; section heading and copy stay in place.
          PartnerLogoWall itself is untouched. */}
      <Section
        compact={!SHOW_PARTNER_LOGOS}
        eyebrow="Partners"
        title="Building a circle of organizations who believe in women, in the room."
      >
        {SHOW_PARTNER_LOGOS && <PartnerLogoWall />}
      </Section>

      {/* 7. JOIN THE CIRCLE */}
      <section id="join" className="bg-limestone/40 py-24 md:py-32">
        <div className="mx-auto w-full max-w-editorial px-6 md:px-10">
          <div className="mb-14 md:mb-20">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              Join the Circle
            </h2>
            <p className="mt-4 font-serif text-lg italic text-charcoal/60 md:text-xl">
              Women go further when they rise together, in rooms built for
              trust.
            </p>
            <p className="mt-8 max-w-narrow text-base leading-relaxed text-charcoal/70">
              Tell us who you are to receive invitations to future LaddHers
              gatherings, curated experiences, and community updates.
            </p>
          </div>
          <JoinCircleForm />
        </div>
      </section>
    </>
  );
}
