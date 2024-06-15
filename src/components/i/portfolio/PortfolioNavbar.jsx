import { defaultImgUrl } from "@/constants/shared/constant";
import Link from "next/link";
import PortfolioSocialLink from "./PortfolioSocialLink";

const PortfolioNavbar = ({ userId }) => {
  return (
    <>
      <div className="navbar px-5 md:px-10 py-5 md:py-5 bg-base-200">
        <div className="navbar-start">
          <div className="avatar cursor-pointer">
            <div className="w-10 rounded-full ring ring-green-300">
              <img src={defaultImgUrl} alt="User Profile Picture" />
            </div>
          </div>
        </div>
        <div className="hidden md:block navbar-center">
          <div className="hidden md:flex gap-2 md:gap-5">
            <Link href="#about" className="app-portfolio-navbar-link">
              About
            </Link>
            <Link href="#projects" className="app-portfolio-navbar-link">
              Projects
            </Link>
            {/* <Link href="#expertise" className="app-portfolio-navbar-link">
              Expertise
            </Link>
            <Link href="#experience" className="app-portfolio-navbar-link">
              Experience
            </Link>
            <Link href="#services" className="app-portfolio-navbar-link">
              Services
            </Link>
            <Link href="#contact" className="app-portfolio-navbar-link">
              Contact
            </Link> */}
          </div>
        </div>
        <div className="navbar-end">
          <PortfolioSocialLink userId={userId} />
        </div>
      </div>
    </>
  );
};

export default PortfolioNavbar;
