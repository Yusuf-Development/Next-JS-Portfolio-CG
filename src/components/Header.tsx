import { GlobeIcon } from "@/components/icons";

export function Header() {
  return (
    <header className="absolute top-0 left-0 z-3 w-full pt-5 px-4 md:px-[15px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="Yusuf Musa Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-white-4x.png"
            alt="Yusuf Musa"
            className="h-[60px] md:h-[90px] w-auto"
          />
        </a>

        {/* Location bar */}
        <div className="hidden items-center gap-2 md:flex">
          <GlobeIcon className="text-white w-6 h-6" />
          <span className="text-[16px] font-normal text-white">
            <strong className="font-bold">San Francisco</strong>
            <span className="mx-1">|</span>
            <strong className="font-bold">Los Angeles, California</strong>
          </span>
        </div>
      </div>
    </header>
  );
}
