/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Customer Churn Analysis | Yusuf Musa",
  description:
    "A data-driven approach to reducing customer churn for an e-commerce business, analyzing 50,000 customers across 25 features with an XGBoost classifier achieving 0.929 ROC-AUC.",
};

export default function CustomerChurnPage() {
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
              Machine Learning
            </span>
            <h1 className="m-0 text-[36px] font-semibold leading-[44px] text-white md:text-[48px] md:leading-[60px]">
              Customer Churn Analysis
            </h1>
          </div>
          <div className="hidden md:block md:w-[50%]">
            <img
              src="/images/churn-banner.jpg"
              alt="Customer Churn Analysis"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Metrics Strip */}
      <section style={{ backgroundColor: "#F5F5F7" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between px-8 py-8">
          {[
            { value: "50K", label: "Customers Analyzed" },
            { value: "0.929", label: "ROC-AUC Score" },
            { value: "$19.7M", label: "At-Risk Revenue" },
            { value: "$3.95M", label: "Potential Savings" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-6 py-2">
              <span className="text-[36px] font-bold" style={{ color: "rgb(0, 95, 158)" }}>
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
                {/* Executive Summary */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  1. Executive Summary
                </h2>
                <p>
                  This report presents a data-driven approach to reducing customer churn
                  for an e-commerce business experiencing high attrition and declining
                  quarterly revenue. The analysis covers 50,000 customers across 25
                  features spanning demographics, platform engagement, purchase behavior,
                  customer service interactions, and financials.
                </p>
                <p>
                  An XGBoost classifier was selected as the best-performing churn
                  prediction model after evaluating four candidates. It achieves a ROC-AUC
                  of 0.929 and correctly identifies 85% of customers who go on to churn.
                  The total at-risk revenue across all segments is $19.7M. A conservative
                  estimate of 20% retention improvement from targeted campaigns yields
                  $3.95M in potential savings, with 85% of that value concentrated in the
                  high-risk tier.
                </p>

                {/* ── End-to-End Pipeline ── */}
                <div className="my-6 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-8">
                  <p className="m-0 mb-6 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    End-to-End Pipeline
                  </p>
                  <div className="flex flex-col items-center gap-0 md:flex-row md:gap-0">
                    {[
                      { num: "1", color: "rgb(0, 95, 158)", title: "EDA", sub: "50K customers\n25 features" },
                      { num: "2", color: "rgb(0, 156, 220)", title: "Engineer", sub: "Cart Friction,\nEngagement Score" },
                      { num: "3", color: "rgb(0, 156, 220)", title: "Model", sub: "4 classifiers\ntuned & compared" },
                      { num: "4", color: "#B42573", title: "Segment", sub: "SHAP clustering\n3 archetypes" },
                      { num: "5", color: "#B42573", title: "Strategy", sub: "Targeted campaigns\n$3.95M savings" },
                    ].map((phase, i) => (
                      <div key={phase.num} className="flex items-center">
                        <div className="flex flex-col items-center text-center" style={{ minWidth: "100px" }}>
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-full text-[16px] font-bold text-white"
                            style={{ backgroundColor: phase.color }}
                          >
                            {phase.num}
                          </div>
                          <p className="mt-2 mb-0 text-[12px] font-bold text-[#363638]">{phase.title}</p>
                          <p className="m-0 whitespace-pre-line text-[10px] text-[#888]">{phase.sub}</p>
                        </div>
                        {i < 4 && (
                          <div className="hidden md:flex items-center px-0.5" style={{ marginTop: "-20px" }}>
                            <div className="h-[2px] w-6" style={{ backgroundColor: "rgb(0, 156, 220)" }} />
                            <div className="h-0 w-0" style={{ borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid rgb(0, 156, 220)" }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Findings */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  2. Key Findings
                </h2>
                <p className="font-semibold">Top Churn Drivers</p>
                <p>
                  Feature importance analysis using four methods (Mutual Information,
                  Random Forest, Permutation Importance, and SHAP) revealed the following
                  top drivers:
                </p>

                {/* ── Feature Importance Bar Chart ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-5 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Feature Importance (Avg Rank Across 4 Methods)
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      { feature: "Customer Service Calls", rank: 1.5, pct: 95, dir: "More calls = more churn" },
                      { feature: "Lifetime Value", rank: 2.8, pct: 82, dir: "Non-linear relationship" },
                      { feature: "Cart Abandonment Rate", rank: 3.2, pct: 76, dir: "Higher = more churn" },
                      { feature: "Cart Friction (eng.)", rank: 5.8, pct: 52, dir: "Higher = more churn" },
                      { feature: "Engagement Score (eng.)", rank: 6.5, pct: 45, dir: "Lower = more churn" },
                    ].map((f, i) => (
                      <div key={f.feature} className="flex items-center gap-3">
                        <span className="w-44 shrink-0 text-right text-[12px] font-semibold text-[#363638]">
                          {f.feature}
                        </span>
                        <div className="flex-1">
                          <div className="relative">
                            <div
                              className="h-7 rounded"
                              style={{
                                width: `${f.pct}%`,
                                backgroundColor: i < 2 ? "rgb(0, 95, 158)" : i < 4 ? "rgb(0, 156, 220)" : "#B42573",
                              }}
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-[#888]">
                              {f.dir}
                            </span>
                          </div>
                        </div>
                        <span className="w-8 shrink-0 text-[12px] font-bold" style={{ color: "rgb(0, 95, 158)" }}>
                          {f.rank}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p>
                  A notable finding: Lifetime Value showed near-zero linear correlation
                  with churn (-0.011), yet ranked #2 overall in tree-based importance
                  methods. This reveals a strong non-linear relationship that traditional
                  correlation analysis completely missed.
                </p>

                {/* ── LTV Insight Callout ── */}
                <div className="my-2 flex gap-4 rounded-l border-l-4 bg-[#FAFAFA] px-5 py-4" style={{ borderColor: "#B42573" }}>
                  <svg className="shrink-0 mt-0.5" width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#B42573" strokeWidth="2" />
                    <path d="M12 8v4M12 16h.01" stroke="#B42573" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <p className="m-0 text-[14px] text-[#363638]">
                    <strong>Key Insight:</strong> LTV&apos;s near-zero linear correlation (-0.011) masked a strong non-linear churn relationship that only tree-based methods detected. This underscores why ensemble models outperform logistic regression here.
                  </p>
                </div>

                {/* Model Performance */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  3. Model Performance
                </h2>
                <p>
                  Four models were trained with class-weight balancing to handle the 71/29
                  class imbalance, then tuned via RandomizedSearchCV (50 iterations, 5-fold
                  stratified cross-validation, scored on ROC-AUC):
                </p>

                {/* ── ROC-AUC Visual Comparison ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-5 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Model ROC-AUC Comparison
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      { model: "XGBoost", auc: 0.929, color: "rgb(0, 95, 158)", winner: true },
                      { model: "LightGBM", auc: 0.929, color: "rgb(0, 156, 220)", winner: false },
                      { model: "Random Forest", auc: 0.926, color: "rgb(0, 156, 220)", winner: false },
                      { model: "Logistic Reg.", auc: 0.814, color: "#ccc", winner: false },
                    ].map((m) => (
                      <div key={m.model} className="flex items-center gap-3">
                        <span className={`w-28 shrink-0 text-right text-[13px] ${m.winner ? "font-bold" : "font-normal"} text-[#363638]`}>
                          {m.model} {m.winner && " *"}
                        </span>
                        <div className="flex-1">
                          <div
                            className={`h-8 rounded ${m.winner ? "ring-2 ring-offset-1 ring-[rgb(0,95,158)]" : ""}`}
                            style={{
                              width: `${((m.auc - 0.7) / 0.3) * 100}%`,
                              backgroundColor: m.color,
                            }}
                          />
                        </div>
                        <span className={`w-12 shrink-0 text-[14px] ${m.winner ? "font-bold" : ""}`} style={{ color: m.winner ? "rgb(0, 95, 158)" : "#888" }}>
                          {m.auc}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="m-0 mt-3 text-center text-[11px] text-[#999]">
                    * Selected model &mdash; best precision/recall balance
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-[14px]">
                    <thead>
                      <tr style={{ backgroundColor: "rgb(0, 95, 158)" }}>
                        <th className="border border-[#EBEBF0] px-4 py-2 text-left text-white">Model</th>
                        <th className="border border-[#EBEBF0] px-4 py-2 text-left text-white">Accuracy</th>
                        <th className="border border-[#EBEBF0] px-4 py-2 text-left text-white">Precision</th>
                        <th className="border border-[#EBEBF0] px-4 py-2 text-left text-white">Recall</th>
                        <th className="border border-[#EBEBF0] px-4 py-2 text-left text-white">F1</th>
                        <th className="border border-[#EBEBF0] px-4 py-2 text-left text-white">ROC-AUC</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#F5F5F5] font-semibold">
                        <td className="border border-[#EBEBF0] px-4 py-2">XGBoost</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.914</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.852</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.851</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.851</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.929</td>
                      </tr>
                      <tr>
                        <td className="border border-[#EBEBF0] px-4 py-2">LightGBM</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.912</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.847</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.849</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.848</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.929</td>
                      </tr>
                      <tr className="bg-[#F5F5F5]">
                        <td className="border border-[#EBEBF0] px-4 py-2">Random Forest</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.915</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.886</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.811</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.847</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.926</td>
                      </tr>
                      <tr>
                        <td className="border border-[#EBEBF0] px-4 py-2">Logistic Regression</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.748</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.548</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.735</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.628</td>
                        <td className="border border-[#EBEBF0] px-4 py-2">0.814</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Customer Segments */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  4. Customer Segments
                </h2>
                <p className="font-semibold">Risk Tier Overview</p>

                {/* ── Risk Tier Visual ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-5 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Customer Risk Distribution
                  </p>
                  <div className="flex gap-3">
                    {/* Low */}
                    <div className="flex flex-col items-center" style={{ flex: "65.6" }}>
                      <div className="w-full rounded-t py-6 text-center" style={{ backgroundColor: "rgb(0, 156, 220)" }}>
                        <p className="m-0 text-[24px] font-bold text-white">65.6%</p>
                        <p className="m-0 text-[11px] font-semibold text-white/80">32,818 customers</p>
                      </div>
                      <p className="m-0 mt-2 text-[12px] font-bold text-[#363638]">Low Risk</p>
                      <p className="m-0 text-[11px] text-[#888]">3.7% churn</p>
                    </div>
                    {/* Medium */}
                    <div className="flex flex-col items-center" style={{ flex: "7.7" }}>
                      <div className="w-full rounded-t py-6 text-center" style={{ backgroundColor: "rgb(0, 95, 158)" }}>
                        <p className="m-0 text-[18px] font-bold text-white">7.7%</p>
                      </div>
                      <p className="m-0 mt-2 text-[11px] font-bold text-[#363638]">Med</p>
                      <p className="m-0 text-[10px] text-[#888]">26.3%</p>
                    </div>
                    {/* High */}
                    <div className="flex flex-col items-center" style={{ flex: "26.7" }}>
                      <div className="w-full rounded-t py-6 text-center" style={{ backgroundColor: "#B42573" }}>
                        <p className="m-0 text-[22px] font-bold text-white">26.7%</p>
                        <p className="m-0 text-[11px] font-semibold text-white/80">13,337 customers</p>
                      </div>
                      <p className="m-0 mt-2 text-[12px] font-bold text-[#363638]">High Risk</p>
                      <p className="m-0 text-[11px] text-[#888]">91.8% churn</p>
                    </div>
                  </div>
                </div>

                <p className="font-semibold">High-Risk Archetypes</p>
                <p>
                  SHAP values were computed for all high-risk customers and clustered using
                  K-Means (k=3, selected by silhouette score). Three distinct archetypes
                  emerged:
                </p>

                {/* ── Archetype Cards ── */}
                <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {[
                    {
                      name: "High-Value Frustrated",
                      size: "4,063",
                      churn: "100%",
                      ltv: "$2,575",
                      drivers: "Service Calls, Cart Abandon., LTV",
                      color: "#B42573",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#B42573" strokeWidth="2" />
                          <path d="M16 16s-1.5-2-4-2-4 2-4 2M9 9h.01M15 9h.01" stroke="#B42573" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ),
                    },
                    {
                      name: "Cart Abandoners",
                      size: "7,387",
                      churn: "85.1%",
                      ltv: "$715",
                      drivers: "Cart Abandon., Cart Friction, LTV",
                      color: "rgb(0, 95, 158)",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <circle cx="9" cy="21" r="1" stroke="rgb(0,95,158)" strokeWidth="2" />
                          <circle cx="20" cy="21" r="1" stroke="rgb(0,95,158)" strokeWidth="2" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="rgb(0,95,158)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16 3l-4 4m0-4l4 4" stroke="rgb(0,95,158)" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ),
                    },
                    {
                      name: "Price Sensitive",
                      size: "1,887",
                      churn: "100%",
                      ltv: "$1,387",
                      drivers: "Age, Discount Usage, LTV",
                      color: "rgb(0, 156, 220)",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="rgb(0,156,220)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                    },
                  ].map((a) => (
                    <div key={a.name} className="rounded border-t-4 bg-[#FAFAFA] p-5" style={{ borderColor: a.color }}>
                      <div className="mb-3">{a.icon}</div>
                      <p className="m-0 text-[15px] font-bold text-[#363638]">{a.name}</p>
                      <div className="mt-3 flex flex-col gap-1 text-[12px] text-[#888]">
                        <span><strong className="text-[#363638]">{a.size}</strong> customers</span>
                        <span>Churn: <strong style={{ color: a.color }}>{a.churn}</strong></span>
                        <span>Avg LTV: <strong className="text-[#363638]">{a.ltv}</strong></span>
                      </div>
                      <p className="m-0 mt-3 text-[11px] text-[#999]">{a.drivers}</p>
                    </div>
                  ))}
                </div>

                {/* Business Impact */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  5. Expected Business Impact
                </h2>

                {/* ── Revenue at Risk Waterfall ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-5 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Revenue at Risk &amp; Potential Savings
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      { seg: "High-Value Frustrated", risk: "$10.5M", save: "$2.09M", pct: 53, barW: 100 },
                      { seg: "Cart Abandoners", risk: "$4.5M", save: "$900K", pct: 23, barW: 43 },
                      { seg: "Price Sensitive", risk: "$2.6M", save: "$523K", pct: 13, barW: 25 },
                      { seg: "Medium Risk", risk: "$1.1M", save: "$215K", pct: 5, barW: 10 },
                      { seg: "Low Risk", risk: "$1.8M", save: "$362K", pct: 9, barW: 17 },
                    ].map((r, i) => (
                      <div key={r.seg}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[12px] font-semibold text-[#363638]">{r.seg}</span>
                          <span className="text-[12px] text-[#888]">{r.risk} at risk &rarr; <strong style={{ color: "rgb(0, 95, 158)" }}>{r.save}</strong> savings</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1">
                            <div
                              className="h-5 rounded"
                              style={{
                                width: `${r.barW}%`,
                                backgroundColor: i === 0 ? "#B42573" : i < 3 ? "rgb(0, 156, 220)" : "rgb(0, 95, 158)",
                              }}
                            />
                          </div>
                          <span className="w-10 shrink-0 text-right text-[12px] font-bold" style={{ color: "rgb(0, 95, 158)" }}>
                            {r.pct}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-center gap-2 rounded bg-white px-4 py-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 19V5M5 12l7-7 7 7" stroke="#B42573" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[14px] font-bold" style={{ color: "#B42573" }}>
                      85% of savings ($3.5M) concentrated in high-risk tier
                    </span>
                  </div>
                </div>

                {/* Recommended Strategies */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  6. Recommended Strategies
                </h2>

                {/* ── Strategy Cards ── */}
                <div className="my-4 flex flex-col gap-4">
                  {[
                    {
                      priority: "P1",
                      name: "High-Value Service Frustrated",
                      count: "4,063 customers",
                      risk: "$10.5M",
                      save: "$2.09M",
                      color: "#B42573",
                      actions: [
                        "Assign dedicated account managers to top-LTV customers",
                        "Proactive outreach acknowledging past service issues",
                        "Priority ticket routing with 4-hour response SLA",
                        "Account credit and free shipping as service recovery",
                      ],
                    },
                    {
                      priority: "P2",
                      name: "Cart Abandoners",
                      count: "7,387 customers",
                      risk: "$4.5M",
                      save: "$900K",
                      color: "rgb(0, 95, 158)",
                      actions: [
                        "Automated cart abandonment email within 1 hour of drop-off",
                        "Free shipping threshold set above typical cart value",
                        "Checkout UX simplification and guest checkout option",
                        "Push notification with 10% incentive on abandoned items",
                      ],
                    },
                    {
                      priority: "P3",
                      name: "Price Sensitive",
                      count: "1,887 customers",
                      risk: "$2.6M",
                      save: "$523K",
                      color: "rgb(0, 156, 220)",
                      actions: [
                        "Tiered loyalty discounts (spend more, save more)",
                        "Bundle offers to increase average order value",
                        "Age-appropriate product recommendations and channels",
                      ],
                    },
                  ].map((s) => (
                    <div key={s.priority} className="rounded border-l-4 bg-[#FAFAFA] px-6 py-5" style={{ borderColor: s.color }}>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="flex h-8 w-8 items-center justify-center rounded text-[12px] font-bold text-white"
                          style={{ backgroundColor: s.color }}
                        >
                          {s.priority}
                        </span>
                        <div>
                          <p className="m-0 text-[16px] font-bold text-[#363638]">{s.name}</p>
                          <p className="m-0 text-[12px] text-[#888]">{s.count}</p>
                        </div>
                        <div className="ml-auto text-right">
                          <p className="m-0 text-[12px] text-[#888]">At-risk: <strong className="text-[#363638]">{s.risk}</strong></p>
                          <p className="m-0 text-[12px]" style={{ color: s.color }}>Savings: <strong>{s.save}</strong></p>
                        </div>
                      </div>
                      <ul className="ml-5 flex flex-col gap-1 list-disc text-[14px]">
                        {s.actions.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full md:w-[320px] md:shrink-0">
              <div className="border p-6" style={{ borderColor: "#EBEBF0" }}>
                <h3 className="m-0 mb-4 text-[22px] font-semibold" style={{ color: "rgb(0, 95, 158)" }}>
                  Project Details
                </h3>
                <ul className="flex flex-col gap-3 list-none m-0 p-0 text-[14px]">
                  <li><strong>Dataset:</strong> 50,000 customers, 25 features</li>
                  <li><strong>Best Model:</strong> XGBoost (ROC-AUC 0.929)</li>
                  <li><strong>Tools:</strong> Python, XGBoost, LightGBM, Scikit-learn, SHAP, Pandas</li>
                  <li><strong>Techniques:</strong> Classification, SHAP Clustering, Feature Engineering</li>
                  <li><strong>At-Risk Revenue:</strong> $19.7M</li>
                  <li><strong>Potential Savings:</strong> $3.95M (20% retention lift)</li>
                  <li><strong>Output:</strong> Executive PDF Report</li>
                </ul>
              </div>

              {/* Model Selection Flow */}
              <div className="mt-6 border p-6" style={{ borderColor: "#EBEBF0" }}>
                <h3 className="m-0 mb-4 text-[16px] font-semibold uppercase tracking-[0.5px]" style={{ color: "rgb(0, 95, 158)" }}>
                  Model Selection
                </h3>
                <div className="flex flex-col items-center gap-2 text-[12px]">
                  <div className="w-full rounded bg-[#ccc] px-3 py-2 text-center font-semibold text-white">
                    Logistic Regression (0.814)
                  </div>
                  <div className="w-full rounded px-3 py-2 text-center font-semibold text-white" style={{ backgroundColor: "rgb(0, 156, 220)" }}>
                    Random Forest (0.926)
                  </div>
                  <div className="w-full rounded px-3 py-2 text-center font-semibold text-white" style={{ backgroundColor: "rgb(0, 156, 220)" }}>
                    LightGBM (0.929)
                  </div>
                  <div className="h-3 w-[2px]" style={{ backgroundColor: "#B42573" }} />
                  <div className="w-full rounded px-3 py-2 text-center font-bold text-white" style={{ backgroundColor: "#B42573" }}>
                    XGBoost (0.929) *
                  </div>
                  <p className="m-0 text-[10px] text-[#888]">* Best precision/recall balance</p>
                </div>
              </div>

              <div className="mt-6 border-t border-[#EBEBF0] pt-6">
                <h3 className="m-0 mb-4 text-[16px] font-semibold uppercase tracking-[0.5px]" style={{ color: "rgb(0, 95, 158)" }}>
                  Other Projects
                </h3>
                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                  <li>
                    <Link href="/projects/headline-ab-test" className="text-[14px] font-semibold no-underline hover:underline" style={{ color: "rgb(0, 95, 158)" }}>
                      Headline A/B Test Analysis
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/slack-discounts" className="text-[14px] font-semibold no-underline hover:underline" style={{ color: "rgb(0, 95, 158)" }}>
                      Slack Pricing &amp; Growth Experiment
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/rice-classification" className="text-[14px] font-semibold no-underline hover:underline" style={{ color: "rgb(0, 95, 158)" }}>
                      Rice Variety Classification
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
