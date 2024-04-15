import styles from "../../../styles/button.module.css";

export default function Button({
  type,
  text,
  href,
}: {
  type: "submit" | "button";
  text: string;
  href?: string;
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
