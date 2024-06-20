import AddEducation from "@/components/info/education/AddEducation"
import ViewEducations from "@/components/info/education/ViewEducations"

export const metadata = {
  title: "Education | Info"
}

const EducationInfo = () => {
  return (
    <>
      <AddEducation />
      <div className="divider"></div>
      <ViewEducations />
    </>
  )
}

export default EducationInfo