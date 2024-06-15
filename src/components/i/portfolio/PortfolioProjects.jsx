import prisma from "@/app/db";
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
            {projects.map((project, index) => (
              <div className="card shadow-xl" key={index}>
                {project.imageUrl != "" ? (
                  <>
                    <figure class="w-full h-[200px] overflow-hidden">
                      <img
                        src={project.imageUrl}
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
                  <p className="max-h-[80px] overflow-y-auto">
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
                  {project.tags != "" ? (
                    <>
                      <div className="divider"></div>
                      <div className="card-actions">
                        <div className="badge badge-outline">CSS</div>
                        <div className="badge badge-outline">HTML</div>
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
