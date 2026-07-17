export default function Section({
  id,
  eyebrow,
  title,
  className = "",
  containerClassName = "",
  children,
  dark = false,
  compact = false,
}) {
  return (
    <section
      id={id}
      className={`${compact ? "py-16 md:py-24" : "py-24 md:py-32"} ${dark ? "bg-charcoal text-ivory" : ""} ${className}`}
    >
      <div className={`mx-auto w-full max-w-editorial px-6 md:px-10 ${containerClassName}`}>
        {(eyebrow || title) && (
          <div className={compact ? "mb-10 md:mb-14" : "mb-14 md:mb-20"}>
            {eyebrow && (
              <p className="text-sm tracking-wide2 text-fuchsia mb-4">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-narrow">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
