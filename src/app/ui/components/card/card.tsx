import styles from "../../../styles/variables.module.css";
import { ReactNode } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

interface ArticleProps {
  Icon: (props: IconProps) => JSX.Element;
  title: string;
  children: ReactNode;
}

export default function Card({ Icon, title, children }: ArticleProps) {
  return (
    <section className="mb-4 bg-blue-100 p-6 rounded-md shadow-lg mr-4 ml-4">
      <div className="flex items-center justify-center mb-4">
        <Icon size={40} className={styles.iconColor} />
        <h1 className="ml-4 text-blue-800 text-2xl font-semibold">{title}</h1>
      </div>
      <ul className="text-gray-700 list-disc ml-5">{children}</ul>
    </section>
  );
}
