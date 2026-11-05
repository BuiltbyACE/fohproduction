import Link from "next/link";
import Reveal from "./reveal";
import SupportAction from "./support-action";
import { HeartIcon } from "./icons";

export default function TopicCta({ message }: { message: string }) {
  return (
    <section className="cta">
      <Reveal className="cta-in">
        <span className="eyebrow">Support the work</span>
        <h2>
          Stand with the women who <em>lead this change.</em>
        </h2>
        <p>{message}</p>
        <div className="ctas">
          <SupportAction type="donate" className="btn btn--pink">
            Donate now
            <HeartIcon />
          </SupportAction>
          <SupportAction type="partner" className="btn btn--ghost">
            Partner with us
          </SupportAction>
        </div>
        <div className="cta-links">
          <Link href="/support-us">
            Ways to support Fountain of Hope&apos;s work in Garissa
          </Link>
          <Link href="/contact">Contact our Garissa and Nairobi offices</Link>
        </div>
      </Reveal>
    </section>
  );
}