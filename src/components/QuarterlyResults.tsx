/* eslint-disable @next/next/no-img-element */
import { Lock } from "lucide-react";

export function QuarterlyResults() {
  return (
    <section id="about" className="w-full py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <h3 className="mb-10 text-center text-[36px] font-normal text-cg-black">
          Download my Resume
        </h3>

        <div className="relative mx-auto max-w-[853px] overflow-visible bg-cg-ocean py-8 shadow-md">
          <div className="grid grid-cols-1 items-center gap-8 px-10 md:grid-cols-[290px_1fr]">
            {/* Resume thumbnail — offset left to overflow the card */}
            <div className="flex justify-center md:-ml-36">
              <img
                src="/images/resume.png"
                alt="Resume first page preview"
                className="h-[212px] w-[163px] bg-white object-cover shadow-lg"
              />
            </div>

            {/* Text + button */}
            <div className="flex flex-col gap-5">
              <h6 className="text-sm font-normal tracking-wide text-white">
                CURRICULUM VITAE
              </h6>
              <h3 className="-mt-2 text-[30px] font-normal leading-snug text-white">
                A complete overview of my experience, skills, and data science
                projects
              </h3>
              <div className="mt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-3 border border-white px-6 py-3 text-xs font-normal uppercase tracking-[1.5px] text-white no-underline transition-colors hover:bg-white/10"
                >
                  Download full resume
                  <Lock className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
