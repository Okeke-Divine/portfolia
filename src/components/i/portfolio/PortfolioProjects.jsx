import prisma from "@/app/db";
import { imageThumbnail } from "@/constants/shared/constant";
import Link from "next/link";

const PortfolioProjects = async ({ user }) => {
  const userId = user?.id;
  const projects = await prisma.userProjects.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      imageUrl: true,
      title: true,
      description: true,
      tags: true,
      url: true,
    },
  });
  // const projects = [{}, {}, {}, {}, {}];
  return (
    <>
      <section className="app-portfolio-padding" id="projects">
        <div>
          <div className="app-text-light-2 uppercase font-semibold tracking-wide text-sm text-center mb-1">
            Portfolio
          </div>
          <h1 className="text-center text-4xl">My Creative Works</h1>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-2">
          {/* <div className="columns-1 gap-5 lg:gap-8 md:columns-2 lg:columns-3 space-y-5"> */}
            {projects.map((project, index) => (
              <div className="card shadow-xl" key={index}>
                {project.imageUrl != "" ? (
                  <>
                    <figure class="w-full h-[250px] md:h-[200px] overflow-hidden">
                      <img
                        src={project.imageUrl != "" ? project.imageUrl : imageThumbnail}
                        alt={
                          project.title +
                          " - " +
                          project.description +
                          " | " +
                          user.fullname
                        }
                        class="object-cover w-full h-full"
                      />
                    </figure>
                  </>
                ) : (
                  ""
                )}
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p className="max-h-[80px] overflow-y-auto whitespace-pre-line">
                    {project.description}
                  </p>
                  {project.url != "" ? (
                    <>
                      <div className="card-actions justify-end">
                        <Link
                          href={project.url}
                          target="_blank"
                          className="app-primary-button"
                        >
                          View
                        </Link>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {project.tags && project.tags !== "" ? (
                    <>
                      <div className="divider"></div>
                      <div className="card-actions">
                        {project.tags.split(",").map((tag, index) => (
                          <div key={index} className="badge badge-outline">
                            {tag.trim()}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioProjects;
