"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ExternalLinkIcon } from "@/components/icons";

interface ProjectCard {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  buttonHref: string;
}

interface Tab {
  label: string;
  cards: ProjectCard[];
}

const tabs: Tab[] = [
  {
    label: "Data Science",
    cards: [
      {
        title: "Headline A/B Test Analysis",
        description:
          "Analyzing 30,000+ A/B headline experiments from the Upworthy Research Archive (2013\u20132015) to determine what drives user engagement and validate experimental reliability. Covering impressions, clicks, CTR, and multiple headline variations per test.",
        image: "/images/up_worthy_experiment.jpg",
        buttonLabel: "VIEW PROJECT",
        buttonHref: "/projects/headline-ab-test",
      },
      {
        title: "Slack Pricing & Growth Experiment",
        description:
          "A growth analysis exploring how targeted discounts drive conversion and retention. The right discount, to the right customer \u2014 a deep dive into pricing experimentation at scale.",
        image: "/images/slack-discounts-banner.jpg",
        buttonLabel: "VIEW PROJECT",
        buttonHref: "/projects/slack-discounts",
      },
      {
        title: "Estimating Treatment Effects with Difference-in-Differences",
        description:
          "A causal inference project using Difference-in-Differences methodology on synthetic panel data. Progresses from classic 2\u00D72 designs through modern approaches like Callaway-Sant\u2019Anna and HonestDiD, exposing how Two-Way Fixed Effects becomes unreliable under staggered treatment adoption.",
        image: "/images/causal-did-banner.jpg",
        buttonLabel: "VIEW PROJECT",
        buttonHref: "https://github.com/ayusuf9/Estimating-Treatment-Effect-Difference-in-Difference-",
      },
    ],
  },
  {
    label: "Machine Learning",
    cards: [
      {
        title: "Customer Churn Analysis",
        description:
          "End-to-end work: exploratory analysis, feature engineering, churn modeling, segmentation, and an executive PDF summary.",
        image: "/images/churn-banner.jpg",
        buttonLabel: "VIEW PROJECT",
        buttonHref: "/projects/customer-churn",
      },
      {
        title: "Rice Variety Classification",
        description:
          "A deep learning project that classifies five rice varieties\u2014Arborio, Basmati, Ipsala, Jasmine, and Karacadag\u2014using transfer learning with MobileNet.",
        image: "/images/rice-classification-banner.jpg",
        buttonLabel: "VIEW PROJECT",
        buttonHref: "/projects/rice-classification",
      },
    ],
  },
  {
    label: "Generative AI",
    cards: [
      {
        title: "Agentic Data Analysis API",
        description:
          "An AI-powered FastAPI application enabling natural language queries against database tables using a multi-agent system. Integrates asyncpg for database connectivity and pydantic-ai for intelligent query analysis, with CSV data imports and RESTful endpoints.",
        image: "/images/multiagent-banner.jpg",
        buttonLabel: "VIEW PROJECT",
        buttonHref: "https://github.com/ayusuf9/Agentic-API-Endpoint",
      },
    ],
  },
  {
    label: "Data Visualization",
    cards: [
      {
        title: "Sales Dashboard",
        description:
          "An interactive Tableau dashboard visualizing sales performance, trends, and key metrics. Designed to surface actionable insights at a glance through clean, intuitive charts and filters.",
        image: "/images/sales-dashboard-banner.jpg",
        buttonLabel: "VIEW PROJECT",
        buttonHref: "https://public.tableau.com/app/profile/ayusuf9/viz/SalesDashboard_16924300786240/Dashboard1",
      },
    ],
  },
];

export function CategoryTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCards = tabs[activeIndex].cards;

  return (
    <section id="projects" className="w-full py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <h2 className="mb-4 text-center text-[32px] font-normal leading-tight text-cg-black">
          Explore my work across data and ML
        </h2>
        <p className="mb-12 text-center text-base font-normal text-cg-sapphire">
          You can switch between the tabs
        </p>

        <div role="tablist" className="flex">
          {tabs.map((tab, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${i}`}
                onClick={() => setActiveIndex(i)}
                className={`flex-1 cursor-pointer border-b-4 pb-4 pt-9 text-center text-base font-semibold text-cg-black ${
                  isActive
                    ? "border-cg-sapphire"
                    : "border-[#EFEFEF] hover:bg-[#F0F0F0]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          id={`tabpanel-${activeIndex}`}
          role="tabpanel"
          aria-labelledby={tabs[activeIndex].label}
          className="flex flex-col gap-6 pt-12"
        >
          {activeCards.map((card, i) => (
            <div
              key={`${tabs[activeIndex].label}-${card.title}-${i}`}
              className="grid grid-cols-1 bg-white md:grid-cols-2"
            >
              <div>
                <img
                  src={card.image}
                  alt={card.title}
                  className="block h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 px-8 py-12">
                <h3 className="m-0 text-[36px] font-normal leading-snug text-cg-black">
                  {card.title}
                </h3>
                <p className="m-0 text-base leading-6 text-cg-black">
                  {card.description}
                </p>
                <div className="mt-4">
                  <a
                    href={card.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-cg-sapphire px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.5px] text-cg-sapphire no-underline transition-colors hover:bg-cg-sapphire/5"
                  >
                    {card.buttonLabel}
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
