import ResumeBuilderPreview from "@/components/resume/builder/ResumeBuilderPreview";
import { getCurrentSession, getUserId } from "@/utils/session";

export const metadata = {
  title: "Resume Builder",
};

const ResumeBuilder = async () => {
  const session = await getCurrentSession();

  const userId = await getUserId('force');
  const resumeIsViewable = await resumeIsViewable('resumeIsViewable', { id_type: 'id', id_value: userId });
  console.log("resumeIsViewable: ",resumeIsViewable);

  return (
    <>
      <ResumeBuilderPreview username={session.user.username} resumeIsViewable={resumeIsViewable} />
    </>
  );
};

export default ResumeBuilder;
