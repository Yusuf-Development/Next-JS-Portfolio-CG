/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rice Variety Classification | Yusuf Musa",
  description:
    "A deep learning project that classifies five rice varieties using transfer learning with MobileNet, achieving 99.82% test accuracy.",
};

export default function RiceClassificationPage() {
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
              Deep Learning
            </span>
            <h1 className="m-0 text-[36px] font-semibold leading-[44px] text-white md:text-[48px] md:leading-[60px]">
              Rice Variety Classification
            </h1>
          </div>
          <div className="hidden md:block md:w-[50%]">
            <img
              src="/images/rice-classification-banner.jpg"
              alt="Rice Variety Classification"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Metrics Strip */}
      <section style={{ backgroundColor: "#F5F5F7" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between px-8 py-8">
          {[
            { value: "99.82%", label: "Test Accuracy" },
            { value: "7,500", label: "Training Images" },
            { value: "5", label: "Rice Varieties" },
            { value: "1", label: "Misclassification" },
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
                {/* Overview */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  1. Overview
                </h2>
                <p>
                  This deep learning project leverages transfer learning with MobileNet to
                  classify five distinct rice varieties from image data: Arborio, Basmati,
                  Ipsala, Jasmine, and Karacadag. The model achieves 99.82% test accuracy
                  with only 1 misclassification across 562 test samples.
                </p>

                {/* ── Transfer Learning Pipeline ── */}
                <div className="my-6 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-8">
                  <p className="m-0 mb-6 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Transfer Learning Pipeline
                  </p>
                  <div className="flex flex-col items-center gap-0 md:flex-row md:gap-0">
                    {[
                      { num: "1", color: "rgb(0, 95, 158)", title: "ImageNet", sub: "Pre-trained\nMobileNet weights" },
                      { num: "2", color: "rgb(0, 156, 220)", title: "Freeze", sub: "Lock early layers\npreserve features" },
                      { num: "3", color: "rgb(0, 156, 220)", title: "Fine-Tune", sub: "Unfreeze last 20\nlayers for rice" },
                      { num: "4", color: "#B42573", title: "Classify", sub: "Custom head\n5 varieties" },
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
                            <div className="h-0 w-0" style={{ borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "7px solid rgb(0, 156, 220)" }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Model Architecture */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  2. Model Architecture
                </h2>
                <p>
                  The model uses MobileNet pre-trained on ImageNet as a base, with a custom
                  classification head added on top. The final 20 layers of MobileNet undergo
                  fine-tuning to learn rice-specific visual characteristics.
                </p>

                {/* ── Architecture Diagram ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-5 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Network Architecture
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    {/* Input */}
                    <div className="w-full max-w-sm rounded px-4 py-2 text-center text-[13px] font-semibold text-white" style={{ backgroundColor: "rgb(0, 95, 158)" }}>
                      Input Image (224 x 224 x 3)
                    </div>
                    <svg width="20" height="20" viewBox="0 0 20 24" fill="none"><path d="M10 0 L10 18 M4 14 L10 20 L16 14" stroke="rgb(0,156,220)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {/* Frozen layers */}
                    <div className="w-full max-w-sm rounded border-2 border-dashed border-[#ccc] bg-white px-4 py-3 text-center">
                      <p className="m-0 text-[10px] font-bold uppercase tracking-widest text-[#999]">Frozen Layers</p>
                      <p className="m-0 mt-1 text-[16px] font-bold text-[#363638]">MobileNet Conv Blocks 1&ndash;N</p>
                      <p className="m-0 text-[11px] text-[#888]">General visual features preserved</p>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 20 24" fill="none"><path d="M10 0 L10 18 M4 14 L10 20 L16 14" stroke="rgb(0,156,220)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {/* Fine-tuned layers */}
                    <div className="w-full max-w-sm rounded border-2 px-4 py-3 text-center" style={{ borderColor: "rgb(0, 156, 220)", backgroundColor: "rgba(0, 156, 220, 0.06)" }}>
                      <p className="m-0 text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgb(0, 156, 220)" }}>Fine-Tuned (Last 20 Layers)</p>
                      <p className="m-0 mt-1 text-[16px] font-bold text-[#363638]">Rice-Specific Feature Learning</p>
                      <p className="m-0 text-[11px] text-[#888]">Grain edges, morphology, surface texture</p>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 20 24" fill="none"><path d="M10 0 L10 18 M4 14 L10 20 L16 14" stroke="rgb(0,156,220)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {/* Classification head */}
                    <div className="w-full max-w-sm rounded px-4 py-2 text-center text-[13px] font-semibold text-white" style={{ backgroundColor: "#B42573" }}>
                      Custom Classification Head &rarr; 5 Classes
                    </div>
                    {/* Output labels */}
                    <div className="mt-2 flex flex-wrap justify-center gap-2">
                      {["Arborio", "Basmati", "Ipsala", "Jasmine", "Karacadag"].map((v) => (
                        <span key={v} className="rounded-full border border-[#EBEBF0] bg-white px-3 py-1 text-[11px] font-semibold text-[#363638]">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Data Augmentation */}
                <div className="my-2 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-4 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Data Augmentation Techniques
                  </p>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {[
                      { icon: "Rotation", desc: "Random angle rotation" },
                      { icon: "H-Flip", desc: "Horizontal mirror" },
                      { icon: "V-Flip", desc: "Vertical mirror" },
                      { icon: "Zoom", desc: "Random zoom & shift" },
                    ].map((aug) => (
                      <div key={aug.icon} className="flex flex-col items-center rounded border border-[#EBEBF0] bg-white px-3 py-3 text-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ backgroundColor: "rgb(0, 156, 220)" }}>
                          {aug.icon.charAt(0)}
                        </div>
                        <p className="m-0 mt-2 text-[12px] font-bold text-[#363638]">{aug.icon}</p>
                        <p className="m-0 text-[10px] text-[#888]">{aug.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dataset */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  3. Dataset
                </h2>
                <p>
                  The dataset contains 1,500 images per category with stratified division
                  into training, validation, and test subsets.
                </p>

                {/* ── Variety Cards ── */}
                <div className="my-4 grid grid-cols-5 gap-2">
                  {[
                    { name: "Arborio", grain: "Short, round", color: "rgb(0, 95, 158)" },
                    { name: "Basmati", grain: "Long, slender", color: "rgb(0, 156, 220)" },
                    { name: "Ipsala", grain: "Medium", color: "rgb(0, 156, 220)" },
                    { name: "Jasmine", grain: "Long", color: "#B42573" },
                    { name: "Karacadag", grain: "Short, round", color: "rgb(0, 95, 158)" },
                  ].map((v) => (
                    <div key={v.name} className="flex flex-col items-center rounded border-t-4 bg-[#FAFAFA] px-2 py-4 text-center" style={{ borderColor: v.color }}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full text-[18px] font-bold text-white" style={{ backgroundColor: v.color }}>
                        {v.name.charAt(0)}
                      </div>
                      <p className="m-0 mt-2 text-[13px] font-bold text-[#363638]">{v.name}</p>
                      <p className="m-0 text-[10px] text-[#888]">{v.grain}</p>
                      <p className="m-0 mt-1 text-[11px] font-semibold" style={{ color: v.color }}>1,500 imgs</p>
                    </div>
                  ))}
                </div>

                {/* ── Confusion Pair Callout ── */}
                <div className="my-2 flex gap-4 rounded-l border-l-4 bg-[#FAFAFA] px-5 py-4" style={{ borderColor: "#B42573" }}>
                  <svg className="shrink-0 mt-0.5" width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#B42573" strokeWidth="2" />
                    <path d="M12 8v4M12 16h.01" stroke="#B42573" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <p className="m-0 text-[14px] text-[#363638]">
                    <strong>Morphological Challenge:</strong> Karacadag and Arborio share similar short, round grain profiles, making them the most common confusion pair. Jasmine shows the most feature-space overlap across all varieties.
                  </p>
                </div>

                {/* Results */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  4. Results
                </h2>

                {/* ── Accuracy Visual ── */}
                <div className="my-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-6">
                  <p className="m-0 mb-4 text-center text-[13px] font-semibold uppercase tracking-widest text-[#999]">
                    Classification Accuracy
                  </p>
                  <div className="flex items-center justify-center gap-8">
                    {/* Donut-style ring */}
                    <div className="relative flex h-36 w-36 items-center justify-center">
                      <svg className="absolute inset-0" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="#EBEBF0" strokeWidth="3" />
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgb(0, 156, 220)" strokeWidth="3" strokeDasharray="97.4 100" strokeDashoffset="-25" strokeLinecap="round" />
                      </svg>
                      <div className="text-center">
                        <p className="m-0 text-[28px] font-bold" style={{ color: "rgb(0, 95, 158)" }}>99.82%</p>
                        <p className="m-0 text-[10px] text-[#888]">Accuracy</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(0,156,220)] text-[14px] font-bold text-white">561</span>
                        <div>
                          <p className="m-0 text-[14px] font-bold text-[#363638]">Correct</p>
                          <p className="m-0 text-[11px] text-[#888]">out of 562 test samples</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold text-white" style={{ backgroundColor: "#B42573" }}>1</span>
                        <div>
                          <p className="m-0 text-[14px] font-bold text-[#363638]">Misclassified</p>
                          <p className="m-0 text-[11px] text-[#888]">single error across all varieties</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extended Analysis */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  5. Extended Analysis
                </h2>
                <p>
                  The project includes a comprehensive evaluation beyond standard accuracy metrics:
                </p>

                {/* ── Analysis Technique Cards ── */}
                <div className="my-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {[
                    {
                      title: "Grad-CAM Heatmaps",
                      desc: "Model focuses on grain edges, morphology, and surface characteristics",
                      color: "rgb(0, 95, 158)",
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="rgb(0,95,158)" strokeWidth="2" />
                          <circle cx="12" cy="12" r="4" stroke="rgb(0,95,158)" strokeWidth="2" />
                          <path d="M12 8v1M12 15v1M8 12h1M15 12h1" stroke="rgb(0,95,158)" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "t-SNE / PCA Projections",
                      desc: "Five well-separated clusters in learned feature space",
                      color: "rgb(0, 156, 220)",
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <circle cx="6" cy="8" r="2.5" stroke="rgb(0,156,220)" strokeWidth="2" />
                          <circle cx="18" cy="6" r="2.5" stroke="rgb(0,156,220)" strokeWidth="2" />
                          <circle cx="14" cy="16" r="2.5" stroke="rgb(0,156,220)" strokeWidth="2" />
                          <circle cx="8" cy="18" r="1.5" stroke="rgb(0,156,220)" strokeWidth="1.5" />
                          <circle cx="18" cy="14" r="1.5" stroke="rgb(0,156,220)" strokeWidth="1.5" />
                        </svg>
                      ),
                    },
                    {
                      title: "Morphological Comparison",
                      desc: "Contour analysis of grain area, perimeter, and aspect ratios",
                      color: "rgb(0, 156, 220)",
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <ellipse cx="12" cy="12" rx="8" ry="5" stroke="rgb(0,156,220)" strokeWidth="2" />
                          <path d="M4 12h16" stroke="rgb(0,156,220)" strokeWidth="1" strokeDasharray="2 2" />
                          <path d="M12 7v10" stroke="rgb(0,156,220)" strokeWidth="1" strokeDasharray="2 2" />
                        </svg>
                      ),
                    },
                    {
                      title: "Error Analysis",
                      desc: "Misclassified images with high certainty identifying model blind spots",
                      color: "#B42573",
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="#B42573" strokeWidth="2" />
                          <path d="M15 9l-6 6M9 9l6 6" stroke="#B42573" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "Low-Confidence Predictions",
                      desc: "Ambiguous outputs predominantly from Jasmine varieties",
                      color: "#B42573",
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="#B42573" strokeWidth="2" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" stroke="#B42573" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "Architecture Benchmarks",
                      desc: "EfficientNet and ResNet50 compared against MobileNet baseline",
                      color: "rgb(0, 95, 158)",
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="rgb(0,95,158)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                    },
                  ].map((card) => (
                    <div key={card.title} className="flex gap-4 rounded border border-[#EBEBF0] bg-[#FAFAFA] p-4">
                      <div className="shrink-0 pt-0.5">{card.icon}</div>
                      <div>
                        <p className="m-0 text-[14px] font-bold text-[#363638]">{card.title}</p>
                        <p className="m-0 mt-1 text-[12px] text-[#888]">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Insights */}
                <h2 className="mt-4 text-[36px] font-normal leading-[40px]">
                  6. Key Insights
                </h2>

                {/* ── Insight Cards ── */}
                <div className="my-4 flex flex-col gap-3">
                  {[
                    { insight: "Transfer learning achieves near-perfect classification with modest training data", color: "rgb(0, 95, 158)" },
                    { insight: "Jasmine variety presents classification challenges with overlapping learned representations", color: "#B42573" },
                    { insight: "Round-grain morphologies (Karacadag, Arborio) occasionally conflate in model predictions", color: "#B42573" },
                    { insight: "Model attention concentrates on grain boundary geometry rather than background elements", color: "rgb(0, 156, 220)" },
                    { insight: "Learned feature representations demonstrate excellent inter-class separability", color: "rgb(0, 156, 220)" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-l border-l-4 bg-[#FAFAFA] px-5 py-3" style={{ borderColor: item.color }}>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white" style={{ backgroundColor: item.color }}>
                        {i + 1}
                      </span>
                      <p className="m-0 text-[14px] text-[#363638]">{item.insight}</p>
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
                  <li><strong>Test Accuracy:</strong> 99.82%</li>
                  <li><strong>Model:</strong> MobileNet (Transfer Learning)</li>
                  <li><strong>Dataset:</strong> 7,500 images (1,500 per variety)</li>
                  <li><strong>Varieties:</strong> Arborio, Basmati, Ipsala, Jasmine, Karacadag</li>
                  <li><strong>Tools:</strong> TensorFlow, OpenCV, Scikit-learn, Matplotlib, Seaborn</li>
                  <li><strong>Techniques:</strong> Transfer Learning, Fine-Tuning, Grad-CAM, t-SNE</li>
                </ul>
              </div>

              {/* Model Config */}
              <div className="mt-6 border p-6" style={{ borderColor: "#EBEBF0" }}>
                <h3 className="m-0 mb-4 text-[16px] font-semibold uppercase tracking-[0.5px]" style={{ color: "rgb(0, 95, 158)" }}>
                  Model Config
                </h3>
                <div className="flex flex-col gap-2 text-[12px]">
                  {[
                    { label: "Base", value: "MobileNet" },
                    { label: "Pre-trained", value: "ImageNet" },
                    { label: "Fine-tuned", value: "Last 20 layers" },
                    { label: "Optimizer", value: "Adam (lr=0.0001)" },
                    { label: "Output", value: "best_rice_model.keras" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center justify-between rounded bg-[#F5F5F7] px-3 py-2">
                      <span className="font-semibold text-[#363638]">{c.label}</span>
                      <span className="text-[11px] font-bold" style={{ color: "rgb(0, 95, 158)" }}>{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-[#EBEBF0] pt-6">
                <h3 className="m-0 mb-4 text-[16px] font-semibold uppercase tracking-[0.5px]" style={{ color: "rgb(0, 95, 158)" }}>
                  Other Projects
                </h3>
                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                  <li>
                    <Link href="/projects/customer-churn" className="text-[14px] font-semibold no-underline hover:underline" style={{ color: "rgb(0, 95, 158)" }}>
                      Customer Churn Analysis
                    </Link>
                  </li>
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
