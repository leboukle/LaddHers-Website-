import Link from "next/link";

const VARIANTS = {
  primary: "bg-charcoal text-ivory border border-charcoal hover:bg-ink",
  fuchsia: "bg-fuchsia text-ivory border border-fuchsia hover:bg-fuchsia-dark",
  outline: "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory",
  outlineLight: "bg-transparent text-ivory border border-ivory hover:bg-ivory hover:text-charcoal",
};

const SIZES = {
  md: "px-8 py-3 text-xs",
  sm: "px-5 py-2 text-[11px]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  pill = false,
  className = "",
  type,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 ${SIZES[size]} uppercase tracking-wide3 transition-colors duration-400 ${pill ? "rounded-full" : ""} ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type || "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
