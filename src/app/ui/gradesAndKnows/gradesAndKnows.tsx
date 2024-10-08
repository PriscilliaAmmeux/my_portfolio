import SkillsTechnical from "../skillsTechnical/skillsTechnical";
import QualificationsTraining from "../qualificationsTraining/qualificationsTraining";

export default function GradesAndKnows() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
        <SkillsTechnical />
        <QualificationsTraining />
      </div>
    </section>
  );
}
