import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { GitHubIcon } from "@/components/footer-icons";

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-cg-gray-light py-32">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <h2 className="mb-4 text-[26px] md:text-[36px] font-normal text-cg-black">
          Get in touch
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base text-cg-dark">
          Interested in working together or have a question? Feel free to reach
          out through any of the channels below.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="mailto:amyusuf.it@gmail.com"
            aria-label="Email"
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-cg-sapphire text-cg-sapphire no-underline transition-colors hover:bg-cg-sapphire hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/ayusuf9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-cg-sapphire text-cg-sapphire no-underline transition-colors hover:bg-cg-sapphire hover:text-white"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yusuf9/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-cg-sapphire text-cg-sapphire no-underline transition-colors hover:bg-cg-sapphire hover:text-white"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
