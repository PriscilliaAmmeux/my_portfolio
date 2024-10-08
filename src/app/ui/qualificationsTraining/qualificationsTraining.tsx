import { GrCertificate } from "react-icons/gr";
import Card from "../../components/card/card";
import grades from "../../../data/grades.json";
import GradesItems from "../gradesItems/gradesItems";

export default function QualificationsTraining() {
  return (
    <Card
      Icon={GrCertificate}
      title="Mes diplômes & formations"
      color="bg-blue-100">
      <ul>
        {grades.map((grades) => (
          <GradesItems
            key={grades.id}
            title={grades.title}
            description={grades.description}
          />
        ))}
      </ul>
    </Card>
  );
}
