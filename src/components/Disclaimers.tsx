import { cn } from "@/lib/utils";
import { CTABanner } from "@/components/CTABanner";

export function Disclaimers({ className }: { className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <CTABanner />
    </section>
  );
}
