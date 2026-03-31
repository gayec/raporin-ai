import HeroSectionEN from "../../components/en/HeroSectionEN";
import FeaturesSectionEN from "../../components/en/FeaturesSectionEN";
import HowItWorksEN from "../../components/en/HowItWorksEN";
import TestimonialsSectionEN from "../../components/en/TestimonialsSectionEN";
import FAQSectionEN from "../../components/en/FAQSectionEN";
import FooterEN from "../../components/en/FooterEN";
import PricingSectionEN from "../../components/en/PricingSectionEN";
import ContactSectionEN from "../../components/en/ContactSectionEN";

export default function HomePageEN() {
  return (
    <main>
      <div className="pt-20">
        <HeroSectionEN />
        <FeaturesSectionEN />
        <HowItWorksEN />
        <TestimonialsSectionEN />
        <PricingSectionEN />
        <FAQSectionEN />
        <ContactSectionEN />
        <FooterEN />
      </div>
    </main>
  );
}
