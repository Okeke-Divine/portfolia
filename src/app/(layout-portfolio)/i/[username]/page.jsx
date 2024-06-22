import config from "@/data/config.json"
import prisma from "@/app/db";
import NotFound from "@/app/not-found";
import PortfolioAbout from "@/components/i/portfolio/PortfolioAbout";
import PortfolioFooter from "@/components/i/portfolio/PortfolioFooter";
import PortfolioHero from "@/components/i/portfolio/PortfolioHero";
import PortfolioNavbar from "@/components/i/portfolio/PortfolioNavbar";
import PortfolioProjects from "@/components/i/portfolio/PortfolioProjects";
import AnalyticTracker from "@/components/shared/AnalyticTracker";
import AnalyticWatcher from "@/components/shared/AnalyticWatcher";
import { _ucfirst } from "@/utils/main";
import Link from "next/link";
import { defaultImgUrl2 } from "@/constants/shared/constant";
import PoweredBy from "@/components/shared/PoweredBy";


export async function generateMetadata({ params }) {
  const username = params.username;
  const user = await prisma.user.findFirst({
    where: { username },
    select: {
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
    return {
      title: "404 Not Found",
    };
  }

  const fullname = user?.userDetails?.fullname || "Unknown User";
  const profession = user?.userDetails?.profession || "Unknown Profession";
  const bio = user?.userDetails?.bio || "";
  const about = user?.userDetails?.about || "";

  const title = `${_ucfirst(fullname)} - ${profession} | Portfolio`;

  const description = bio || about || `${_ucfirst(fullname)} - ${profession}`;

  const img_url = user.profilePicture_url || defaultImgUrl2;

  return {
    title: title,
    description: description,
    images: [img_url],
    openGraph: {
      images: [img_url],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      creator: "@okekedivine__",
      images: {
        url: img_url,
        alt: `${fullname}'s profile picture`,
      },
    },
    icons: {
      icon: [{ url: img_url }],
    },
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

      {/* powered by */}
      <PoweredBy variation={0} />

    </>
  );
}
