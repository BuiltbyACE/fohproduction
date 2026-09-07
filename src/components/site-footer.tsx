import Image from "next/image";
import Link from "next/link";
import { AtIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";
import { TOPICS } from "@/lib/topics";

export default function SiteFooter() {
  return (
    <footer id="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-about">
            <Link className="brand" href="/#top">
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
              A woman-led community organization working beside the people of
              Garissa in health and education — because real change is built
              from within.
            </p>
          </div>

          <div className="foot-col">
            <h5>Topics</h5>
            <ul>
              {TOPICS.map((topic) => (
                <li key={topic.href}>
                  <Link href={topic.href}>{topic.navLabel}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h5>Get involved</h5>
            <ul>
              <li>
                <Link href="/#footer">Donate</Link>
              </li>
              <li>
                <Link href="/#footer">Partner with us</Link>
              </li>
              <li>
                <Link href="/#footer">Sponsorship</Link>
              </li>
              <li>
                <Link href="/#footer">Volunteer</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Contact</h5>
            <div className="foot-contact">
              <div>
                <PhoneIcon />
                <span>+254 742 789 903</span>
              </div>
              <div>
                <MailIcon />
                <span>info@fountainofhope.or.ke</span>
              </div>
              <div>
                <MapPinIcon />
                <span>Garissa County, North Eastern Kenya</span>
              </div>
              <div>
                <AtIcon />
                <span>@Fountain_FOH</span>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="reg">Reg. No. GSA//HC/G/CD/2B/034 · Est. 2017</span>
          <span>© 2026 Fountain of Hope. Stories © Fountain of Hope.</span>
          <a
            className="df"
            href="https://deerflow.tech"
            target="_blank"
            rel="noopener"
            title="Created by Deerflow"
          >
            <span className="heart">♥</span> Created by Deerflow
          </a>
        </div>
      </div>
    </footer>
  );
}