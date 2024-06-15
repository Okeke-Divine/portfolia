import prisma from "@/app/db";
import { getIconClass } from "@/utils/main";
import { getUserId } from "@/utils/session";
import Link from "next/link";

const PortfolioSocialLink = async () => {
  const userId = await getUserId();
  const social_links = [
    { name: "instagram", url: "https://google.com" },
    { name: "twitter", url: "https://google.com" },
    // { name: "facebook", url: "https://google.com" },
    // { name: "dribble", url: "https://google.com" },
    // { name: "linkedin", url: "https://google.com" },
    { name: "github", url: "https://google.com" },
    { name: "email", url: "https://google.com" },
    // { name: "phone_number", url: "https://google.com" },
  ];

  const social_link =
    (await prisma.userSocialInfo.findMany({
      where: {
        userId,
      },
      select: {
        name: true,
        value: true,
      },
    })) || [];

  return (
    <>
      {social_link.map((link, index) => (
        <Link
          href={
            link.name == "email"
              ? "mailto:" + link.value
              : link.name == "phone_number"
              ? "tel:" + link.value
              : link.name == "whatsapp"
              ? "https://api.whatsapp.com/?phone=" + link.value
              : link.value
          }
          target="_blank"
          key={index}
          className="app-portfolio-navbar-link"
        >
          <i
            className={`${getIconClass(link.name)} app-portfolio-navbar-icon`}
          ></i>
        </Link>
      ))}
    </>
  );
};

export default PortfolioSocialLink;
