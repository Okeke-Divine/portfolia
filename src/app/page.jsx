import Comparison from "@/components/landing-page/Comparison";
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

      {/* product hunt embedded code */}
      {/* <a href="https://www.producthunt.com/posts/portfoliia?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-portfoliia" target="_blank" className="z-50">
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=464931&theme=light"
          alt="Portfoliia - Create a Stunning Portfolio and Resume in Minutes, Not Days | Product Hunt"
          style={{ width: '250px', height: '54px' }}  // Note the usage of double curly braces for style object
        />
      </a> */}
      <Comparison />
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
