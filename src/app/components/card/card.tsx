import styles from "../../styles/variables.module.css";
import { ReactNode } from "react";
import Button from "../../components/button/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

interface ArticleProps {
  Icon: (props: IconProps) => JSX.Element;
  title: string;
  children: ReactNode;
  className?: string;
  color?: string;
  button?: { href: string; text: string; ariaLabel: string };
}

export default function Card({
  Icon,
  title,
  children,
  color,
  button,
}: ArticleProps) {
  return (
    <section
      style={{ position: "relative", maxHeight: "45rem" }}
      className={`mb-4 ${color} p-6 rounded-md shadow-lg mr-4 ml-4`}>
      <div className="mb-10">
        <div className="flex items-center justify-center mb-4">
          <Icon size={40} className={styles.colorFirst} />
          <h1 className="ml-4 text-blue-800 text-2xl font-semibold">{title}</h1>
        </div>
        <div className="text-gray-700">{children}</div>
      </div>
      {button && (
        <span
          style={{
            position: "absolute",
            bottom: "0",
            width: "90%",
          }}
          className="flex justify-center items-end mb-2">
          <Button
            href={button.href}
            text={button.text}
            type={"button"}
            ariaLabel={button.text}
          />
        </span>
      )}
    </section>
  );
}
