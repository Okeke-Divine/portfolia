import { getCurrentSession } from "@/utils/session";
import Link from "next/link";

export const metadata = {
  title: "Portfolio Builder"
}

const PortfolioBuilder = async () => {
  const session = await getCurrentSession();
  return (
    <>
      <div>
        <div>
          <h1 className="flex items-center gap-2">
            <i className="fi fi-ts-web-design titleIcon"></i> Portfolio Builder
          </h1>
          <p className="app-text-light">
            No code Portfolio builder |{" "}
            <Link
              href={"/i/" + session.user.username}
              target="_blanks"
              className="app-link-primary font-bold"
            >
              Live Preview
              <i className="fi fi-tr-arrow-up-right-from-square text-[15px] pl-1"></i>
            </Link>
          </p>
        </div>
        <div className="divider"></div>
        <div>...</div>
      </div>
    </>
  );
};

export default PortfolioBuilder;
