import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HelixGallery from "@/components/HelixGallery";
import FeaturesSection from "@/components/FeaturesSection";
import StepsSection from "@/components/StepsSection";
import ComparisonSection from "@/components/ComparisonSection";
import SimpleSection from "@/components/SimpleSection";
import StoriesSection from "@/components/StoriesSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-black">
      <Navbar />
      <Hero />

      <div className="relative z-10 bg-black flex flex-col">
        
        <ProblemSection />
        <HelixGallery />
        <FeaturesSection />
        <StepsSection />
        <ComparisonSection />
        
        <SimpleSection />
        
        <StoriesSection />
        <FaqSection />
        <FinalCta />
        <Footer />
        
      </div>
      
    </main>
  );
}