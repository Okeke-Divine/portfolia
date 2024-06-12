import { defaultImgUrl } from "@/constants/shared/constant";
import Link from "next/link";

const PortfolioNavbar = () => {
  return (
    <>
      <div className="navbar px-5 md:px-10 py-2 md:py-5 bg-base-200">
        <div className="navbar-start">
          <div className="avatar cursor-pointer">
            <div className="w-10 rounded-full ring ring-green-300">
              <img src={defaultImgUrl} alt="User Profile Picture" />
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <div className="flex gap-2 md:gap-5">
            <Link href="#about" className="block">About</Link>
            <Link href="#about" className="block">Project</Link>
            <Link href="#about" className="block">Experience</Link>
            <Link href="#about" className="block">Services</Link>
            <Link href="#about" className="block">Contact</Link>
          </div>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default PortfolioNavbar;
