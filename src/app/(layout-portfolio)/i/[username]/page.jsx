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
    </>
  );
}
