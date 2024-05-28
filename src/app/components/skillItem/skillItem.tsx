import { IconType } from "react-icons";

export default function SkillItem({
  Icon,
  skill,
}: {
  Icon: IconType;
  skill: string;
}) {
  return (
    <li className="flex items-center">
      <Icon className="ml-2 mr-2" /> {skill}
    </li>
  );
}
