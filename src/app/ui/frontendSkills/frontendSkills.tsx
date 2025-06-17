import { TbBrandNextjs } from "react-icons/tb";
import SkillItem from "../skillItem/skillItem";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import SkillList from "@/app/components/skillList/skillList";

export default function frontendSkills() {
  return (
    <>
      <SkillList title="Frontend Desktop">
        <SkillItem Icon={TbBrandNextjs} skill="Next" />
        <SkillItem Icon={FaReact} skill="React" />
      </SkillList>

      <SkillList title="Frontend Mobile">
        <SkillItem Icon={FaReact} skill="React Native" />
        <SkillItem Icon={SiFlutter} skill="Flutter" />
      </SkillList>
    </>
  );
}
