import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  GlobeIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  XIcon,
  YouTubeIcon,
} from "./icons";
import SupportAction from "./support-action";
import { TOPICS } from "@/lib/topics";
import {
  ORG_EMAIL,
  ORG_PHONE_DISPLAY,
  ORG_PHONE_TEL,
  ORG_URL,
  NETWORK_LINKS,
  PARTNER_LINKS,
  REGISTRY_LINKS,
  SOCIAL_PROFILES,
} from "@/lib/organization";
import type { SocialProfile } from "@/lib/organization";

const SOCIAL_ICONS: Record<SocialProfile["icon"], typeof FacebookIcon> = {
  facebook: FacebookIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

export default function SiteFooter() {
  return (
    <footer id="footer" aria-labelledby="footer-heading">
      <div className="wrap">
        <h2 id="footer-heading" className="sr-only">
          Fountain of Hope — contact, partners and official social channels
        </h2>

        <div className="foot-grid">
          <div className="foot-about">
            <Link
              className="brand"
              href="/#top"
              aria-label="Fountain of Hope — home"
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
                <span className="sub">Garissa, Kenya</span>
              </span>
            </Link>
            <p>
              A woman-led community organization working beside pastoralist
              communities in Garissa in health, education and resilience —
              because real change is built from within.
            </p>

            <ul
              className="foot-social"
              aria-label="Fountain of Hope on social media"
            >
              {SOCIAL_PROFILES.map((profile) => {
                const Icon = SOCIAL_ICONS[profile.icon];
                return (
                  <li key={profile.url}>
                    <a
                      className="foot-social-link"
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={profile.label}
                      aria-label={`${profile.label} (opens in a new tab)`}
                    >
                      <Icon />
                      <span>{profile.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav className="foot-col" aria-labelledby="foot-topics">
            <h3 id="foot-topics">Topics</h3>
            <ul>
              {TOPICS.map((topic) => (
                <li key={topic.href}>
                  <Link href={topic.href}>{topic.navLabel}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="foot-col" aria-labelledby="foot-involved">
            <h3 id="foot-involved">Get involved</h3>
            <ul>
              <li>
                <SupportAction type="donate" className="foot-btn">
                  Donate
                </SupportAction>
              </li>
              <li>
                <SupportAction type="partner" className="foot-btn">
                  Partner with us
                </SupportAction>
              </li>
            </ul>
          </nav>

          <nav
            className="foot-col foot-col--partners"
            aria-labelledby="foot-partners"
          >
            <h3 id="foot-partners">Partners &amp; networks</h3>
            <ul>
              {PARTNER_LINKS.filter((partner) => partner.kind !== "network").map(
                (partner) => (
                  <li key={partner.url}>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${partner.name} — ${partner.relationship} (opens in a new tab)`}
                    >
                      {partner.name}
                    </a>
                  </li>
                ),
              )}
            </ul>

            {NETWORK_LINKS.length > 0 && (
              <>
                <p className="foot-subhead">Networks we belong to</p>
                <ul>
                  {NETWORK_LINKS.map((network) => (
                    <li key={network.url}>
                      <a
                        href={network.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${network.name} — ${network.relationship} (opens in a new tab)`}
                      >
                        {network.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <p className="foot-subhead">Registries &amp; public institutions</p>
            <ul className="foot-links--muted">
              {REGISTRY_LINKS.map((registry) => (
                <li key={registry.url}>
                  <a
                    href={registry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${registry.name} — ${registry.relationship} (opens in a new tab)`}
                  >
                    {registry.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="foot-col">
            <h3 id="foot-contact">Contact</h3>
            <address className="foot-contact">
              <div>
                <PhoneIcon />
                <a
                  href={`tel:${ORG_PHONE_TEL}`}
                  aria-label={`Call Fountain of Hope on ${ORG_PHONE_DISPLAY}`}
                >
                  {ORG_PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <MailIcon />
                <a
                  href={`mailto:${ORG_EMAIL}`}
                  aria-label="Email Fountain of Hope"
                >
                  {ORG_EMAIL}
                </a>
              </div>
              <div>
                <MapPinIcon />
                <span>Garissa County, North Eastern Kenya</span>
              </div>
              <div>
                <GlobeIcon />
                <a
                  href={ORG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fountain of Hope official website (opens in a new tab)"
                >
                  Official website
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Fountain of Hope. Stories © Fountain of Hope.</span>
          <span className="reg">
            <a
              href="https://www.pbora.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Public Benefit Organizations Regulatory Authority — Kenya's charity regulator (opens in a new tab)"
            >
              PBO Regulatory Authority
            </a>
            <span className="sep" aria-hidden="true">
              ·
            </span>
            <a
              href="https://www.asalrd.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="State Department for ASALs and Regional Development (opens in a new tab)"
            >
              ASALs &amp; Regional Development
            </a>
          </span>
          <span className="df">
            <span className="heart">♥</span> Created by safaristack solutions
          </span>
        </div>
      </div>
    </footer>
  );
}
