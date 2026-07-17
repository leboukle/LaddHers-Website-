import Link from "next/link";
import Wordmark from "./Wordmark";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experiences", href: "/experiences" },
  { label: "Contact", href: "/contact" },
];

// Add future channels (YouTube, Newsletter, Media) here as they launch.
const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/the-laddhers/" },
  { label: "Instagram", href: "https://www.instagram.com/laddhers_official/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-ivory">
      <div className="mx-auto w-full max-w-editorial px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark size="text-2xl" onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              A modern circle for ambitious women building wealth,
              relationships, and opportunity.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-wide3 text-ivory/40">
              Explore
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/80 link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-wide3 text-ivory/40">
              Connect
            </p>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ivory/80 link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                {/* Placeholder inquiry address — replace with live inbox. */}
                <a
                  href="mailto:info@laddhers.com"
                  className="text-sm text-ivory/80 link-underline"
                >
                  info@laddhers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} LaddHers. All rights reserved.</p>
          <p>LaddHers is a registered 501(c)(3) nonprofit organization.</p>
        </div>
      </div>
    </footer>
  );
}
