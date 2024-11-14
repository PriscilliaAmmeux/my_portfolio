import { TbBrandNextjs } from "react-icons/tb";
import SkillItem from "../skillItem/skillItem";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import SkillList from "@/app/components/skillList/skillList";

export default function frontendSkills() {
  return (
    <SkillList title="Frontend:">
      <SkillItem Icon={TbBrandNextjs} skill="Next.js," />
      <SkillItem Icon={FaVuejs} skill="Vue3," />
      <SkillItem Icon={FaReact} skill="React," />
      <SkillItem Icon={SiFlutter} skill="Flutter" />
    </SkillList>
  );
}
