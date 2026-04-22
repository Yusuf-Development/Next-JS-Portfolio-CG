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
        title: "Slack Pricing & Growth Experiment",
        description:
          "A growth analysis exploring how targeted discounts drive conversion and retention. The right discount, to the right customer \u2014 a deep dive into pricing experimentation at scale.",
        image: "/images/slack-discounts-banner.jpg",
        buttonLabel: "VIEW PROJECT",
        buttonHref: "/projects/slack-discounts",
      },
    ],
  },
  {
    label: "Data Visualization",
    cards: [
      {
        title: "Headline A/B Test Analysis",
        description:
          "Analyzing 30,000+ A/B headline experiments from the Upworthy Research Archive (2013\u20132015) to determine what drives user engagement and validate experimental reliability. Covering impressions, clicks, CTR, and multiple headline variations per test.",
        image: "/images/up_worthy_experiment.jpg",
        buttonLabel: "VIEW PROJECT",
        buttonHref: "/projects/headline-ab-test",
      },
    ],
  },
];

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCards = tabs[activeIndex].cards;

  return (
    <>
      {/* Tab Bar */}
      <div className="w-full">
        <ol
          className="flex list-none overflow-x-auto p-0"
          role="tablist"
          style={{
            backgroundColor: "rgb(247, 247, 247)",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px",
            margin: "0 116px",
          }}
        >
          {tabs.map((tab, i) => {
            const isActive = i === activeIndex;
            return (
              <li
                key={tab.label}
                role="tab"
                aria-selected={isActive}
                className="flex-1"
                style={{
                  backgroundColor: isActive ? "rgb(0, 156, 220)" : "transparent",
                  height: "90px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="flex h-full w-full cursor-pointer items-center justify-center border-none bg-transparent text-[18px] transition-colors"
                  style={{
                    color: isActive ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
                    fontWeight: isActive ? 700 : 600,
                    padding: "30px",
                  }}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Project Cards */}
      <div className="mx-auto flex max-w-7xl flex-col gap-6 pt-16 pb-6">
        {activeCards.map((card) => (
          <div
            key={card.title}
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
              <h3
                className="m-0 text-[36px] font-normal leading-snug"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                {card.title}
              </h3>
              <p className="m-0 text-[16px] leading-6 text-black">
                {card.description}
              </p>
              <div className="mt-4">
                <a
                  href={card.buttonHref}
                  className="inline-flex items-center gap-2 border-2 px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.5px] no-underline transition-colors hover:bg-[rgba(0,58,102,0.08)]"
                  style={{
                    borderColor: "rgb(0, 58, 102)",
                    color: "rgb(0, 58, 102)",
                  }}
                >
                  {card.buttonLabel}
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
