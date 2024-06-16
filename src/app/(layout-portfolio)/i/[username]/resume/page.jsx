import prisma from "@/app/db";
import NotFound from "@/app/not-found";
import ResumeAbout from "@/components/i/resume/ResumeAbout";
import ResumeHeroSection from "@/components/i/resume/ResumeHeroSection";
import ResumeSocialLink from "@/components/i/resume/ResumeSocialLink";
import { _ucfirst } from "@/utils/main";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const username = params.username;
  const user = await prisma.user.findFirst({
    where: { username },
    select: { fullname: true },
  });
  if (!user) {
    return {
      title: "404 | Not Found",
    };
  }
  return {
    title: _ucfirst(user.fullname),
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
          <div className="bg-white w-full md:w-[80vw] lg:w-[70vw] xl:w-[60vw] border-l-8 app-border-primary">
            <div className="py-10">
              <ResumeHeroSection user={user} />
              <ResumeSocialLink userId={user.id} />
              <div className="app-resume-padding">
                <Link
                  href={"/i/" + user.username}
                  className="app-text-primary duration-300 hover:app-text-primary-dark font-semibold"
                >
                  My Portfolio
                </Link>
              </div>
              <div className="divider"></div>
              <ResumeAbout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
