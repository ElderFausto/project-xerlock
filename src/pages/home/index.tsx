import CallToAction from "../../components/home/CallToAction";
import CompanyStrength from "../../components/home/CompanyStrength";
import Hero from "../../components/home/Hero";
import ProblemsSection from "../../components/home/ProblemsSection";
import ProductsSection from "../../components/home/ProductsSection";
import SuperiotySection from "../../components/home/SuperioritySection";
import NewsletterSection from "../../components/home/NewsletterSection";

export function Home() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <CallToAction />
      <ProductsSection />
      <CompanyStrength />
      <SuperiotySection />
      <NewsletterSection />
    </>
  );
}
