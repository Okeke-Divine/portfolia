import prisma from "@/app/db";
import NotFound from "@/app/not-found";
import { _ucfirst } from "@/utils/main";

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
        <div className="bg-white w-full md:w-[80vw] lg:w-[70vw] xl:w-[60vw]">
          <div className="py-10">
            <div className="app-resume-padding">
              <h1 className="text-6xl">Okeke Divine-Vessel.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
