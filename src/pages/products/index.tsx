import FeatureList from '../../components/products/FeatureList';
import Hero from '../../components/products/Hero';
import ProductCard from '../../components/products/ProductCard';
import ProductSection from '../../components/products/ProductSection';

export function Products() {
  return (
    <>
      <Hero />
      <ProductSection />
      <FeatureList features={[]} />
    </> 
  );
}