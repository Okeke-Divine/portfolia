import prisma from "@/app/db";
import { defaultImgUrl } from "@/constants/shared/constant";

const PortfolioAbout = async ({ user }) => {
  const userId = user.id;
  const skills = await prisma.userSkills.findMany({
    where: { userId },
  });
  

  return (
    <>
      <section className="app-portfolio-padding bg-base-200" id="about">
        <div>
          <div className="app-text-light-2 uppercase text-sm font-semibold tracking-wide">
            Nice to meet you.
          </div>
          <div>
            <h1 className="max-w-[80%] md:max-w-[600px] text-4xl">
              {/* Hey, I'm John - Full Stack Web Developer. */}
              {user?.userDetails?.heroTitle ? user?.userDetails?.heroTitle+ " - " : ""}
              {user?.userDetails?.profession}
            </h1>
          </div>
          {/* about */}
          <div className="mt-2 app-text-light-2 app-portfolio-about-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              beatae consequatur nisi obcaecati voluptas modi laudantium quo,
              maiores cum ipsam quam nostrum nulla neque, rerum dicta tempora
              fugit, possimus illo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              beatae consequatur nisi obcaecati voluptas modi laudantium quo,
              maiores cum ipsam quam nostrum nulla neque, rerum dicta tempora
              fugit, possimus illo. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Sequi beatae consequatur nisi obcaecati voluptas
              modi laudantium quo, maiores cum ipsam quam nostrum nulla neque,
              rerum dicta tempora fugit, possimus illo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              beatae consequatur nisi obcaecati voluptas modi laudantium quo,
              maiores cum ipsam quam nostrum nulla neque, rerum dicta tempora
              fugit, possimus illo.
            </p>
          </div>
          {/* divider */}
          <div className="divider"></div>
          {/* profile */}
          <div className="flex flex-wrap gap-2 items-center mt-2">
            <div className="avatar cursor-pointer">
              <div className="w-12 rounded-full ring ring-green-300">
                <img src={defaultImgUrl} alt="User Profile Picture" />
              </div>
            </div>
            <div className="grow">
              <div className="font-bold">John Doe</div>
              <div className="app-text-light-2">
                Full Stack Web Developer @ Figma
              </div>
            </div>
          </div>
          {/* divider */}
          {skills.length > 0 ? (
            <>
              <div className="divider"></div>
              {/* skills */}
              <div>
                <div className="app-text-light-2 uppercase font-semibold tracking-wide text-xl mb-2">
                  Skills
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-6 xl:grid-cols-8">
                  {skills.map((skill, index) => (
                    <>
                      <div
                        key={index}
                        className="rounded-lg shadow-sm duration-300 hover:shadow-lg bg-white text-center p-5"
                      >
                        <div className="capitalize font-bold">
                          {skill.skill_name}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioAbout;
