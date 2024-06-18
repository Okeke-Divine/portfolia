import FAQ from "@/components/landing-page/FAQ";
import Features from "@/components/landing-page/Features";
import HeroSection from "@/components/landing-page/HeroSection";
import HowItWorks from "@/components/landing-page/HowItWorks";
import LowerCallToAction from "@/components/landing-page/LowerCallToAction";
import Reviews from "@/components/landing-page/Reviews";
import Footer from "@/components/shared/Footer";
import MinorFooter from "@/components/shared/MinorFooter";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Reviews />
      <FAQ />
      <LowerCallToAction />
      <Footer />
      <MinorFooter />
    </>
  );
}
