import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import BentoServices from "@/components/sections/BentoServices";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import MetricsSection from "@/components/sections/MetricsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PainSection />
        <BentoServices />
        <ProcessSection />
        <PortfolioSection />
        <MetricsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
