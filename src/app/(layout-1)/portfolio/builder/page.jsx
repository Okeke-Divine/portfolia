import { getCurrentSession } from "@/utils/session";

export const metadata = {
  title: "Portfolio Builder",
};

const PortfolioBuilder = async () => {
  const session = await getCurrentSession();
  return (
    <>
      <div className="mockup-browser border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input text-center">{process.env.NEXTAUTH_URL}{session.user.username}</div>
        </div>
        <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
      </div>
    </>
  );
};

export default PortfolioBuilder;
