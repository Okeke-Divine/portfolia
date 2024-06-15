import prisma from "@/app/db";
import BasicInfoForm from "@/components/info/BasicInfoForm";
import SignUpFormSkeleton from "@/components/skeleton/SignUpFormSkeleton";
import { getUserId } from "@/utils/session";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Basic Info | Info",
};

const InfoSkills = async () => {
  const userId = await getUserId();
  if (userId == null) return <></>;

  const userDetails =
    (await prisma.userDetails.findUnique({
      where: {
        userId,
      },
    })) || {};

  return (
    <>
      <div>
        <Suspense fallback={<SignUpFormSkeleton />}>
          <BasicInfoForm userDetails={userDetails} />
          <div className="divider"></div>
          <Link
            href="/settings/profile/picture/change"
            className="w-full app-bg-primary duration-300 hover:app-bg-primary-dark btn btn-md text-white"
          >
            Chnage Profile Picture
          </Link>
        </Suspense>
      </div>
    </>
  );
};

export default InfoSkills;
