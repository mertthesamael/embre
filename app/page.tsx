import BannerSection from "@/containers/banner-section";
import FooterSection from "@/containers/footer-section";
import HeroSection from "@/containers/hero-section";
import InfoSection from "@/containers/info-section";
import NewsSection from "@/containers/news-section";
import PlanetSection from "@/containers/planet-section";
import ProductsSection from "@/containers/products-section";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <HeroSection />
      <InfoSection />
      <ProductsSection />
      <PlanetSection />
      <NewsSection />
      <BannerSection />
      <FooterSection />
    </main>
  );
}
