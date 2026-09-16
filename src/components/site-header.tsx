"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuIcon } from "./icons";

const NAV_ITEMS = [
  { label: "Topics", href: "#topics", caption: "Real stories" },
  { label: "Our story", href: "/our-story", caption: "From the ground" },
  { label: "Contact", href: "#footer", caption: "Get in touch" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const itemHref = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  const onAnchor = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/" && href.startsWith("#")) {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap">
        <nav className="nav" aria-label="Primary">
          <Link
            className="brand"
            href="/"
            aria-label="Fountain of Hope home"
            onClick={() => setOpen(false)}
          >
            <span className="mark" aria-hidden="true">
              <Image
                src="/fohlogo.png"
                alt=""
                width={52}
                height={78}
                priority
              />
            </span>
            <span>
              <span className="name">Fountain of Hope</span>
              <span className="sub">Garissa, Kenya · Est. 2017</span>
            </span>
          </Link>

          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={itemHref(item.href)}
                onClick={(event) => onAnchor(event, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon />
          </button>

          <Link
            className="nav-cta"
            href={itemHref("#footer")}
            onClick={(event) => onAnchor(event, "#footer")}
          >
            Support our work
          </Link>
        </nav>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={itemHref(item.href)}
            onClick={(event) => onAnchor(event, item.href)}
          >
            {item.label}
            <small>{item.caption}</small>
          </Link>
        ))}
      </div>
    </header>
  );
}