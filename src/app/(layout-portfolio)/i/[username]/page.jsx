import prisma from "@/app/db";
import NotFound from "@/app/not-found";
import PortfolioAbout from "@/components/i/portfolio/PortfolioAbout";
import PortfolioFooter from "@/components/i/portfolio/PortfolioFooter";
// import PortfolioExpertise from "@/components/i/portfolio/PortfolioExpertise";
import PortfolioHero from "@/components/i/portfolio/PortfolioHero";
import PortfolioNavbar from "@/components/i/portfolio/PortfolioNavbar";
import PortfolioProjects from "@/components/i/portfolio/PortfolioProjects";
import { _ucfirst, analysisTracker } from "@/utils/main";

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
      title: "404 | Not Found",
    };
  }

  const title =
    _ucfirst(user.userDetails.fullname) +
    " - " +
    user.userDetails.profession +
    " | Resume";

  const description =
    user.userDetails.bio != ""
      ? user.userDetails.bio
      : user.userDetails.about != ""
      ? user.userDetails.about
      : _ucfirst(user.userDetails.fullname) +
        " - " +
        user.userDetails.profession;

  const img_url =
    user.profilePicture_url != "" ? user.profilePicture_url : defaultImgUrl2;

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
        alt: user.userDetails.fullname + "'s profile picture",
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

  //add portfolio view
  // await analysisTracker(user.username,'portfolioView');

  return (
    <>
      <PortfolioNavbar
        userId={user.id}
        profilePicture_url={user?.profilePicture_url}
      />
      <PortfolioHero user={user} />
      <PortfolioAbout user={user} />
      <PortfolioProjects user={user} />
      <PortfolioFooter user={user} />
      {/* <PortfolioExpertise /> */}
    </>
  );
}
