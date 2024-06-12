import { getCurrentSession } from "@/utils/session";
import Link from "next/link";

const PortfolioBuilder = async () => {
  const session = await getCurrentSession();
  return (
    <>
      <div>
        <h1 className="flex items-center gap-2">
          <i className="fi fi-ts-web-design titleIcon"></i> Portfolio Builder
        </h1>
        <p className="app-text-light">No code Portfolio builder | <Link href={"/i/"+session.user.username} className="app-link-primary font-bold">Live Preview</Link></p>
      </div>
    </>
  );
};

export default PortfolioBuilder;
