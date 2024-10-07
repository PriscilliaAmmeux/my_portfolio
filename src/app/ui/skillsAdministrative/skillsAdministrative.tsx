import Card from "@/app/components/card/card";
import SkillSection from "@/app/components/skillSection/skillSection";
import { CgAlbum } from "react-icons/cg";
import skillsData from "@/data/skillsAdministrative.json";

export default function SkillsAdministrative() {
  return (
    <Card
      className="w-full sm:w-1/2"
      Icon={CgAlbum}
      title="Mes compétences administratives"
      color="bg-blue-100">
      <ul className="text-gray-700 list-disc ml-3">
        {skillsData.map((section, index) => (
          <SkillSection key={index} title={section.title}>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </SkillSection>
        ))}
      </ul>
    </Card>
  );
}
