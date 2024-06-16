const ResumeProjects = async ({ userId }) => {
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

  return (
    <>
      {projects.length > 0 ? (
        <>
          <div className="app-resume-padding">
            <div className="divider divider-start">
              <h3 className="uppercase">Projects</h3>
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
