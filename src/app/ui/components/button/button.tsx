import styles from "../../../styles/button.module.css";

export default function Button({
  text,
  href,
}: {
  text: string;
  href?: string;
}) {
  return href ? (
    <a href={href}>
      <button className={styles["custom-button"]} type="button">
        {text}
      </button>
    </a>
  ) : (
    <button className={styles["custom-button"]} type="button">
      {text}
    </button>
  );
}
