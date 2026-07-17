import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

const CARD_SIZES = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw";

export default function ExperienceCard({
  title,
  description,
  variant = "architecture",
  href,
  className = "",
  src,
  alt,
  focalPoint,
}) {
  const content = (
    <div className={`group hover-lift ${className}`}>
      <ImagePlaceholder
        variant={variant}
        label={title}
        zoom
        aspect="aspect-[3/4]"
        src={src}
        alt={alt || title}
        focalPoint={focalPoint}
        sizes={CARD_SIZES}
      />
      <div className="mt-5">
        <h3 className="font-serif text-xl">{title}</h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
