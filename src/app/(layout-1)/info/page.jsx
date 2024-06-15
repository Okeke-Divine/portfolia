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
            className="w-full bg-ghost duration-300 btn btn-md hover:bg-gray-200"
          >
            Change Profile Picture
          </Link>
        </Suspense>
      </div>
    </>
  );
};

export default InfoSkills;
