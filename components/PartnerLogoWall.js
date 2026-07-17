/**
 * Image slot: partner/sponsor logos on a clean neutral background.
 * Grayscale placeholder tiles stand in for those logos — replace each
 * block with an <Image> from /public/images/partners/ (grayscale via CSS
 * filter, full color on hover) once partnerships are confirmed.
 */
const PLACEHOLDER_COUNT = 6;

export default function PartnerLogoWall({ note = "Partner marks coming soon" }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-px border border-charcoal/12 bg-charcoal/12 md:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-[3/2] items-center justify-center bg-ivory"
          >
            <span className="text-[11px] uppercase tracking-wide3 text-charcoal/30">
              Partner
            </span>
          </div>
        ))}
      </div>
      {note && (
        <p className="mt-6 text-center text-xs uppercase tracking-wide2 text-charcoal/40">
          {note}
        </p>
      )}
    </div>
  );
}
