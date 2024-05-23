import styles from "../../../styles/button.module.css";

export default function Button({
  type,
  text,
  href,
  onClick,
}: {
  type: "submit" | "button";
  text: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return href ? (
    <a href={href} onClick={(e) => e.preventDefault()}>
      <button type={type} className={styles["custom-button"]} onClick={onClick}>
        {text}
      </button>
    </a>
  ) : (
    <button type={type} className={styles["custom-button"]} onClick={onClick}>
      {text}
    </button>
  );
}
