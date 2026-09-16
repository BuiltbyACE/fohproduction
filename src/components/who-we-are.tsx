import Image from "next/image";
import Reveal from "./reveal";

export default function WhoWeAre() {
  return (
    <section className="os-section" id="who-we-are">
      <div className="wrap os-wwa-grid">
        <Reveal className="os-wwa-art">
          <Image
            src="/images/GqpdGYJXcAAivls.jpg"
            alt="Fountain of Hope — Garissa County, Kenya"
            fill
            sizes="45vw"
            loading="lazy"
          />
          <div className="cap">Fountain of Hope · Garissa, Kenya</div>
        </Reveal>

        <Reveal className="os-wwa-txt">
          <span className="eyebrow eyebrow--paper">Who we are</span>
          <h2>
            Rooted in Garissa. <em>Built with communities.</em>
          </h2>
          <p>
            Fountain of Hope is a community-rooted organization committed to
            improving the livelihoods and well-being of vulnerable communities
            through strategic partnerships and sustainable programs.
          </p>

          <div className="os-vm">
            <div className="vm">
              <span className="k">Our vision</span>
              <p className="q">
                “A healthy, literate and wealthy Garissa community”
              </p>
            </div>
            <div className="vm vm--dark">
              <span className="k">Our mission</span>
              <p className="q">
                “To improve livelihoods and well-being of the vulnerable
                community members through strategic partnerships and
                implementation of sustainable programs.”
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}