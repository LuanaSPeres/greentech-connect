import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AudienceSection from "@/components/AudienceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import VideoSection from "@/components/VideoSection";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AudienceSection />
        <HowItWorksSection />
        <VideoSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
