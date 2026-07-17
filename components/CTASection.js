import Button from "./Button";

export default function CTASection({
  eyebrow = "Join the Circle",
  title = "A circle for women building real wealth, together.",
  description = "Tell us who you are to receive invitations to LaddHers gatherings, curated experiences, and community updates.",
  href = "/#join",
  ctaLabel = "Join the Circle",
}) {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="mx-auto flex w-full max-w-editorial flex-col items-start gap-8 px-6 py-24 md:px-10 md:py-32">
        {eyebrow && (
          <p className="text-sm tracking-wide2 text-fuchsia-light">
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-3xl leading-tight md:max-w-narrow md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-narrow text-sm leading-relaxed text-ivory/70 md:text-base">
            {description}
          </p>
        )}
        <Button href={href} variant="fuchsia" pill>
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
