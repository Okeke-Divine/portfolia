import { defaultImgUrl } from "@/constants/shared/constant";
import Link from "next/link";

function getIconClass(name) {
  switch (name) {
    case "facebook":
      return "fi fi-brands-facebook";
    case "instagram":
      return "fi fi-brands-instagram";
    case "twitter":
      return "fi fi-brands-twitter-alt";
    case "linkedin":
        // return null;
        return "fi fi-brands-linkedin";
    case "github":
      return "fi i-brands-github";
    case "email":
        // return null;
      return "fi fi-rr-envelope";
    case "phone_number":
      return "fi fi-rr-phone-call";
    default:
      return "fi fi-rr-link";
  }
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
            <Link href="#about" className="app-portfolio-navbar-link">
              About
            </Link>
            <Link href="#projects" className="app-portfolio-navbar-link">
              Project
            </Link>
            <Link href="#experience" className="app-portfolio-navbar-link">
              Experience
            </Link>
            <Link href="#services" className="app-portfolio-navbar-link">
              Services
            </Link>
            <Link href="#contact" className="app-portfolio-navbar-link">
              Contact
            </Link>
          </div>
        </div>
        <div className="navbar-end flex gap-2">
          {social_link.map((link, index) => (
            <Link href={link.url} className="block">
              <i
                className={`${getIconClass(
                  link.name
                )} app-portfolio-navbar-icon`}
              ></i>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioNavbar;
