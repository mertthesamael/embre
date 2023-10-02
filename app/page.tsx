import HeroSection from "@/containers/hero-section";
import InfoSection from "@/containers/info-section";

export default function Home() {
  return (
    <main className='flex flex-col justify-center'>
        <HeroSection />
        <InfoSection />
    </main>
  )
}
