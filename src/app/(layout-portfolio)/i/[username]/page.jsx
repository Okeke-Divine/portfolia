import config from "@/data/config.json"
import prisma from "@/app/db";
import NotFound from "@/app/not-found";
import PortfolioAbout from "@/components/i/portfolio/PortfolioAbout";
import PortfolioFooter from "@/components/i/portfolio/PortfolioFooter";
// import PortfolioExpertise from "@/components/i/portfolio/PortfolioExpertise";
import PortfolioHero from "@/components/i/portfolio/PortfolioHero";
import PortfolioNavbar from "@/components/i/portfolio/PortfolioNavbar";
import PortfolioProjects from "@/components/i/portfolio/PortfolioProjects";
import AnalyticTracker from "@/components/shared/AnalyticTracker";
import AnalyticWatcher from "@/components/shared/AnalyticWatcher";
import { _ucfirst, analysisTracker } from "@/utils/main";
import Link from "next/link";




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
      userDetails: {
        select: {
          fullname: true,
          heroTitle: true,
          profession: true,
          bio: true,
          about: true,
        },
      },
    },
  });

  if (!user) {
    return (
      <>
        <NotFound />
      </>
    );
  }


  return (
    <>
      {/* //add portfolio view */}
      <AnalyticTracker username={username} actionType="portfolioView" />
      <AnalyticWatcher username={username} parent="portfolio" />
      {/* //end analytics */}
      <PortfolioNavbar
        userId={user.id}
        profilePicture_url={user?.profilePicture_url}
      />
      <PortfolioHero user={user} />
      <PortfolioAbout user={user} />
      <PortfolioProjects user={user} />
      <PortfolioFooter user={user} />
      {/* <PortfolioExpertise /> */}
      {/* powered by */}
      <Link href="/" target="_blank">
        <div className="fixed bottom-5 right-5 bg-white rounded-full flex gap-x-1 items-center duration-300 shadow-md hover:shadow-lg group">
          <div>
            <img
              className="w-10 rounded-full shadow-lg"
              src="/images/logo/logo.png"
              alt={config.app_name + "'s logo"}
            />
          </div>
          <div className="pr-2 w-[0px] duration-300 hidden group-hover:w-full  group-hover:block">Powered  by <span className="font-bold"> {config.app_name}</span> </div>
        </div>
      </Link>
    </>
  );
}
