export default function Wordmark({ className = "", size = "text-2xl", onDark = false }) {
  return (
    <span className={`font-serif ${size} ${className}`}>
      <span className={onDark ? "text-ivory" : "text-charcoal"}>Ladd</span>
      <span className="text-fuchsia">Hers</span>
    </span>
  );
}
