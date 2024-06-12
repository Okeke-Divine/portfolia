import { getCurrentSession } from "@/utils/session";

const PortfolioBuilder = async () => {
  const session = await getCurrentSession();
  return (
    <>
      <div>
        <h1 className="flex items-center gap-2">
          <i className="fi fi-tr-house-chimney titleIcon"></i> Welcome,{" "}
          <span className="capitalize">{session.user.name}</span>
        </h1>
        <p>No code Portfolio & Resume builder.</p>
      </div>
    </>
  );
};

export default PortfolioBuilder;
