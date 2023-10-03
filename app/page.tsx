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
      <section className="w-full py-[20px] bg-[--primary-color] text-center">
        <h1 className="text-2xl text-white font-formula tracking-widest font-bold uppercase">
          Whatever the activity, the desire to improve is the purest path to
          satisfaction.
        </h1>
      </section>
    </main>
  );
}
