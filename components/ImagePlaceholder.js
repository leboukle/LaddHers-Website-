import Image from "next/image";

/**
 * Styled-div stand-in for photography, holding the brand's visual space
 * until real images are shot and dropped into /public/images (see the
 * folder structure and README notes there). Pass `src` once a real photo
 * exists for a given slot — the component renders it in place of the
 * placeholder automatically; until then, the designed placeholder shows.
 *
 * PHOTOGRAPHY DIRECTION for whoever selects/shoots the real images:
 * — Mood: editorial hospitality in the register of Raffles Hotel Singapore,
 *   Pan Pacific Orchard, the Morgan Library, NYPL reading rooms, and the
 *   Met Cloisters — stone arches, travertine, lush courtyards, natural
 *   daylight, quiet curated interiors.
 * — Avoid: warm gold/champagne lighting, beige-heavy color grading,
 *   generic stock photography, corporate/nonprofit/tech-startup visual
 *   cliches. Favor crisp daylight, ivory, stone, greenery, charcoal.
 * — People: never a single posed face as the lead visual. If people
 *   appear, keep them secondary to the room — silhouettes, distant or
 *   blurred figures, hands at a table, groups seen from behind, candid
 *   gathering atmosphere. Always multicultural; never a posed, smiling
 *   stock-photo group, and never one woman as the visual face of LaddHers.
 *
 * VARIANTS map to specific photography briefs:
 * — courtyard     Singapore-inspired architectural courtyard, no visible faces
 * — library       Library / museum interior, soft natural light
 * — salon         Curated dinner table or private salon atmosphere
 * — greenery      Lush courtyard planting, stone + foliage detail
 * — architecture  Neutral stone / travertine facade or entrance
 * — hospitality   Sage + limestone toned interior
 * — editorial     Dark, moody interior — editorial mood at dusk
 * — dusk          Warm stone / travertine, softly lit
 * — fuchsia       Charcoal-to-fuchsia brand-accent panel
 */
const VARIANTS = {
  courtyard: "linear-gradient(150deg, #f2efe7 0%, #dcd4c4 45%, #a7ac98 100%)",
  library: "linear-gradient(150deg, #fbfaf7 0%, #e8e3d9 50%, #c7c4b7 100%)",
  salon: "linear-gradient(150deg, #302e29 0%, #201e1b 55%, #3a1b28 100%)",
  greenery: "linear-gradient(150deg, #dee4d4 0%, #9caa92 55%, #5c6b54 100%)",
  architecture: "linear-gradient(135deg, #f2efe7 0%, #dcd4c4 45%, #b7b2a2 100%)",
  hospitality: "linear-gradient(135deg, #e4e6df 0%, #c7ccc0 50%, #9aa392 100%)",
  editorial: "linear-gradient(135deg, #2a2925 0%, #3f3d37 55%, #241a20 100%)",
  dusk: "linear-gradient(135deg, #dcd8cc 0%, #ada692 50%, #6b675c 100%)",
  fuchsia: "linear-gradient(135deg, #2a2925 0%, #5c1c37 60%, #8c1244 100%)",
};

// Faint repeating stone-arch silhouette — the "architectural framing" line
// work standing in for real colonnade/arch photography (Raffles, Central
// Park arches, the Cloisters) until real images replace these panels.
const ARCH_LINES =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cpath d='M30 190 V110 A70 70 0 0 1 170 110 V190' fill='none' stroke='%23ffffff' stroke-opacity='0.16' stroke-width='1'/%3E%3C/svg%3E\")";

const LIGHT_WASH = "linear-gradient(160deg, rgba(255,255,255,0.5), transparent 60%)";

const HAIRLINE_HATCH =
  "repeating-linear-gradient(45deg, rgba(20,19,17,0.035) 0px, rgba(20,19,17,0.035) 1px, transparent 1px, transparent 10px)";

export default function ImagePlaceholder({
  src,
  alt = "",
  variant = "architecture",
  label,
  aspect = "aspect-[4/5]",
  className = "",
  zoom = false,
  focalPoint = "center",
  sizes = "100vw",
  priority = false,
}) {
  const wrapperClass = `relative w-full overflow-hidden ${aspect} ${zoom ? "image-zoom" : ""} ${className}`;

  // Once a real photo exists for this slot, pass `src` and it renders here
  // instead of the designed placeholder below — no other changes needed.
  // `focalPoint` accepts any CSS object-position value (e.g. "65% 40%") so
  // each photo's crop can be tuned individually per instance.
  if (src) {
    return (
      <div className={wrapperClass}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${zoom ? "image-zoom-inner" : ""}`}
          style={{ objectPosition: focalPoint }}
        />
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <div
        className={`flex h-full w-full items-end p-6 ${zoom ? "image-zoom-inner" : ""}`}
        style={{
          backgroundImage: `${LIGHT_WASH}, ${ARCH_LINES}, ${HAIRLINE_HATCH}, ${VARIANTS[variant]}`,
          backgroundSize: "cover, 200px 200px, auto, cover",
          backgroundRepeat: "no-repeat, repeat, repeat, no-repeat",
          backgroundPosition: "center, center, center, center",
        }}
      >
        {label && (
          <span className="text-[11px] uppercase tracking-wide3 text-ink/60">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
