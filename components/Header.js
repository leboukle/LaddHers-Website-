"use client";

import { useState } from "react";
import Link from "next/link";
import Wordmark from "./Wordmark";
import Button from "./Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experiences", href: "/experiences" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-editorial items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label="LaddHers home">
          <Wordmark size="text-xl md:text-2xl" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-xs uppercase tracking-wide2 text-charcoal"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/#join" variant="fuchsia" size="sm" pill className="ml-1">
            Join the Circle
          </Button>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-px w-6 bg-charcoal" />
          <span className="h-px w-6 bg-charcoal" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-6 border-t border-charcoal/10 bg-ivory px-6 py-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-wide2 text-charcoal"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="/#join"
            variant="fuchsia"
            size="sm"
            pill
            className="self-start"
            onClick={() => setOpen(false)}
          >
            Join the Circle
          </Button>
        </nav>
      )}
    </header>
  );
}
