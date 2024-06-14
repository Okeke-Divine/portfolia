import AddSkill from "@/components/info/skills/AddSkill";
import ListSkills from "@/components/info/skills/ListSkills";
import SkillSkeleton from "@/components/skeleton/skills/SkillSkeleton";
import { Suspense } from "react";

export const metadata = {
  title: "Skills | Info",
};

const InfoSkills = () => {
  return (
    <>
      <div>
        <AddSkill />
        <div className="divider"></div>
        <Suspense fallback={<SkillSkeleton />}>
          <ListSkills />
        </Suspense>
      </div>
    </>
  );
};

export default InfoSkills;
