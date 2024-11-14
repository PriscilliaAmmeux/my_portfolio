interface SkillsListProps {
  title: string;
  children: React.ReactNode;
}

export default function SkillList({ title, children }: SkillsListProps) {
  return (
    <li className="flex sm:flex-col gap-1">
      <h2 className="underline">{title}</h2>
      <ul className="flex flex-row sm:flex-col gap-1">{children}</ul>
    </li>
  );
}
