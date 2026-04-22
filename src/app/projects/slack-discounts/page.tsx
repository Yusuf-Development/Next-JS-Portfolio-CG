/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Slack Pricing & Growth Experiment | Yusuf Musa",
  description:
    "An AI-powered solution to optimize pricing strategies at Slack, increasing conversion rates through personalized discount offers.",
};

export default function SlackDiscountsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Banner */}
      <section
        className="relative w-full"
        style={{ backgroundColor: "rgb(0, 95, 158)" }}
      >
        <div className="absolute top-0 left-0 z-10 w-full pt-5 px-[15px]">
          <div className="mx-auto flex max-w-[1280px] items-center">
            <Link href="/" className="no-underline">
              <img
                src="/images/logo-white-4x.png"
                alt="Yusuf Musa"
                className="h-[90px] w-auto"
              />
            </Link>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
          <div className="flex flex-1 flex-col justify-end px-8 pb-10 pt-36">
            <span className="mb-3 text-[14px] font-semibold uppercase tracking-[0.5px] text-white">
              Growth Analysis
            </span>
            <h1 className="m-0 text-[36px] font-semibold leading-[44px] text-white md:text-[48px] md:leading-[60px]">
              Slack Pricing &amp; Growth Experiment
            </h1>
          </div>
          <div className="hidden md:block md:w-[50%]">
            <img
              src="/images/slack-discounts-banner.jpg"
              alt="Slack Pricing & Growth Experiment"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Metrics Strip */}
      <section style={{ backgroundColor: "#F5F5F7" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between px-8 py-8">
          {[
            { value: "3", label: "Experiment Phases" },
            { value: "A/B", label: "Testing Framework" },
            { value: "ML", label: "Optimized Pricing" },
            { value: "+%", label: "Conversion Lift" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-6 py-2">
              <span
                className="text-[36px] font-bold"
                style={{ color: "rgb(0, 95, 158)" }}
              >
                {stat.value}
              </span>
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#363638]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Article Body */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex items-center gap-6 border-b border-[#EBEBF0] py-6">
            <span className="text-[16px] text-black">By Yusuf Musa</span>
          </div>

          <div className="flex flex-col gap-12 py-10 md:flex-row">
            {/* Main content */}
            <div className="flex-1">
              <div
                className="flex flex-col gap-6"
                style={{ fontSize: "16px", lineHeight: "24px", color: "rgb(0, 0, 0)" }}
              >
                {/* Overview */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  Unlocking Growth through Data-Driven Discounts
                </h2>
                <p>
                  As a member of Slack&apos;s growth team, I spearheaded the development of
                  ML-Discount &mdash; an AI-powered solution to optimize pricing strategies.
                  The goal was simple yet impactful: increase conversion rates by matching
                  users with personalized discount offers.
                </p>

                {/* ── Pipeline Diagram ── */}
                <div className="my-6 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-8">
                  <p className="m-0 mb-6 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Project Pipeline
                  </p>
                  <div className="flex flex-col items-center gap-0 md:flex-row md:items-start md:gap-0">
                    {/* Phase 1 */}
                    <div className="flex flex-1 flex-col items-center text-center">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-full text-[20px] font-bold text-white"
                        style={{ backgroundColor: "rgb(0, 95, 158)" }}
                      >
                        1
                      </div>
                      <p className="mt-3 mb-1 text-[14px] font-bold text-[#363638]">Collect</p>
                      <p className="m-0 text-[12px] text-[#888]">A/B test random<br />discount amounts</p>
                    </div>
                    {/* Arrow */}
                    <div className="hidden md:flex items-center pt-7">
                      <div className="h-[2px] w-12" style={{ backgroundColor: "rgb(0, 156, 220)" }} />
                      <div
                        className="h-0 w-0"
                        style={{
                          borderTop: "6px solid transparent",
                          borderBottom: "6px solid transparent",
                          borderLeft: "8px solid rgb(0, 156, 220)",
                        }}
                      />
                    </div>
                    <div className="flex h-8 items-center md:hidden">
                      <div className="w-[2px] h-full" style={{ backgroundColor: "rgb(0, 156, 220)" }} />
                    </div>
                    {/* Phase 2 */}
                    <div className="flex flex-1 flex-col items-center text-center">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-full text-[20px] font-bold text-white"
                        style={{ backgroundColor: "rgb(0, 156, 220)" }}
                      >
                        2
                      </div>
                      <p className="mt-3 mb-1 text-[14px] font-bold text-[#363638]">Train</p>
                      <p className="m-0 text-[12px] text-[#888]">Build ML models to<br />predict optimal discount</p>
                    </div>
                    {/* Arrow */}
                    <div className="hidden md:flex items-center pt-7">
                      <div className="h-[2px] w-12" style={{ backgroundColor: "rgb(0, 156, 220)" }} />
                      <div
                        className="h-0 w-0"
                        style={{
                          borderTop: "6px solid transparent",
                          borderBottom: "6px solid transparent",
                          borderLeft: "8px solid rgb(0, 156, 220)",
                        }}
                      />
                    </div>
                    <div className="flex h-8 items-center md:hidden">
                      <div className="w-[2px] h-full" style={{ backgroundColor: "rgb(0, 156, 220)" }} />
                    </div>
                    {/* Phase 3 */}
                    <div className="flex flex-1 flex-col items-center text-center">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-full text-[20px] font-bold text-white"
                        style={{ backgroundColor: "#B42573" }}
                      >
                        3
                      </div>
                      <p className="mt-3 mb-1 text-[14px] font-bold text-[#363638]">Deploy</p>
                      <p className="m-0 text-[12px] text-[#888]">Release to production<br />&amp; validate with A/B tests</p>
                    </div>
                  </div>
                </div>

                {/* Phase 1 */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  1. Data Collection
                </h2>
                <p>
                  The project began with systematic A/B testing of random discount amounts
                  to gather insights into user behavior and price sensitivity. This
                  controlled experimentation phase established the baseline data needed to
                  understand how different discount levels influence conversion across
                  user segments.
                </p>

                {/* ── A/B Test Design Diagram ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-5 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    A/B Test Design
                  </p>
                  <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                    {/* Control */}
                    <div className="flex-1 rounded border-2 border-dashed border-[#ccc] bg-white p-5 text-center">
                      <p className="m-0 mb-2 text-[11px] font-bold uppercase tracking-widest text-[#999]">Control</p>
                      <p className="m-0 text-[28px] font-bold text-[#363638]">Random</p>
                      <p className="m-0 text-[13px] text-[#888]">Uniform discount distribution</p>
                      <div className="mx-auto mt-4 flex justify-center gap-1">
                        {[15, 25, 10, 30, 20, 5, 35].map((h, i) => (
                          <div
                            key={i}
                            className="w-5 rounded-t"
                            style={{ height: `${h}px`, backgroundColor: "#ccc" }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* vs */}
                    <div className="flex items-center justify-center">
                      <span className="text-[20px] font-bold text-[#999]">vs</span>
                    </div>
                    {/* Treatment */}
                    <div className="flex-1 rounded border-2 bg-white p-5 text-center" style={{ borderColor: "rgb(0, 156, 220)" }}>
                      <p className="m-0 mb-2 text-[11px] font-bold uppercase tracking-widest" style={{ color: "rgb(0, 156, 220)" }}>Treatment</p>
                      <p className="m-0 text-[28px] font-bold" style={{ color: "rgb(0, 95, 158)" }}>ML-Optimized</p>
                      <p className="m-0 text-[13px] text-[#888]">Personalized per user segment</p>
                      <div className="mx-auto mt-4 flex justify-center gap-1">
                        {[10, 18, 32, 38, 28, 15, 8].map((h, i) => (
                          <div
                            key={i}
                            className="w-5 rounded-t"
                            style={{ height: `${h}px`, backgroundColor: "rgb(0, 156, 220)" }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  2. Model Training
                </h2>
                <p>
                  Using the collected data, I built and evaluated various ML models to
                  predict the optimal discount for each user. After rigorous
                  experimentation, I arrived at an algorithm that outperformed random
                  discounts &mdash; delivering the right discount, to the right customer,
                  at the right time.
                </p>

                {/* ── System Architecture Diagram ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-5 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    ML-Discount System Architecture
                  </p>
                  <div className="flex flex-col items-center gap-3">
                    {/* Input layer */}
                    <div className="flex w-full flex-wrap justify-center gap-3">
                      {["User Profile", "Engagement History", "Price Sensitivity", "Segment"].map((label) => (
                        <div
                          key={label}
                          className="rounded px-4 py-2 text-center text-[12px] font-semibold text-white"
                          style={{ backgroundColor: "rgb(0, 95, 158)" }}
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                    {/* Arrow down */}
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                      <path d="M10 0 L10 18 M4 14 L10 20 L16 14" stroke="rgb(0,156,220)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* Model box */}
                    <div
                      className="w-full max-w-sm rounded-lg border-2 px-6 py-4 text-center"
                      style={{ borderColor: "rgb(0, 156, 220)", backgroundColor: "rgba(0, 156, 220, 0.06)" }}
                    >
                      <p className="m-0 text-[11px] font-bold uppercase tracking-widest" style={{ color: "rgb(0, 156, 220)" }}>
                        ML Engine
                      </p>
                      <p className="m-0 mt-1 text-[18px] font-bold text-[#363638]">
                        Discount Predictor
                      </p>
                      <p className="m-0 mt-1 text-[12px] text-[#888]">
                        Candidate models evaluated &amp; best selected
                      </p>
                    </div>
                    {/* Arrow down */}
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                      <path d="M10 0 L10 18 M4 14 L10 20 L16 14" stroke="rgb(0,156,220)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* Output layer */}
                    <div className="flex w-full flex-wrap justify-center gap-3">
                      {["Optimal Discount %", "Expected Conversion", "Revenue Impact"].map((label) => (
                        <div
                          key={label}
                          className="rounded px-4 py-2 text-center text-[12px] font-semibold text-white"
                          style={{ backgroundColor: "#B42573" }}
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  3. Deployment &amp; Validation
                </h2>
                <p>
                  ML-Discount was released into production. Through continued A/B testing,
                  it proved successful in boosting conversions and unlocking new revenue
                  opportunities. The system demonstrated measurable lift over the baseline
                  random discount strategy.
                </p>

                {/* ── Conversion Lift Chart ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-5 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Conversion Rate Comparison
                  </p>
                  <div className="flex flex-col gap-5">
                    {/* Baseline bar */}
                    <div className="flex items-center gap-4">
                      <span className="w-28 shrink-0 text-right text-[13px] font-semibold text-[#363638]">
                        Baseline
                      </span>
                      <div className="relative flex-1">
                        <div className="h-10 rounded" style={{ width: "45%", backgroundColor: "#ccc" }} />
                        <span className="absolute left-[46%] top-1/2 -translate-y-1/2 text-[13px] font-bold text-[#888]">
                          Random discounts
                        </span>
                      </div>
                    </div>
                    {/* ML bar */}
                    <div className="flex items-center gap-4">
                      <span className="w-28 shrink-0 text-right text-[13px] font-semibold" style={{ color: "rgb(0, 95, 158)" }}>
                        ML-Discount
                      </span>
                      <div className="relative flex-1">
                        <div className="h-10 rounded" style={{ width: "72%", backgroundColor: "rgb(0, 156, 220)" }} />
                        <span className="absolute left-[73%] top-1/2 -translate-y-1/2 text-[13px] font-bold" style={{ color: "rgb(0, 95, 158)" }}>
                          Personalized pricing
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 19V5M5 12l7-7 7 7" stroke="rgb(0,156,220)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[14px] font-bold" style={{ color: "rgb(0, 156, 220)" }}>
                      Significant conversion lift over baseline
                    </span>
                  </div>
                </div>

                {/* Impact */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  4. Impact &amp; Takeaways
                </h2>
                <p>
                  At its core, ML-Discount illuminated how data and AI can be leveraged to
                  understand customers and grow business. The project sharpened my instincts
                  for identifying high-impact data solutions that merge analysis with action.
                  Most importantly, it exemplified my passion for translating numbers into
                  narratives that engage and compel.
                </p>

                {/* ── Impact Cards ── */}
                <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[
                    {
                      icon: (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 19V5M5 12l7-7 7 7" stroke="rgb(0,156,220)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "Conversion Lift",
                      desc: "Personalized discounts outperformed random baseline",
                    },
                    {
                      icon: (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="rgb(0,95,158)" strokeWidth="2" />
                          <path d="M12 7v5l3 3" stroke="rgb(0,95,158)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "End-to-End Ownership",
                      desc: "Data collection through production deployment",
                    },
                    {
                      icon: (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M9 11l3 3L22 4" stroke="#B42573" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="#B42573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "Rigorous Validation",
                      desc: "A/B tested at every stage of the pipeline",
                    },
                    {
                      icon: (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="rgb(0,156,220)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "New Revenue",
                      desc: "Unlocked growth opportunities through ML optimization",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="flex gap-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-5"
                    >
                      <div className="shrink-0 pt-0.5">{card.icon}</div>
                      <div>
                        <p className="m-0 text-[15px] font-bold text-[#363638]">{card.title}</p>
                        <p className="m-0 mt-1 text-[13px] text-[#888]">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full md:w-[320px] md:shrink-0">
              <div className="border p-6" style={{ borderColor: "#EBEBF0" }}>
                <h3
                  className="m-0 mb-4 text-[22px] font-semibold"
                  style={{ color: "rgb(0, 95, 158)" }}
                >
                  Project Details
                </h3>
                <ul className="flex flex-col gap-3 list-none m-0 p-0 text-[14px]">
                  <li>
                    <strong>Team:</strong> Slack Growth
                  </li>
                  <li>
                    <strong>Role:</strong> ML Engineer / Data Scientist
                  </li>
                  <li>
                    <strong>Approach:</strong> A/B Testing, ML-based Pricing Optimization
                  </li>
                  <li>
                    <strong>Phases:</strong> Data Collection, Model Training, Deployment
                  </li>
                  <li>
                    <strong>Outcome:</strong> Increased conversions, unlocked new revenue
                  </li>
                </ul>
              </div>

              {/* Mini decision flow */}
              <div className="mt-6 border p-6" style={{ borderColor: "#EBEBF0" }}>
                <h3
                  className="m-0 mb-4 text-[16px] font-semibold uppercase tracking-[0.5px]"
                  style={{ color: "rgb(0, 95, 158)" }}
                >
                  Decision Logic
                </h3>
                <div className="flex flex-col items-center gap-2 text-[12px]">
                  <div className="w-full rounded bg-[#005F9E] px-3 py-2 text-center font-semibold text-white">
                    New user arrives
                  </div>
                  <div className="h-4 w-[2px]" style={{ backgroundColor: "#ccc" }} />
                  <div className="w-full rounded px-3 py-2 text-center font-semibold text-white" style={{ backgroundColor: "rgb(0, 156, 220)" }}>
                    Classify user segment
                  </div>
                  <div className="h-4 w-[2px]" style={{ backgroundColor: "#ccc" }} />
                  <div className="w-full rounded px-3 py-2 text-center font-semibold text-white" style={{ backgroundColor: "rgb(0, 156, 220)" }}>
                    Predict optimal discount
                  </div>
                  <div className="h-4 w-[2px]" style={{ backgroundColor: "#ccc" }} />
                  <div className="w-full rounded px-3 py-2 text-center font-semibold text-white" style={{ backgroundColor: "#B42573" }}>
                    Serve personalized offer
                  </div>
                  <div className="h-4 w-[2px]" style={{ backgroundColor: "#ccc" }} />
                  <div className="w-full rounded border-2 border-dashed border-[#ccc] bg-white px-3 py-2 text-center font-semibold text-[#363638]">
                    Measure &amp; iterate
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-[#EBEBF0] pt-6">
                <h3
                  className="m-0 mb-4 text-[16px] font-semibold uppercase tracking-[0.5px]"
                  style={{ color: "rgb(0, 95, 158)" }}
                >
                  Other Projects
                </h3>
                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                  <li>
                    <Link
                      href="/projects/customer-churn"
                      className="text-[14px] font-semibold no-underline hover:underline"
                      style={{ color: "rgb(0, 95, 158)" }}
                    >
                      Customer Churn Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/rice-classification"
                      className="text-[14px] font-semibold no-underline hover:underline"
                      style={{ color: "rgb(0, 95, 158)" }}
                    >
                      Rice Variety Classification
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[14px] font-semibold no-underline hover:underline"
                      style={{ color: "rgb(0, 95, 158)" }}
                    >
                      Headline A/B Test Analysis
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
