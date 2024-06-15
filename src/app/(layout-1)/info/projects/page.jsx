import ViewProjects from "@/app/api/info/project/ViewProjects";
import AddProject from "../../../api/info/project/AddProject";

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
