import AngusSection from '../../components/services/AngusSection';
import CallToAction from '../../components/services/CallToAction';
import GovernanceSection from '../../components/services/GovernanceSection';
import HeroSection from '../../components/services/HeroSection';
import ServicesGrid from '../../components/services/ServicesGrid';

export function Services() {
  return (
    <>
      <HeroSection />
      <GovernanceSection />
      <ServicesGrid />
      <AngusSection />
      <CallToAction />
    </>
  );
}