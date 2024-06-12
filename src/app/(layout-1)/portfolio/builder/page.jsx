import { getCurrentSession } from "@/utils/session";

const PortfolioBuilder = async () => {
  const session = await getCurrentSession();
  return (
    <>
      <div>
        <h1 className="flex items-center gap-2">
          <i className="fi fi-ts-web-design titleIcon"></i> Portfolio Builder
        </h1>
        <p className="app-text-light">No code Portfolio & Resume builder.</p>
      </div>
    </>
  );
};

export default PortfolioBuilder;
