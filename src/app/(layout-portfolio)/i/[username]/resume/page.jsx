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
      <div className="bg-gray-200 flex justify-center">
        <div className="bg-white p-5 w-full md:w-[80vw]">
          <h1>Divine</h1>
        </div>
      </div>
    </>
  );
}
