import prisma from "@/app/db";
import BasicInfoForm from "@/components/info/BasicInfoForm";
import SignUpFormSkeleton from "@/components/skeleton/SignUpFormSkeleton";
import { getUserId } from "@/utils/session";
import { Suspense } from "react";

export const metadata = {
  title: "Basic Info | Info",
};

const InfoSkills = async () => {
  const userId = await getUserId();
  if (userId == null) return <></>;


  const userDetails = await prisma.userDetails.findUnique({
    where: {
      userId
    }
  }) || {};
  console.log(userDetails);

  return (
    <>
      <div>
        <Suspense fallback={<SignUpFormSkeleton />}>
          <BasicInfoForm userDetails={userDetails} />
        </Suspense>
      </div>
    </>
  );
};

export default InfoSkills;
