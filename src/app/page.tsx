import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StickyTabNav } from "@/components/StickyTabNav";
import { CategoryTabs } from "@/components/CategoryTabs";
import { TimeTestedSection } from "@/components/TimeTestedSection";
import { QuarterlyResults } from "@/components/QuarterlyResults";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative">
        <Header />
        <HeroSection />
      </div>
      <StickyTabNav />
      <CategoryTabs />
      <TimeTestedSection />
      <QuarterlyResults />
      <ContactSection />
      <Footer />
    </main>
  );
}
