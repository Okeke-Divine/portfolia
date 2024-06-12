import PortfolioAbout from "@/components/i/portfolio/PortfolioAbout";
import PortfolioFooter from "@/components/i/portfolio/PortfolioFooter";
// import PortfolioExpertise from "@/components/i/portfolio/PortfolioExpertise";
import PortfolioHero from "@/components/i/portfolio/PortfolioHero";
import PortfolioNavbar from "@/components/i/portfolio/PortfolioNavbar";
import PortfolioProjects from "@/components/i/portfolio/PortfolioProjects";

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
      <PortfolioProjects />
      <PortfolioFooter />
      {/* <PortfolioExpertise /> */}
    </>
  );
}
