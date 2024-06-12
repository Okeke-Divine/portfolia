import PortfolioBuilderPreview from "@/components/portfolio/builder/PortfolioBuilderPreview";
import { getCurrentSession } from "@/utils/session";

export const metadata = {
  title: "Portfolio Builder",
};

const PortfolioBuilder = async () => {
  const session = await getCurrentSession();
  return (
    <>
      <PortfolioBuilderPreview username={session.user.} />
    </>
  );
};

export default PortfolioBuilder;