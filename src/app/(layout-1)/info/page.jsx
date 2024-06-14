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

  return (
    <>
      <div>
        <Suspense fallback={<SignUpFormSkeleton />}>
          <BasicInfoForm />
        </Suspense>
      </div>
    </>
  );
};

export default InfoSkills;
