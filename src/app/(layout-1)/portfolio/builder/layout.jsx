import { getCurrentSession } from "@/utils/session";
import Link from "next/link";

const PortfolioBuilderLayout1 = async ({ children }) => {
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
              target="_blank"
              className="app-link-primary font-bold"
            >
              Live Site
              <i className="fi fi-tr-arrow-up-right-from-square text-[15px] pl-1"></i>
            </Link>
          </p>
        </div>
        <div className="divider"></div>
        <div>
          <div className="flex flex-row gap-2">
            <div className="w-[50px]">Link</div>
            <div className="grow"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioBuilderLayout1;
