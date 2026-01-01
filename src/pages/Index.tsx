import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ProcessSteps } from "@/components/ProcessSteps";
import { UseCaseSection } from "@/components/UseCaseSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { PowerSection } from "@/components/PowerSection";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <ProductShowcase />
        <ProcessSteps />
        <UseCaseSection />
        <PowerSection />
        <FeaturesGrid />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
};

export default Index;
