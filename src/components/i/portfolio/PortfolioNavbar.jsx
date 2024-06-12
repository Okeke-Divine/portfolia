import { defaultImgUrl } from "@/constants/shared/constant";
import Link from "next/link";

function getIconClass(iconName){
    return "fi fi-brands-facebook";
}

const PortfolioNavbar = () => {
  const social_link = [
    { name: "instagram", url: "https://google.com" },
    { name: "twitter", url: "https://google.com" },
    { name: "facebook", url: "https://google.com" },
    { name: "dribble", url: "https://google.com" },
    { name: "linkedin", url: "https://google.com" },
    { name: "github", url: "https://google.com" },
    { name: "email", url: "https://google.com" },
    { name: "phone_number", url: "https://google.com" },
  ];

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
            <Link href="#about" className="block">
              About
            </Link>
            <Link href="#about" className="block">
              Project
            </Link>
            <Link href="#about" className="block">
              Experience
            </Link>
            <Link href="#about" className="block">
              Services
            </Link>
            <Link href="#about" className="block">
              Contact
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          {social_link.map((link, index) => (
            <Link href={link.url}>
              {link.name == "facebook" ? (
                <>
                  <i className="fi fi-brands-facebook app-portfolio-navbar-icon"></i>
                </>
              ) : (
                ""
              )}
                  <i className={`${getIconClass('facebook')} app-portfolio-navbar-icon`}></i>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioNavbar;
