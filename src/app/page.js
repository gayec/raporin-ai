import HeroSection from "../components/HeroSection.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Footer from "../components/Footer.jsx";
import PricingSection from "../components/PricingSection.jsx";
import ContactSection from "../components/ContactSection.jsx";

export default function HomePage() {
  return (
    <main>
      <div className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <PricingSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
