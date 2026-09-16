"use client";

import { useState } from "react";
import Reveal from "./reveal";
import {
  PORTFOLIO_DATA,
  PORTFOLIO_CATEGORIES,
  type PortfolioCategory,
} from "@/lib/portfolio-data";

const ALL = "All";

export default function TrackRecord() {
  const [active, setActive] = useState<string>(ALL);

  const filtered =
    active === ALL
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((e) =>
          e.category.includes(active as PortfolioCategory)
        );

  return (
    <section className="os-section os-section--paper" id="track-record">
      <div className="wrap">
        <Reveal className="os-sechead">
          <span className="eyebrow eyebrow--paper">Our track record</span>
          <h2>
            From commitment <em>to action.</em>
          </h2>
          <p>
            A documented history of interventions, partnerships and community
            impact — grounded in the communities of Garissa County.
          </p>
        </Reveal>

        <Reveal className="tr-filters" aria-label="Filter by category">
          <button
            className={`tr-filter${active === ALL ? " tr-filter--on" : ""}`}
            onClick={() => setActive(ALL)}
            aria-pressed={active === ALL}
          >
            All
          </button>
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`tr-filter${active === cat ? " tr-filter--on" : ""}`}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="tr-grid">
          {filtered.map((entry) => (
            <Reveal className="tr-card" key={entry.id}>
              <div className="tr-card-head">
                <span className="tr-date">{entry.date}</span>
                <div className="tr-tags">
                  {entry.category.map((c) => (
                    <span className="tr-tag" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="tr-title">{entry.title}</h3>
              <div className="tr-meta">
                {entry.areaOfInterest.trim() !== "" && (
                  <div className="tr-meta-row">
                    <span className="tr-meta-label">Area of interest</span>
                    <span className="tr-meta-value">
                      {entry.areaOfInterest}
                    </span>
                  </div>
                )}
                {entry.place.trim() !== "" && (
                  <div className="tr-meta-row">
                    <span className="tr-meta-label">Place</span>
                    <span className="tr-meta-value">{entry.place}</span>
                  </div>
                )}
              </div>
              <div className="tr-impact">
                <span className="tr-impact-label">Impact / Reach</span>
                <p>{entry.impact}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="tr-empty">
            No interventions found for this category.
          </p>
        )}
      </div>
    </section>
  );
}
