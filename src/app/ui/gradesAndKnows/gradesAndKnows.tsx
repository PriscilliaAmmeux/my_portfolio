import SkillsTechnical from "../skillsTechnical/skillsTechnical";
import SkillsAdministrative from "../skillsAdministrative/skillsAdministrative";
import QualificationsTraining from "../qualificationsTraining/qualificationsTraining";

export default function GradesAndKnows() {
  return (
    <section>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
        {/* Technical skills */}
        <SkillsTechnical />

        {/* Administrative skills */}
        <SkillsAdministrative />
      </div>
      {/* Qualifications and training */}
      <div className="w-full max-w-none">
        <QualificationsTraining />
      </div>
    </section>
  );
}
