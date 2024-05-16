import styles from "../../../styles/variables.module.css";
import { ReactNode } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

interface ArticleProps {
  Icon: (props: IconProps) => JSX.Element;
  title: string;
  children: ReactNode;
  className?: string;
  color?: string;
}

export default function Card({ Icon, title, children, color }: ArticleProps) {
  return (
    <section className={`mb-4 ${color} p-6 rounded-md shadow-lg mr-4 ml-4`}>
      <div className="flex items-center justify-center mb-4">
        <Icon size={40} className={styles.colorFirst} />
        <h1 className="ml-4 text-blue-800 text-2xl font-semibold">{title}</h1>
      </div>
      <ul className="text-gray-700 list-disc ml-5">{children}</ul>
    </section>
  );
}
