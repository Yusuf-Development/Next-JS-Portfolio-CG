/* eslint-disable @next/next/no-img-element */

export function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Banner image - full width, natural aspect ratio */}
      <img
        src="/images/hero-banner.jpg"
        alt=""
        className="block w-full"
        style={{ objectFit: "fill" }}
      />

      {/* Text content - positioned at ~54% from top of banner */}
      <div
        className="absolute left-0 right-0"
        style={{ top: "54%" }}
      >
        <div className="px-5 sm:px-10 md:px-[131px]">
          <h1 className="text-[24px] leading-[32px] sm:text-[32px] sm:leading-[42px] md:text-[50px] md:leading-[66px] font-light text-white m-0">
            Welcome, I&apos;m Yusuf
          </h1>
          <h2 className="text-[18px] leading-[26px] sm:text-[24px] sm:leading-[32px] md:text-[35px] md:leading-[48px] font-light text-white m-0">
            AI/ML Engineer and Data Scientist
          </h2>
        </div>
      </div>
    </section>
  );
}
