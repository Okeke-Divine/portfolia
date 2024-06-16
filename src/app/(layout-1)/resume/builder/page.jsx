import ResumeBuilderPreview from "@/components/resume/builder/ResumeBuilderPreview";
import { getCurrentSession } from "@/utils/session";

export const metadata = {
  title: "Resume Builder",
};

const ResumeBuilder = async () => {
  const session = await getCurrentSession();
  return (
    <>
      <ResumeBuilderPreview username={session.user.username} />
    </>
  );
};

export default ResumeBuilder;
