import AddSkill from "@/components/info/skills/AddSkill"
import ListSkills from "@/components/info/skills/ListSkills"

export const metadata = {
    title: "Skills | Info"
}

const InfoSkills = () => {
  return (
    <>
      <div>
        <AddSkill />
        <div className="divider"></div>
        <ListSkills />
      </div>
    </>
    )
}

export default InfoSkills