import Image from "next/image";
import Link from "next/link";
import { AtIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";
import SupportAction from "./support-action";
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
                <span>cflgarissa007@gmail.com</span>
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
          <span>© 2026 Fountain of Hope. Stories © Fountain of Hope.</span>
          <span className="df">
            <span className="heart">♥</span> Created by safaristack solutions
          </span>
        </div>
      </div>
    </footer>
  );
}