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
        <Link href={link.value} className="app-portfolio-navbar-link">
          <i
            className={`${getIconClass(link.name)} app-portfolio-navbar-icon`}
          ></i>
        </Link>
      ))}
    </>
  );
};

export default PortfolioSocialLink;
