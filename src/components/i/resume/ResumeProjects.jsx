import prisma from "@/app/db";

const ResumeProjects = async ({ userId }) => {
  const projects = await prisma.userProjects.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      tags: true,
      url: true,
    },
  });

  return (
    <>
      {projects.length > 0 ? (
        <>
          <div className="app-resume-padding app-resume-container-margin-top">
            <div className="divider divider-start">
              <h3 className="uppercase">Projects</h3>
            </div>
            <div>
              {projects.map((project, index) => (
                <div key={index} className="mb-5">
                  <div className="font-bold text-xl">{project.title}</div>
                  <div className="">{project.description}</div>
                  {/* project tags */}
                  {project.tags !== "" ? (
                    <>
                      <div className="flex flex-wrap gap-2">
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
              ))}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ResumeProjects;
