import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";
import GallerySection from "@/components/organisms/GaleriSections";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import ServiceFeatureSection from "@/components/organisms/ServiceSection";

export default function Home() {
  const heroImage = "/hero.jpeg";
  const mainHeadline =
    "ANG'S MOTOR: Ahlinya Performa Motor & Service Terpercaya di Tangerang.";
  const secondaryHeadline =
    "Mulai dari Tune Up hingga Upgrade Performa. Kami Pastikan Motor Anda di Tangan Ahli.";
  return (
    <div className="bg-zinc-50 font-sans w-full min-h-screen">
      <Header />

      <main className="w-full bg-white ">
        <HeroSection
          imageUrl={heroImage}
          headline={mainHeadline}
          subHeadline={secondaryHeadline}
        />
        <ServiceFeatureSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
