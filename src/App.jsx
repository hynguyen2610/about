import React, { useEffect, useRef, useState } from "react";
import { skillCards, timelineItems } from "./data";

function useHashPage() {
  const getPage = () => {
    const hash = window.location.hash.replace("#", "");
    return hash === "timeline" ? "timeline" : "landing";
  };

  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (nextPage) => {
    window.location.hash = nextPage;
  };

  return [page, navigate];
}

function parseTimelineRange(rangeLabel) {
  const [startRaw = "", endRaw = ""] = rangeLabel.split("—").map((part) => part.trim());

  const parsePoint = (value, fallbackMonth) => {
    if (!value) return Number.NEGATIVE_INFINITY;
    if (value.toLowerCase() === "present") return Number.POSITIVE_INFINITY;

    const [monthPart, yearPart] = value.includes("/") ? value.split("/") : [String(fallbackMonth), value];
    const month = Number(monthPart);
    const year = Number(yearPart);

    if (!Number.isFinite(year)) return Number.NEGATIVE_INFINITY;
    return year * 100 + (Number.isFinite(month) ? month : fallbackMonth);
  };

  return {
    start: parsePoint(startRaw, 1),
    end: parsePoint(endRaw, 12),
  };
}

function sortTimelineItems(items, sortOrder) {
  const direction = sortOrder === "oldest" ? 1 : -1;

  return [...items].sort((left, right) => {
    const leftRange = parseTimelineRange(left.year);
    const rightRange = parseTimelineRange(right.year);

    if (leftRange.end !== rightRange.end) {
      return (leftRange.end - rightRange.end) * direction;
    }

    if (leftRange.start !== rightRange.start) {
      return (leftRange.start - rightRange.start) * direction;
    }

    return left.company.localeCompare(right.company) * direction;
  });
}

function useRevealOnIntersect(selector, trigger) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      selector.includes("timeline")
        ? { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        : { threshold: 0.15 },
    );

    elements.forEach((element, index) => {
      element.classList.remove("visible");
      if (selector.includes("timeline")) {
        element.style.transitionDelay = `${index * 0.05}s`;
      }
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [selector, trigger]);
}

function Nav({ page }) {
  return (
    <nav>
      <div className="nav-logo">
        port<span>.</span>folio
      </div>
      <div className="nav-links">
        <a href="#landing" className={page === "landing" ? "active" : ""}>
          Home
        </a>
        <a href="#timeline" className={page === "timeline" ? "active" : ""}>
          Storymap
        </a>
      </div>
    </nav>
  );
}

function LandingPage({ onNavigate, skillsRef, heroRef }) {
  return (
    <main className="page-shell page-enter">
      <section ref={heroRef} className="hero">
        <div className="hero-tag">Available for opportunities</div>
        <h1 className="hero-title">
          Building at the
          <br />
          intersection of
          <br />
          <em>code1 &amp; craft</em>
        </h1>
        <p className="hero-sub">
          Software engineer, DevOps practitioner, and product manager — bridging the gap between
          what&apos;s built, how it ships, and why it matters.
        </p>
        <div className="hero-cta">
          <button className="btn" onClick={() => onNavigate("timeline")}>
            <span>View Storymap</span>
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => skillsRef.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>Explore Skills</span>
          </button>
        </div>
      </section>

      <section ref={skillsRef} className="skills-section">
        <div className="section-header">
          <div>
            <div className="section-label">Core Competencies</div>
            <h2 className="section-title">
              Three disciplines,
              <br />
              one mindset
            </h2>
          </div>
          <div className="section-count">03 domains</div>
        </div>

        <div className="skills-grid">
          {skillCards.map((card) => (
            <article key={card.title} className="skill-card fade-in">
              <div className="card-icon">{card.icon}</div>
              <div className="card-role">{card.role}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.description}</p>
              <div className="card-tags">
                {card.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="card-metric">
                {card.metrics.map((metric) => (
                  <div key={metric.label} className="metric-item">
                    <div className="metric-val">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function TimelinePage({ sortOrder, onSortChange }) {
  const sortedTimelineItems = sortTimelineItems(timelineItems, sortOrder);

  return (
    <main className="page-shell page-enter">
      <section className="timeline-page">
        <div className="timeline-header">
          <div>
            <div className="section-label">Skill Storymap</div>
            <h1>
              The journey
              <br />
              so <em>far</em>
            </h1>
            <p>
              A timeline of roles, milestones, and the skills that defined each chapter. Every era
              built the foundation for the next.
            </p>
          </div>

          <div className="timeline-sort" aria-label="Sort timeline">
            <button
              type="button"
              className={`timeline-sort-btn ${sortOrder === "newest" ? "active" : ""}`}
              onClick={() => onSortChange("newest")}
            >
              Newest first
            </button>
            <button
              type="button"
              className={`timeline-sort-btn ${sortOrder === "oldest" ? "active" : ""}`}
              onClick={() => onSortChange("oldest")}
            >
              Oldest first
            </button>
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />
          {sortedTimelineItems.map((item) => (
            <article key={`${item.company}-${item.year}`} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-card">
                <div className="timeline-role">
                  {item.role}
                  {item.badges.map((badge) => (
                    <span key={badge.label} className={`cat-badge cat-${badge.variant}`}>
                      {badge.label}
                    </span>
                  ))}
                </div>
                <p className="timeline-company">{item.company}</p>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-skills">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [page, navigate] = useHashPage();
  const [timelineSort, setTimelineSort] = useState("newest");
  const skillsRef = useRef(null);
  const heroRef = useRef(null);

  useRevealOnIntersect(".fade-in", page);
  useRevealOnIntersect(".timeline-item", `${page}-${timelineSort}`);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    if (page !== "landing") return undefined;

    const onMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 30;
      const y = (event.clientY / window.innerHeight - 0.5) * 30;
      heroRef.current?.style.setProperty("--mx", `${x}px`);
      heroRef.current?.style.setProperty("--my", `${y}px`);
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [page]);

  return (
    <div className="app-shell">
      <Nav page={page} />
      {page === "timeline" ? (
        <TimelinePage sortOrder={timelineSort} onSortChange={setTimelineSort} />
      ) : (
        <LandingPage onNavigate={navigate} skillsRef={skillsRef} heroRef={heroRef} />
      )}
    </div>
  );
}
