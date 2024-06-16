import PortfolioBuilderPreview from "@/components/portfolio/builder/PortfolioBuilderPreview";
import { getCurrentSession } from "@/utils/session";

export const metadata = {
  title: "Resume Builder",
};

const ResumeBuilder = async () => {
  const session = await getCurrentSession();
  return (
    <>
      <PortfolioBuilderPreview username={session.user.username} />
    </>
  );
};

export default ResumeBuilder;