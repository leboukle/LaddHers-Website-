// Real past LaddHers gatherings, newest first. Every card on the
// Experiences page shares one placeholder cover image; each gathering
// also carries its own `images` array (real event photography, in
// filename order) used by its dedicated archive page at
// /experiences/[slug] (see app/experiences/[slug]/page.js).
//
// `archiveDescription` is optional — when present, the archive page uses
// it instead of `subtitle` (the card copy on the Experiences page always
// uses `subtitle`, unchanged).
const ARCHIVE_COVER = "/images/archives/event-archive-cover.png";

export const PAST_GATHERINGS = [
  {
    slug: "cocktails-and-connections",
    title: "Cocktails & Connections",
    subtitle:
      "A curated evening bringing together female fintech founders, investors, venture capital professionals, and operators for meaningful conversation and relationship-building.",
    archiveDescription:
      "A curated event for female fintech founders, VCs, and operators.",
    cover: ARCHIVE_COVER,
    images: [
      "/images/events/cocktails-and-connections/01.jpg",
      "/images/events/cocktails-and-connections/02.jpg",
      "/images/events/cocktails-and-connections/03.jpg",
      "/images/events/cocktails-and-connections/04.jpg",
      "/images/events/cocktails-and-connections/05.jpg",
      "/images/events/cocktails-and-connections/06.jpg",
      "/images/events/cocktails-and-connections/07.jpg",
    ],
  },
  {
    slug: "women-and-wealth",
    title: "Women & Wealth: What Matters",
    partner: "In partnership with Klingman & Associates",
    subtitle:
      "An intimate discussion exploring wealth, financial decision-making, and the conversations that shape long-term financial confidence.",
    cover: ARCHIVE_COVER,
    // Only 3 of the 5 supplied photos are usable — 04 and 05 were
    // provided as .heic files, which browsers can't reliably display.
    // Re-export those two as .jpg/.jpeg and add them here to complete
    // the set.
    images: [
      "/images/events/women-and-wealth/01.jpg",
      "/images/events/women-and-wealth/02.jpg",
      "/images/events/women-and-wealth/03.jpg",
    ],
  },
  {
    slug: "financial-wellness-reimagined",
    title: "Your Financial Wellness, Reimagined",
    subtitle:
      "An interactive evening focused on practical financial wellness, education, and empowering women to build lasting financial confidence.",
    cover: ARCHIVE_COVER,
    images: [
      "/images/events/financial-wellness-reimagined/01.jpg",
      "/images/events/financial-wellness-reimagined/02.jpg",
      "/images/events/financial-wellness-reimagined/03.jpg",
      "/images/events/financial-wellness-reimagined/04.jpg",
      "/images/events/financial-wellness-reimagined/05.jpg",
      "/images/events/financial-wellness-reimagined/06.jpg",
    ],
  },
];

export function getGathering(slug) {
  return PAST_GATHERINGS.find((g) => g.slug === slug);
}
