import PortfolioAbout from "@/components/i/portfolio/PortfolioAbout";
import PortfolioExpertise from "@/components/i/portfolio/PortfolioExpertise";
import PortfolioHero from "@/components/i/portfolio/PortfolioHero";
import PortfolioNavbar from "@/components/i/portfolio/PortfolioNavbar";

export function generateMetadata({ params }) {
  return {
    title: params.username,
  };
}

export default function PortFolio({ params }) {
  return (
    <>
      <PortfolioNavbar />
      <PortfolioHero />
      <PortfolioAbout />
      <PortfolioExpertise />
    </>
  );
}
