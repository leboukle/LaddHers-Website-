import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import EventGallery from "@/components/EventGallery";
import { PAST_GATHERINGS, getGathering } from "../past-gatherings";

// Pre-render every known gathering slug at build time.
export function generateStaticParams() {
  return PAST_GATHERINGS.map((gathering) => ({ slug: gathering.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const gathering = getGathering(slug);
  return {
    title: gathering
      ? `${gathering.title} — LaddHers`
      : "Past Gathering — LaddHers",
  };
}

export default async function GatheringArchivePage({ params }) {
  const { slug } = await params;
  const gathering = getGathering(slug);

  if (!gathering) {
    notFound();
  }

  const description = gathering.archiveDescription || gathering.subtitle;

  return (
    <Section eyebrow="Past Gathering" title={gathering.title}>
      <div className="max-w-narrow space-y-5">
        {gathering.partner && (
          <p className="text-xs uppercase tracking-wide2 text-charcoal/50">
            {gathering.partner}
          </p>
        )}
        <p className="text-base leading-relaxed text-charcoal/75">
          {description}
        </p>
      </div>

      <div className="mt-14 md:mt-16">
        <EventGallery images={gathering.images} eventTitle={gathering.title} />
      </div>

      <div className="mt-14 md:mt-16">
        <Link
          href="/experiences#past-gatherings"
          className="text-sm uppercase tracking-wide2 text-charcoal/60 transition-colors duration-400 hover:text-fuchsia focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia"
        >
          ← Back to Past Gatherings
        </Link>
      </div>
    </Section>
  );
}
