import { getIconClass } from "@/utils/main";
import Link from "next/link";

const PortfolioSocialLink = () => {
  const social_link = [
    { name: "instagram", url: "https://google.com" },
    { name: "twitter", url: "https://google.com" },
    // { name: "facebook", url: "https://google.com" },
    // { name: "dribble", url: "https://google.com" },
    // { name: "linkedin", url: "https://google.com" },
    { name: "github", url: "https://google.com" },
    { name: "email", url: "https://google.com" },
    // { name: "phone_number", url: "https://google.com" },
  ];

  return (
    <>
      {social_link.map((link, index) => (
        <Link href={link.url} className="app-portfolio-navbar-link">
          <i
            className={`${getIconClass(link.name)} app-portfolio-navbar-icon`}
          ></i>
        </Link>
      ))}
    </>
  );
};

export default PortfolioSocialLink;
