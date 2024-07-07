import ResumeBuilderPreview from "@/components/resume/builder/ResumeBuilderPreview";
import { configToDefaultBoolean, retrieveUserConfig } from "@/utils/main";
import { getCurrentSession, getUserId } from "@/utils/session";

export const metadata = {
  title: "Resume Builder",
};

const ResumeBuilder = async () => {
  const session = await getCurrentSession();

  const userId = await getUserId('force');
  const _resumeIsViewable = await retrieveUserConfig('resumeIsViewable', { id_type: 'id', id_value: userId });
  const resumeIsViewable = configToDefaultBoolean(_resumeIsViewable);

  return (
    <>
      <ResumeBuilderPreview username={session.user.username} resumeIsViewable={resumeIsViewable} />
    </>
  );
};

export default ResumeBuilder;
