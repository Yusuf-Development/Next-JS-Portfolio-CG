import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { GitHubIcon } from "@/components/footer-icons";

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-cg-gray-light py-16">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <h2 className="mb-4 text-[36px] font-normal text-cg-black">
          Get in touch
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base text-cg-dark">
          Interested in working together or have a question? Feel free to reach
          out through any of the channels below.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:amyusuf.it@gmail.com"
            className="inline-flex items-center gap-2 border-2 border-cg-sapphire px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.5px] text-cg-sapphire no-underline transition-colors hover:bg-cg-sapphire hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href="https://github.com/ayusuf9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-cg-sapphire px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.5px] text-cg-sapphire no-underline transition-colors hover:bg-cg-sapphire hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yusuf9/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-cg-sapphire px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.5px] text-cg-sapphire no-underline transition-colors hover:bg-cg-sapphire hover:text-white"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
