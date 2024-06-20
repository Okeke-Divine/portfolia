import prisma from "@/app/db";
import Link from "next/link";

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
                <div
                  key={index}
                  className="border-b-2 border-gray-200 border-dotted pb-2 mb-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="font-bold text-xl mb-1">
                      {project.title}
                    </div>
                    {project.url != "" ? (
                      <>
                        <div className="">
                          <Link
                            href={project.url}
                            target="_blank"
                            className="app-link-primary flex items-center dmdomo"
                          >
                            View
                            <i className="fi fi-tr-arrow-up-right-from-square pl-1 text-[10px]"></i>
                          </Link>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* project tags */}
                  {project.tags !== "" ? (
                    <>
                      <div className="mb-2 text-gray-500">
                        {project.tags.split(",").map((tag, index) => (
                          <span key={index}>{tag.trim()}, </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="">
                    <p className="whitespace-pre-line">
                      {project.description}
                    </p>
                  </div>
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
