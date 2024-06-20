import AddExperience from "@/components/info/experience/AddExperience"
import ViewExperience from "@/components/info/experience/ViewExperience"

export const metadata = {
  title: "Experience | Info"
}

const ExperienceInfo = () => {
  return (
    <>
      <AddExperience />
      <div className="divider"></div>
      <ViewExperience />
    </>
  )
}

export default ExperienceInfo