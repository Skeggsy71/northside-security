import { Hero } from "@/components/hero";
import { SocialProofBar } from "@/components/social-proof-bar";
import { ServicesOverview } from "@/components/services-overview";
import { WhySection } from "@/components/why-section";
import { PricingSnapshot } from "@/components/pricing-snapshot";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ServicesOverview />
      <WhySection />
      <PricingSnapshot />
      <CTASection />
    </>
  );
}
