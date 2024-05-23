import styles from "../../../styles/button.module.css";

export default function Button({
  type,
  text,
  href,
  onClick,
  children,
}: {
  type: "submit" | "button";
  text: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return href ? (
    <a href={href}>
      <button className={styles["custom-button"]} type={type}>
        {text}
      </button>
    </a>
  ) : (
    <button className={styles["custom-button"]} type={type}>
      {text}
    </button>
  );
}
