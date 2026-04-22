/* eslint-disable @next/next/no-img-element */
import { ExternalLinkIcon } from "@/components/icons";

interface CardButton {
  label: string;
  href: string;
}

interface PodcastCard {
  title: string;
  description: string;
  image: string;
  buttons: CardButton[];
}

const cards: PodcastCard[] = [
  {
    title: "Headline A/B Test Analysis",
    description:
      "Analyzing 30,000+ A/B headline experiments from the Upworthy Research Archive (2013\u20132015) to determine what drives user engagement and validate experimental reliability. Covering impressions, clicks, CTR, and multiple headline variations per test.",
    image: "/images/up_worthy_experiment.jpg",
    buttons: [
      {
        label: "LISTEN ON APPLE",
        href: "https://podcasts.apple.com/us/podcast/capital-ideas-investing-podcast/id1206119204",
      },
      {
        label: "LISTEN ON SPOTIFY",
        href: "https://open.spotify.com/show/5JOXwp15t5vFIu2OAxkahr",
      },
    ],
  },
  {
    title: "Customer Churn Analysis",
    description:
      "End-to-end work: exploratory analysis, feature engineering, churn modeling, segmentation, and an executive PDF summary.",
    image: "/images/churn-banner.jpg",
    buttons: [
      {
        label: "WATCH ON YOUTUBE",
        href: "https://www.youtube.com/playlist?list=PLbKcvAV87057bIfkbTAp-dgqaLEwa9GHi",
      },
      {
        label: "WATCH ON SPOTIFY",
        href: "https://open.spotify.com/show/5JOXwp15t5vFIu2OAxkahr",
      },
    ],
  },
  {
    title: "Slack Pricing & Growth Experiment",
    description:
      "A growth analysis exploring how targeted discounts drive conversion and retention. The right discount, to the right customer \u2014 a deep dive into pricing experimentation at scale.",
    image: "/images/slack-discounts-banner.jpg",
    buttons: [
      {
        label: "VIEW CASE STUDY",
        href: "#",
      },
      {
        label: "READ ANALYSIS",
        href: "#",
      },
    ],
  },
];

export function PodcastCards() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 pt-16 pb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="grid grid-cols-1 bg-white md:grid-cols-2"
        >
          {/* Cover art tile */}
          <div>
            <img
              src={card.image}
              alt={card.title}
              className="block h-full w-full object-cover"
            />
          </div>

          {/* Text column */}
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
            <div className="mt-4 flex flex-wrap gap-4">
              {card.buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.5px] no-underline hover:bg-[rgb(0,58,102)] hover:text-white"
                  style={{
                    borderColor: "rgb(0, 58, 102)",
                    color: "rgb(0, 58, 102)",
                  }}
                >
                  {btn.label}
                  <ExternalLinkIcon />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
