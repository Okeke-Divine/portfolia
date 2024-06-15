import Link from "next/link";
import { defaultImgUrl } from "@/constants/shared/constant";
import PortfolioSocialLink from "./PortfolioSocialLink";

const PortfolioHero = ({ user }) => {
  return (
    <>
      <div>
        <div className="flex gap-5 flex-col md:flex-row md:gap-12 lg:gap-20 xl:gap-32 py-5 md:py-10 px-10 md:px-20 lg:px-36 place-content-center min-h-[60vh]">
          {/* left */}
          <div className="flex items-center justify-end">
            <div className="w-full h-fit">
              <h1 className="max-w-[500px] text-6xl break-words">
                {user?.userDetails?.heroTitle}
              </h1>
              <p className="app-text-light-2 py-2 max-w-[400px] font-semibold underline text-2xl">
                {user?.userDetails?.profession}
              </p>
              <p className="app-text-light-2 py-2 max-w-[400px]">
                {user?.userDetails?.bio}
              </p>
              {/* <div className="pt-2">
                <Link className="app-primary-button w-fit">
                  Message
                  <i className="fi fi-rr-paper-plane-top flaticon-offset"></i>
                </Link>
              </div> */}
              <div className="divider"></div>
              {/* social links */}
              <div className="mt-2">
                <PortfolioSocialLink userId={user.id} />
              </div>
            </div>
          </div>
          {/* right content */}
          <div>
            <div className="flex justify-center md:justify-end items-center">
              <div className="avatar cursor-pointer">
                <div className="mask mask-squircle bg-green-200 bg-opacity-20 w-52 lg:w-96">
                  <img src={defaultImgUrl} alt="User Profile Picture" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;
