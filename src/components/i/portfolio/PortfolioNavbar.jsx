import { defaultImgUrl } from "@/constants/shared/constant";
import Link from "next/link";

const PortfolioNavbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="avatar cursor-pointer">
            <div className="w-10 rounded-full ring ring-green-300">
              <img src={defaultImgUrl} alt="User Profile Picture" />
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="" className="">
            About
          </Link>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default PortfolioNavbar;
