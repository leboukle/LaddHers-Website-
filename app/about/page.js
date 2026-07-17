import Section from "@/components/Section";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About — LaddHers",
  description:
    "LaddHers is a 501(c)(3) nonprofit building a circle of women focused on financial confidence, wealth-building, and community.",
};

const VALUES = [
  {
    title: "Intention",
    body: "Every gathering, introduction, and word is chosen with purpose.",
  },
  {
    title: "Discretion",
    body: "The room is a place to speak candidly, off the record.",
  },
  {
    title: "Reciprocity",
    body: "Access flows both ways — we ask as much as we give.",
  },
  {
    title: "Craft",
    body: "Details are not decoration. They are how trust is built.",
  },
];

// Temporary placeholders only — no real names, bios, or credentials until
// the board is finalized.
const LEADERSHIP = [
  { name: "Name", title: "Title" },
  { name: "Name", title: "Title" },
  { name: "Name", title: "Title" },
];

// Feature flag: Leadership Team section is temporarily hidden until the
// team's photography and biographies are finalized. Flip to true to
// restore it — the section markup below is untouched.
const SHOW_LEADERSHIP_TEAM = false;

// Shared text treatment for the magazine-style flowing paragraphs in Our
// Story and Meet the Founder — slightly loosened line-height, modest
// paragraph spacing.
const PROSE = "space-y-6 font-sans text-base leading-[1.75] text-charcoal/80 md:space-y-7 md:text-lg";

// Wrapper for a portrait that floats beside the opening paragraphs on
// desktop and stacks full-width above the text on mobile.
const FLOAT_IMAGE_WRAP =
  "mb-6 w-full max-w-sm md:float-left md:mr-10 md:max-w-[340px]";

export default function AboutPage() {
  return (
    <>
      {/* 1. ABOUT HERO */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-0">
          <ImagePlaceholder
            variant="library"
            aspect="aspect-auto h-full"
            className="h-full"
            src="/images/hero/about-hero.png"
            alt="A sunlit stone hallway with an archway opening onto a courtyard with bougainvillea"
            focalPoint="65% 55%"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-editorial px-6 pb-16 md:px-10 md:pb-20">
          <p className="mb-6 text-sm tracking-wide2 text-fuchsia-light">
            About LaddHers
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
            LaddHers is a circle built for women to come together to deepen
            financial confidence, grow their wealth, and connect with
            like-minded peers.
          </h1>
          <p className="mt-6 max-w-xl text-sm text-ivory/75 md:text-base">
            We&apos;re redefining what it means to be financially empowered —
            one conversation, one connection at a time.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY — magazine flow: portrait floats beside the opening
          paragraphs, then the rest of the piece spans the full column. */}
      <section className="bg-ivory">
        <div className="mx-auto w-full max-w-editorial px-6 py-16 md:px-10 md:py-24">
          <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
            Our Story
          </h2>

          <div className="mt-8 max-w-[820px] md:mt-10">
            <div className={FLOAT_IMAGE_WRAP}>
              <ImagePlaceholder
                variant="courtyard"
                aspect="aspect-[4/5]"
                className="rounded-[20px] shadow-xl"
                src="/images/about/our-story.jpg"
                alt="Women gathered together in conversation at a LaddHers event"
                focalPoint="40% 40%"
                sizes="340px"
              />
            </div>

            <div className={PROSE}>
              <p>
                LaddHers was born from a simple belief: financial knowledge
                changes lives.
              </p>
              <p>
                Long before LaddHers became an organization, it was a
                conviction that stayed with me throughout my life. I came to
                the United States at a young age and learned early that
                there is a profound difference between earning an income and
                understanding how money works. Financial literacy is more
                than balancing a budget or investing in the stock market. It
                is the ability to make choices from a position of confidence
                rather than uncertainty. It creates freedom, expands
                opportunities, and provides the confidence to navigate
                life's biggest decisions.
              </p>
              <p>
                Growing up, conversations about investing, wealth creation,
                and long-term financial planning were not part of everyday
                life. For many families, those conversations simply never
                happen. Some never had a dinner table where those
                discussions could take place at all. Regardless of where we
                come from, many women begin their careers exceptionally
                accomplished in their professions yet without the same level
                of confidence in building, preserving, and growing wealth.
              </p>
            </div>

            <div className="clear-both" />

            <div className={`mt-8 md:mt-10 ${PROSE}`}>
              <p>
                As I built my own career in finance, I saw this pattern
                repeatedly. Brilliant women—founders, executives,
                physicians, attorneys, engineers, operators, and
                investors—were often navigating wealth-building in
                isolation. They had ambition, talent, and discipline, yet
                too few spaces existed where they could openly exchange
                ideas, learn from one another, and build relationships
                around financial growth.
              </p>
              <p>LaddHers was created to change that.</p>
              <p>
                We are building a community where ambitious women gain
                access to ideas, relationships, and opportunities that
                accelerate wealth creation. Through meaningful
                conversations, curated experiences, and an extraordinary
                network of accomplished women, we aim to make financial
                empowerment more accessible, more practical, and more
                collaborative.
              </p>
              <p>
                Whether you grew up discussing investing around the dinner
                table or are the first in your family to learn about wealth
                creation, every woman deserves access to the knowledge,
                relationships, and opportunities that help her build the
                future she chooses.
              </p>
              <p>Because financial literacy is only the beginning.</p>
              <p>
                The ultimate goal is financial confidence, financial
                independence, and the freedom to live life on your own
                terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION */}
      <Section
        compact
        dark
        eyebrow="Our Mission"
        title="Access, at the pace of trust."
      >
        <div className="max-w-narrow space-y-5 text-base leading-[1.75] text-ivory/75 md:text-lg">
          <p>
            LaddHers is a 501(c)(3) nonprofit organization. Our mission is to
            expand the wealth, networks, and opportunity available to
            ambitious women by curating experiences and relationships that
            would otherwise take a decade to build on their own.
          </p>
          <p>
            LaddHers exists to make conversations about money, investing,
            and wealth feel more accessible, more collaborative, and more
            empowering. Through trusted relationships, curated experiences,
            and practical insights, we help women build the confidence to
            make informed financial decisions and create lasting financial
            independence.
          </p>
        </div>
      </Section>

      {/* 4. OUR VALUES */}
      <Section compact eyebrow="Our Values" title="What holds the room together.">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {VALUES.map((value) => (
            <div key={value.title} className="border-t border-charcoal/20 pt-6">
              <h3 className="font-serif text-xl">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Elegant divider between Our Values and Meet the Founder */}
      <div className="bg-ivory">
        <div className="mx-auto w-full max-w-editorial px-6 md:px-10">
          <div className="h-px w-full bg-charcoal/10" />
        </div>
      </div>

      {/* 5. MEET THE FOUNDER — name, title, portrait, and biography as one
          cohesive section; no separate signature block. Portrait floats
          beside the opening paragraphs, then the rest spans full width. */}
      <section className="bg-ivory">
        <div className="mx-auto w-full max-w-editorial px-6 py-16 md:px-10 md:py-24">
          <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
            Meet the Founder
          </h2>
          <p className="mt-6 font-serif text-2xl text-charcoal">
            Linda Ebouklé
          </p>
          <p className="mt-2 text-xs uppercase tracking-wide3 text-charcoal/50">
            Founder &amp; Executive Director
          </p>

          <div className="mt-8 max-w-[820px] md:mt-10">
            <div className={FLOAT_IMAGE_WRAP}>
              <ImagePlaceholder
                variant="fuchsia"
                aspect="aspect-[4/5]"
                className="rounded-[20px] shadow-xl"
                src="/images/about/founder-portrait.jpg"
                alt="Linda Ebouklé, Founder & Executive Director of LaddHers"
                focalPoint="35% 30%"
                sizes="340px"
              />
            </div>

            <div className={PROSE}>
              <p>
                I founded LaddHers because I believe that financial
                knowledge is one of the most powerful tools a person can
                possess—not simply to build wealth, but to create choices,
                confidence, and independence throughout every stage of
                life.
              </p>
              <p>
                At a very young age, I learned the importance of
                self-sufficiency and the role that financial capability
                plays in creating opportunity. That experience shaped a
                lifelong belief that understanding money is fundamental to
                building the life you want, regardless of where you begin.
              </p>
            </div>

            <div className="clear-both" />

            <div className={`mt-8 md:mt-10 ${PROSE}`}>
              <p>
                Over nearly two decades in financial services, I have
                advised global financial institutions on complex regulatory
                frameworks, risk management, and operational
                transformation. While that experience gave me deep
                technical expertise, it also reinforced something I
                observed time and again: women across every
                profession—whether founders, executives, physicians,
                attorneys, investors, or operators—benefit enormously from
                having trusted communities where conversations about
                wealth are both practical and aspirational.
              </p>
              <p>That conviction led me to create LaddHers.</p>
              <p>
                My vision is to build more than a networking organization.
                I want to build an institution that brings together
                ambitious women through curated experiences, meaningful
                dialogue, and lasting relationships—creating extraordinary
                rooms where women gain access to the ideas, connections,
                and opportunities that help them build enduring wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP — temporary placeholders only, no invented names,
          bios, or credentials. Hidden via SHOW_LEADERSHIP_TEAM until the
          team's photography and biographies are finalized; markup kept
          in place so it can be restored by flipping the flag. */}
      {SHOW_LEADERSHIP_TEAM && (
        <Section compact title="Leadership">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((person, i) => (
              <div key={i}>
                <ImagePlaceholder variant="hospitality" aspect="aspect-[4/5]" />
                <p className="mt-5 font-serif text-lg text-charcoal">
                  {person.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide2 text-charcoal/50">
                  {person.title}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* 7. JOIN THE CIRCLE CTA */}
      <CTASection />
    </>
  );
}
