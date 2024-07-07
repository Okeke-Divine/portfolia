import prisma from "@/app/db";
import NotFound from "@/app/not-found";
import ResumeAbout from "@/components/i/resume/ResumeAbout";
import ResumeCertificates from "@/components/i/resume/ResumeCertificates";
import ResumeDownload from "@/components/i/resume/ResumeDownload";
import ResumeEducation from "@/components/i/resume/ResumeEducation";
import ResumeExperience from "@/components/i/resume/ResumeExperience";
import ResumeHeroSection from "@/components/i/resume/ResumeHeroSection";
import ResumeLanguage from "@/components/i/resume/ResumeLanguage";
import ResumeProjects from "@/components/i/resume/ResumeProjects";
import ResumeSkills from "@/components/i/resume/ResumeSkills";
import ResumeSocialLink from "@/components/i/resume/ResumeSocialLink";
import AnalyticTracker from "@/components/shared/AnalyticTracker";
import AnalyticWatcher from "@/components/shared/AnalyticWatcher";
import PoweredBy from "@/components/shared/PoweredBy";
import { defaultImgUrl2 } from "@/constants/shared/constant";
import { _ucfirst, configToDefaultBoolean, retrieveUserConfig } from "@/utils/main";
import Link from "next/link";

// export async function generateMetadata({ params }) {
//   const username = params.username;
//   const user = await prisma.user.findFirst({
//     where: { username },
//     select: {
//       profilePicture_url: true,
//       userDetails: {
//         select: {
//           fullname: true,
//           heroTitle: true,
//           profession: true,
//           bio: true,
//           about: true,
//         },
//       },
//     },
//   });
//   if (!user) {
//     return {
//       title: "404 Not Found",
//     };
//   }

//   const title =
//     _ucfirst(user?.userDetails?.fullname) +
//     " - " +
//     user?.userDetails?.profession +
//     " | Resume";

//   const description =
//     user?.userDetails?.bio != ""
//       ? user?.userDetails?.bio
//       : user?.userDetails?.about != ""
//         ? user?.userDetails?.about
//         : _ucfirst(user?.userDetails?.fullname) +
//         " - " +
//         user?.userDetails?.profession;

//   const img_url =
//     user.profilePicture_url != "" ? user.profilePicture_url : defaultImgUrl2;

//   return {
//     title: title,
//     description: description,
//     images: [img_url],
//     openGraph: {
//       images: [img_url],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: title,
//       description: description,
//       creator: "@okekedivine__",
//       images: {
//         url: img_url,
//         alt: user?.userDetails?.fullname + "'s profile picture",
//       },
//     },
//     icons: {
//       icon: [{ url: img_url }],
//     },
//   };
// }

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

  const userId = user.id;
  const _resumeIsViewable = await retrieveUserConfig('resumeIsViewable', { id_type: 'id', id_value: userId });
  const resumeIsViewable = configToDefaultBoolean(_resumeIsViewable, true);

  if (resumeIsViewable == false) {
    return {
      title: "404 Not Found",
    };
  }

  const fullname = user?.userDetails?.fullname || "Unknown User";
  const profession = user?.userDetails?.profession || "Unknown Profession";
  const bio = user?.userDetails?.bio || "";
  const about = user?.userDetails?.about || "";

  const title = `${_ucfirst(fullname)} - ${profession} | Resume`;

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

  const userId = user.id;
  const _resumeIsViewable = await retrieveUserConfig('resumeIsViewable', { id_type: 'id', id_value: userId });
  const resumeIsViewable = configToDefaultBoolean(_resumeIsViewable, true);

  if (resumeIsViewable == false) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return (
    <>
      {/* //add resume view */}
      <AnalyticTracker username={username} actionType="resumeView" />
      <AnalyticWatcher username={username} parent="resume" />
      {/* end analytics */}
      <div className="bg-gray-200 flex justify-center items-center min-h-[100vh]">
        <div id="resumeContainer" className="h-fit">
          <div className="resumeContainerBackground w-full md:w-[80vw] lg:w-[70vw] xl:w-[60vw] border-l-8 app-border-primary">
            <div className="py-10">
              <ResumeHeroSection user={user} />
              <ResumeSocialLink userId={user.id} />
              <div className="app-resume-padding mt-1">
                <Link
                  target="_blank"
                  href={"/i/" + user.username}
                  className="app-link-primary dmdomo"
                >
                  <i className="fi fi-ts-web-design flaticon-offset pr-1"></i>
                  My Portfolio
                </Link>
              </div>
              <div className="divider"></div>
              <ResumeAbout user={user} />
              <ResumeSkills userId={user.id} />
              <ResumeExperience userId={user.id} />
              <ResumeProjects userId={user.id} />
              <ResumeEducation userId={user.id} />
              <ResumeLanguage userId={user.id} />
              <ResumeCertificates userId={user.id} />
            </div>
          </div>
        </div>

        {/* powered by */}
        <PoweredBy variation={0} />
        <ResumeDownload name={user.userDetails.fullname || user.fullname || user.username} />
      </div>
    </>
  );
}
