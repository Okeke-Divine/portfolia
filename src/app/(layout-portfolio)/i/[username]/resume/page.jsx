import prisma from "@/app/db";
import NotFound from "@/app/not-found";
import ResumeAbout from "@/components/i/resume/ResumeAbout";
import ResumeHeroSection from "@/components/i/resume/ResumeHeroSection";
import ResumeProjects from "@/components/i/resume/ResumeProjects";
import ResumeSkills from "@/components/i/resume/ResumeSkills";
import ResumeSocialLink from "@/components/i/resume/ResumeSocialLink";
import { defaultImgUrl2 } from "@/constants/shared/constant";
import { _ucfirst } from "@/utils/main";
import Link from "next/link";

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

export default async function Resume({ params }) {
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
      <div className="bg-gray-200 flex justify-center min-h-[100vh]">
        <div id="resumeContainer">
          <div className="resumeContainerBackground w-full md:w-[80vw] lg:w-[70vw] xl:w-[60vw] border-l-8 app-border-primary">
            <div className="py-10">
              <ResumeHeroSection user={user} />
              <ResumeSocialLink userId={user.id} />
              <div className="app-resume-padding">
                <Link
                  target="_blank"
                  href={"/i/" + user.username}
                  className="app-link-primary"
                >
                  <i className="fi fi-ts-web-design flaticon-offset pr-1"></i>
                  My Portfolio
                </Link>
              </div>
              <div className="divider"></div>
              <ResumeAbout user={user} />
              <ResumeSkills userId={user.id} />
              <ResumeProjects userId={user.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
