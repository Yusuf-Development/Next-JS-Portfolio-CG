import { cn } from "@/lib/utils";
import { DownloadIcon } from "@/components/icons";

const bottomLinks = [
  { label: "Email", href: "mailto:amyusuf.it@gmail.com" },
  { label: "GitHub", href: "https://github.com/ayusuf9" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yusuf9/" },
  { label: "Download CV", href: "/images/yusuf_resume.pdf", isDownload: true },
];

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("w-full", className)}>
      <div className="px-5 md:px-8" style={{ backgroundColor: "rgb(39, 39, 39)" }}>
        <div className="mx-auto grid max-w-[1280px] gap-6 py-8">
          {/* Copyright */}
          <p className="m-0 text-center text-[16px] font-normal text-white">
            Copyright &copy; 2026 Yusuf. All rights reserved.
          </p>

          {/* Bottom links */}
          <nav
            className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:gap-0 justify-center"
            aria-label="Contact links"
          >
            {bottomLinks.map((link, i) => (
              <span
                key={link.label}
                className="flex items-center sm:border-r sm:last:border-r-0 sm:border-[rgb(146,146,146)] sm:px-6"
              >
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-white no-underline hover:underline"
                  {...(link.label === "Download CV"
                    ? { download: true }
                    : link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                >
                  {"isDownload" in link && link.isDownload && (
                    <DownloadIcon className="h-3.5 w-3.5" />
                  )}
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
