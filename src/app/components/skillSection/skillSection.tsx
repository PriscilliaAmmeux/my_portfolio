import { ReactNode } from 'react';

interface SkillSectionProps {
  title: string;
  children: ReactNode;
}

export default function SkillSection({ title, children }: SkillSectionProps) {
  return (
    <section className="mb-4">
      <h3 className="flex items-center font-bold">{title}</h3>
      <li className="flex items-center ml-6">{children}</li>
    </section>
  );
}
