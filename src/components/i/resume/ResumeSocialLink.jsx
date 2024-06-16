import prisma from "@/app/db";
import { getIconClass } from "@/utils/main";
import Link from "next/link";

const ResumeSocialLink = async ({ userId, user }) => {
  if (!userId) {
    return <></>;
  }

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
      <div className="app-resume-padding">
        <div className="flex gap-2 md:gap-5 flex-wrap">
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
                className={`${getIconClass(
                  link.name
                )} app-portfolio-navbar-icon`}
              ></i>
            </Link>
          ))}
        </div>
      </div>
      {/* portfolio link */}
      <div className="app-resume-padding">
        <Link
          href={"/i/" + user.username}
          className="app-text-primary duration-300 hover:app-text-primary-dark font-semibold"
        >
          My Portfolio
        </Link>
      </div>
    </>
  );
};

export default ResumeSocialLink;
