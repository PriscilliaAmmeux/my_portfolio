import { FaJava, FaNodeJs } from "react-icons/fa";
import SkillItem from "../skillItem/skillItem";
import { BiLogoSpringBoot } from "react-icons/bi";
import SkillList from "@/app/components/skillList/skillList";

export default function backendSkills() {
  return (
    <SkillList title="Backend">
      <SkillItem Icon={FaJava} skill="Java," />
      <SkillItem Icon={BiLogoSpringBoot} skill="SpringBoot," />
      <SkillItem Icon={FaNodeJs} skill="Node.js" />
    </SkillList>
  );
}
