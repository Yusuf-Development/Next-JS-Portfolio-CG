/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Headline A/B Test Analysis | Yusuf Musa",
  description:
    "Analysis of 30,000+ A/B headline experiments from the Upworthy Research Archive examining factors that drive user engagement and experimental reliability.",
};

export default function HeadlineABTestPage() {
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
              Data Science
            </span>
            <h1 className="m-0 text-[36px] font-semibold leading-[44px] text-white md:text-[48px] md:leading-[60px]">
              Headline A/B Test Analysis
            </h1>
          </div>
          <div className="hidden md:block md:w-[50%]">
            <img
              src="/images/up_worthy_experiment.jpg"
              alt="Headline A/B Test Analysis"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Metrics Strip */}
      <section style={{ backgroundColor: "#F5F5F7" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between px-8 py-8">
          {[
            { value: "30K+", label: "A/B Experiments" },
            { value: "2013-15", label: "Time Period" },
            { value: "6", label: "Research Questions" },
            { value: "CTR", label: "Primary Metric" },
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
                  Overview
                </h2>
                <p>
                  This project analyzes 30,000+ A/B headline experiments from the Upworthy
                  Research Archive (2013&ndash;2015) to determine what drives user engagement
                  and validate experimental reliability. Each experiment tested multiple
                  headline variations &mdash; sometimes including image changes &mdash; and
                  measured impressions, clicks, and click-through rate (CTR).
                </p>
                <p>
                  The goal: identify headline features that genuinely boost engagement, and
                  distinguish breakthrough insights from statistical anomalies.
                </p>

                {/* ── Analysis Pipeline Diagram ── */}
                <div className="my-6 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-8">
                  <p className="m-0 mb-6 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Analysis Pipeline
                  </p>
                  <div className="flex flex-col items-center gap-0 md:flex-row md:gap-0">
                    {[
                      { num: "1", color: "rgb(0, 95, 158)", title: "Ingest", sub: "30K+ experiments\nfrom archive" },
                      { num: "2", color: "rgb(0, 156, 220)", title: "Engineer", sub: "Sentiment, length,\nquestion detection" },
                      { num: "3", color: "rgb(0, 156, 220)", title: "Analyze", sub: "Statistical tests\n& comparisons" },
                      { num: "4", color: "#B42573", title: "Validate", sub: "Replication across\nexperiment types" },
                    ].map((phase, i) => (
                      <div key={phase.num} className="flex items-center">
                        <div className="flex flex-col items-center text-center" style={{ minWidth: "120px" }}>
                          <div
                            className="flex h-14 w-14 items-center justify-center rounded-full text-[18px] font-bold text-white"
                            style={{ backgroundColor: phase.color }}
                          >
                            {phase.num}
                          </div>
                          <p className="mt-2 mb-0 text-[13px] font-bold text-[#363638]">{phase.title}</p>
                          <p className="m-0 whitespace-pre-line text-[11px] text-[#888]">{phase.sub}</p>
                        </div>
                        {i < 3 && (
                          <div className="hidden md:flex items-center px-1" style={{ marginTop: "-24px" }}>
                            <div className="h-[2px] w-8" style={{ backgroundColor: "rgb(0, 156, 220)" }} />
                            <div
                              className="h-0 w-0"
                              style={{
                                borderTop: "5px solid transparent",
                                borderBottom: "5px solid transparent",
                                borderLeft: "7px solid rgb(0, 156, 220)",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Research Questions */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  Research Questions
                </h2>
                <p>
                  Six hypotheses were tested against the dataset to isolate which headline
                  characteristics drive measurable engagement differences:
                </p>

                {/* ── Hypothesis Grid ── */}
                <div className="my-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {[
                    { id: "H1", q: "Do headlines with numbers outperform those without?", feature: "Numeric indicators" },
                    { id: "H2", q: "Do question-formatted headlines increase CTR?", feature: "Question detection" },
                    { id: "H3", q: "Is there an optimal headline length for engagement?", feature: "Character & word count" },
                    { id: "H4", q: "Do emotional headlines outperform neutral ones?", feature: "Sentiment scoring" },
                    { id: "H5", q: "Does text alone drive performance when images are identical?", feature: "Image control groups" },
                    { id: "H6", q: "Do exploratory findings replicate in confirmatory experiments?", feature: "Replication testing" },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-4"
                    >
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded text-[13px] font-bold text-white"
                        style={{ backgroundColor: "rgb(0, 95, 158)" }}
                      >
                        {item.id}
                      </div>
                      <div>
                        <p className="m-0 text-[14px] font-semibold text-[#363638]">{item.q}</p>
                        <p className="m-0 mt-1 text-[12px] text-[#888]">{item.feature}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Engineering */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  Feature Engineering
                </h2>
                <p>
                  Raw headline text was transformed into structured analytical features
                  using NLP techniques. Each headline was scored and categorized across
                  multiple dimensions to enable systematic comparison.
                </p>

                {/* ── Feature Engineering Diagram ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-5 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Feature Extraction Pipeline
                  </p>
                  <div className="flex flex-col items-center gap-3">
                    {/* Input */}
                    <div
                      className="w-full max-w-md rounded px-5 py-3 text-center"
                      style={{ backgroundColor: "rgb(0, 95, 158)" }}
                    >
                      <p className="m-0 text-[11px] font-bold uppercase tracking-widest text-white/70">Raw Input</p>
                      <p className="m-0 mt-1 text-[16px] font-semibold text-white">
                        &ldquo;10 Things That Will Change How You See the World&rdquo;
                      </p>
                    </div>
                    {/* Arrow */}
                    <svg width="20" height="20" viewBox="0 0 20 24" fill="none">
                      <path d="M10 0 L10 18 M4 14 L10 20 L16 14" stroke="rgb(0,156,220)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* Features extracted */}
                    <div className="flex w-full flex-wrap justify-center gap-2">
                      {[
                        { label: "Has Number", val: "True", color: "rgb(0, 156, 220)" },
                        { label: "Is Question", val: "False", color: "#888" },
                        { label: "Word Count", val: "10", color: "rgb(0, 156, 220)" },
                        { label: "Char Length", val: "49", color: "rgb(0, 156, 220)" },
                        { label: "Sentiment", val: "+0.12", color: "rgb(0, 156, 220)" },
                        { label: "Polarity", val: "Positive", color: "#B42573" },
                      ].map((f) => (
                        <div
                          key={f.label}
                          className="flex flex-col items-center rounded border border-[#EBEBF0] bg-white px-4 py-2"
                          style={{ minWidth: "100px" }}
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#999]">{f.label}</span>
                          <span className="mt-1 text-[16px] font-bold" style={{ color: f.color }}>{f.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Statistical Analysis */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  Statistical Analysis
                </h2>
                <p>
                  Each hypothesis was tested using statistical methods from SciPy. The
                  analysis compared CTR distributions between headline groups, controlling
                  for sample size and multiple testing. Results were validated through
                  replication across exploratory and confirmatory experiment subsets.
                </p>

                {/* ── Exploratory vs Confirmatory Diagram ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-5 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Validation Framework
                  </p>
                  <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                    {/* Exploratory */}
                    <div className="flex-1 rounded border-2 border-dashed border-[#ccc] bg-white p-5">
                      <p className="m-0 mb-1 text-center text-[11px] font-bold uppercase tracking-widest text-[#999]">Phase A</p>
                      <p className="m-0 text-center text-[22px] font-bold text-[#363638]">Exploratory</p>
                      <p className="m-0 mt-2 text-center text-[13px] text-[#888]">
                        Initial hypothesis testing on the full dataset to identify patterns
                      </p>
                      <div className="mx-auto mt-4 flex justify-center gap-2">
                        <span className="rounded bg-[#005F9E] px-2 py-1 text-[10px] font-bold text-white">Generate</span>
                        <span className="rounded bg-[#005F9E] px-2 py-1 text-[10px] font-bold text-white">Test</span>
                        <span className="rounded bg-[#005F9E] px-2 py-1 text-[10px] font-bold text-white">Signal?</span>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="flex items-center justify-center">
                      <div className="hidden md:flex items-center">
                        <div className="h-[2px] w-8" style={{ backgroundColor: "rgb(0, 156, 220)" }} />
                        <div
                          className="h-0 w-0"
                          style={{
                            borderTop: "6px solid transparent",
                            borderBottom: "6px solid transparent",
                            borderLeft: "8px solid rgb(0, 156, 220)",
                          }}
                        />
                      </div>
                      <svg className="md:hidden" width="20" height="28" viewBox="0 0 20 28" fill="none">
                        <path d="M10 0 L10 22 M4 18 L10 24 L16 18" stroke="rgb(0,156,220)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {/* Confirmatory */}
                    <div className="flex-1 rounded border-2 bg-white p-5" style={{ borderColor: "#B42573" }}>
                      <p className="m-0 mb-1 text-center text-[11px] font-bold uppercase tracking-widest" style={{ color: "#B42573" }}>Phase B</p>
                      <p className="m-0 text-center text-[22px] font-bold text-[#363638]">Confirmatory</p>
                      <p className="m-0 mt-2 text-center text-[13px] text-[#888]">
                        Replication testing on held-out experiments to validate findings
                      </p>
                      <div className="mx-auto mt-4 flex justify-center gap-2">
                        <span className="rounded px-2 py-1 text-[10px] font-bold text-white" style={{ backgroundColor: "#B42573" }}>Replicate</span>
                        <span className="rounded px-2 py-1 text-[10px] font-bold text-white" style={{ backgroundColor: "#B42573" }}>Confirm</span>
                        <span className="rounded px-2 py-1 text-[10px] font-bold text-white" style={{ backgroundColor: "#B42573" }}>Robust?</span>
                      </div>
                    </div>
                  </div>
                  <p className="m-0 mt-5 text-center text-[12px] font-semibold" style={{ color: "rgb(0, 95, 158)" }}>
                    Only findings that survive both phases are reported as reliable
                  </p>
                </div>

                {/* Headline Feature Comparison */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  Headline Feature Comparison
                </h2>
                <p>
                  The analysis compared CTR performance across headline characteristics.
                  Each feature was isolated to measure its independent effect on engagement.
                </p>

                {/* ── CTR Comparison Bars ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-5 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    CTR by Headline Feature
                  </p>
                  <div className="flex flex-col gap-4">
                    {[
                      { feature: "Contains Number", a: { label: "Yes", pct: 62 }, b: { label: "No", pct: 55 } },
                      { feature: "Question Format", a: { label: "Question", pct: 58 }, b: { label: "Declarative", pct: 57 } },
                      { feature: "Emotional Tone", a: { label: "Emotional", pct: 64 }, b: { label: "Neutral", pct: 50 } },
                      { feature: "Headline Length", a: { label: "Optimal (8-12 words)", pct: 66 }, b: { label: "Short / Long", pct: 48 } },
                    ].map((row) => (
                      <div key={row.feature}>
                        <p className="m-0 mb-2 text-[13px] font-bold text-[#363638]">{row.feature}</p>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-3">
                            <span className="w-32 shrink-0 text-right text-[12px] text-[#888]">{row.a.label}</span>
                            <div className="flex-1">
                              <div
                                className="h-6 rounded"
                                style={{ width: `${row.a.pct}%`, backgroundColor: "rgb(0, 156, 220)" }}
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-32 shrink-0 text-right text-[12px] text-[#888]">{row.b.label}</span>
                            <div className="flex-1">
                              <div
                                className="h-6 rounded"
                                style={{ width: `${row.b.pct}%`, backgroundColor: "#ccc" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="m-0 mt-4 text-center text-[11px] italic text-[#999]">
                    Bar widths represent relative CTR performance (illustrative)
                  </p>
                </div>

                {/* Key Objectives */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  Key Objectives &amp; Outcomes
                </h2>

                {/* ── Outcome Cards ── */}
                <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {[
                    {
                      icon: (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" stroke="rgb(0,156,220)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "Maximize Engagement",
                      desc: "Identify headline features that genuinely boost CTR across 30K+ experiments",
                    },
                    {
                      icon: (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="rgb(0,95,158)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M22 4L12 14.01l-3-3" stroke="rgb(0,95,158)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "Separate Signal from Noise",
                      desc: "Distinguish genuine insights from statistical anomalies and data artifacts",
                    },
                    {
                      icon: (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M9 11l3 3L22 4" stroke="#B42573" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="#B42573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "Validate Reliability",
                      desc: "Confirm findings replicate across exploratory and confirmatory experiment sets",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="flex flex-col items-center rounded border border-[#EBEBF0] bg-[#FAFAFA] p-5 text-center"
                    >
                      <div className="mb-3">{card.icon}</div>
                      <p className="m-0 text-[15px] font-bold text-[#363638]">{card.title}</p>
                      <p className="m-0 mt-2 text-[13px] text-[#888]">{card.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Dataset & Tools */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  Dataset &amp; Tools
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-[14px]">
                    <thead>
                      <tr style={{ backgroundColor: "rgb(0, 95, 158)" }}>
                        <th className="border border-[#EBEBF0] px-4 py-2 text-left text-white">Attribute</th>
                        <th className="border border-[#EBEBF0] px-4 py-2 text-left text-white">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-[#EBEBF0] px-4 py-2 font-semibold">Source</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">Upworthy Research Archive</td>
                      </tr>
                      <tr className="bg-[#F5F5F5]">
                        <td className="border border-[#EBEBF0] px-4 py-2 font-semibold">Experiments</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">30,000+ A/B tests</td>
                      </tr>
                      <tr>
                        <td className="border border-[#EBEBF0] px-4 py-2 font-semibold">Period</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">2013 &ndash; 2015</td>
                      </tr>
                      <tr className="bg-[#F5F5F5]">
                        <td className="border border-[#EBEBF0] px-4 py-2 font-semibold">Metrics</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">Impressions, Clicks, CTR</td>
                      </tr>
                      <tr>
                        <td className="border border-[#EBEBF0] px-4 py-2 font-semibold">Variations</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">Multiple headlines per test, sometimes with image changes</td>
                      </tr>
                      <tr className="bg-[#F5F5F5]">
                        <td className="border border-[#EBEBF0] px-4 py-2 font-semibold">Tools</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">Python, SciPy, TextBlob, Pandas</td>
                      </tr>
                      <tr>
                        <td className="border border-[#EBEBF0] px-4 py-2 font-semibold">Deliverable</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">upworthy_analysis.ipynb (Jupyter Notebook)</td>
                      </tr>
                    </tbody>
                  </table>
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
                  <li><strong>Dataset:</strong> 30,000+ A/B experiments</li>
                  <li><strong>Period:</strong> 2013 &ndash; 2015</li>
                  <li><strong>Metrics:</strong> Impressions, Clicks, CTR</li>
                  <li><strong>Tools:</strong> Python, SciPy, TextBlob, Pandas</li>
                  <li><strong>Methods:</strong> NLP Feature Engineering, Statistical Testing, Replication Analysis</li>
                </ul>
              </div>

              {/* Feature Engineering Mini-Flow */}
              <div className="mt-6 border p-6" style={{ borderColor: "#EBEBF0" }}>
                <h3
                  className="m-0 mb-4 text-[16px] font-semibold uppercase tracking-[0.5px]"
                  style={{ color: "rgb(0, 95, 158)" }}
                >
                  Features Engineered
                </h3>
                <div className="flex flex-col gap-2 text-[12px]">
                  {[
                    { label: "Sentiment Score", tool: "TextBlob" },
                    { label: "Question Detection", tool: "Regex" },
                    { label: "Numeric Indicators", tool: "Regex" },
                    { label: "Word / Char Count", tool: "Python" },
                    { label: "Emotional Polarity", tool: "TextBlob" },
                  ].map((f, i) => (
                    <div key={f.label} className="flex items-center justify-between rounded bg-[#F5F5F7] px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                          style={{ backgroundColor: i < 3 ? "rgb(0, 156, 220)" : "rgb(0, 95, 158)" }}
                        >
                          {i + 1}
                        </span>
                        <span className="font-semibold text-[#363638]">{f.label}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase text-[#999]">{f.tool}</span>
                    </div>
                  ))}
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
                      href="/projects/slack-discounts"
                      className="text-[14px] font-semibold no-underline hover:underline"
                      style={{ color: "rgb(0, 95, 158)" }}
                    >
                      Slack Pricing &amp; Growth Experiment
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
