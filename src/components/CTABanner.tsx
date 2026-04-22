import { cn } from "@/lib/utils";
import { DownloadIcon } from "@/components/icons";

export function CTABanner({ className }: { className?: string }) {
  return (
    <section
      className={cn("w-full", className)}
      style={{ backgroundColor: "rgb(0, 95, 158)" }}
    >
      <div
        className="mx-auto max-w-7xl"
        style={{ padding: "32px" }}
      >
        <h2
          className="m-0 text-[30px] font-normal leading-[36px] text-white"
        >
          Learn more about my background and experience by downloading my resume.
        </h2>
        <a
          href="/individual/pdf/shareholder/ITGEBR-081-1021544.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 border-none bg-white px-6 py-4 text-[14px] font-semibold uppercase tracking-[0.5px] no-underline"
          style={{ color: "rgb(0, 58, 102)" }}
        >
          DOWNLOAD RESUME
          <DownloadIcon />
        </a>
      </div>
    </section>
  );
}
