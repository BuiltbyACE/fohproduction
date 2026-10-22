"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scrolling while mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer on Escape key press
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close drawer if window is resized past mobile/tablet breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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

          <div className="nav-actions">
            <Link
              className="nav-cta"
              href={itemHref("#footer")}
              onClick={(event) => onAnchor(event, "#footer")}
            >
              Support our work
            </Link>

            <button
              type="button"
              className="menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-backdrop ${open ? "open" : ""}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      {/* Mobile Right-Sliding Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mobile-drawer-header">
          <span className="drawer-title">Menu</span>
          <button
            type="button"
            className="drawer-close-btn"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="mobile-drawer-links" aria-label="Mobile Navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={itemHref(item.href)}
              onClick={(event) => onAnchor(event, item.href)}
              className="drawer-link"
            >
              <span className="drawer-link-label">{item.label}</span>
              {item.caption && (
                <small className="drawer-link-caption">{item.caption}</small>
              )}
            </Link>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <Link
            className="drawer-cta"
            href={itemHref("#footer")}
            onClick={(event) => onAnchor(event, "#footer")}
          >
            Support our work
          </Link>
        </div>
      </div>
    </header>
  );
}