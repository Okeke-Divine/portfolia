import prisma from "@/app/db";
import PortfolioAbout from "@/components/i/portfolio/PortfolioAbout";
import PortfolioFooter from "@/components/i/portfolio/PortfolioFooter";
// import PortfolioExpertise from "@/components/i/portfolio/PortfolioExpertise";
import PortfolioHero from "@/components/i/portfolio/PortfolioHero";
import PortfolioNavbar from "@/components/i/portfolio/PortfolioNavbar";
import PortfolioProjects from "@/components/i/portfolio/PortfolioProjects";

export async function generateMetadata({ params }) {
  const username = params.username;
  const user = await prisma.user.count({ where: { username } });
  if (!user) {
    return {
      title: "404 | Not Found",
    };
  }
  return {
    title: params.username,
  };
}

export default async function PortFolio({ params }) {
  const username = params.username;
  const user = await prisma.user.findFirst({
    where: { username },
    select: {
      id: true,
      fullname: true,
      username: true,
      email: true,
      profilePicture_url: true,
    },
  });

  if (!user) {
    return <>404 not found</>;
  }

  console.log(user);

  return (
    <>
      <PortfolioNavbar />
      <PortfolioHero user={user} />
      <PortfolioAbout />
      <PortfolioProjects />
      <PortfolioFooter />
      {/* <PortfolioExpertise /> */}
    </>
  );
}
