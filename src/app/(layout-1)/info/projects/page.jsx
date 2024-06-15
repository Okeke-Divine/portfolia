import AddProject from "@/components/info/project/AddProject";
import ViewProjects from "@/components/info/project/ViewProjects";

export const metadata = {
  title: "My Projects | Info",
};

const InfoProjects = () => {
  return (
    <>
      <AddProject />
      <div className="divider"></div>
      <ViewProjects />
    </>
  );
};

export default InfoProjects;
