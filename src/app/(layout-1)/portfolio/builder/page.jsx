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
          <div className="input text-center">{process.env.NEXTAUTH_URL}i/{session.user.username}</div>
        </div>
        <div className="">
          <iframe className="w-full min-h-[50vh]" src={"/i/"+session.user.username}></iframe>
        </div>
      </div>
    </>
  );
};

export default PortfolioBuilder;
