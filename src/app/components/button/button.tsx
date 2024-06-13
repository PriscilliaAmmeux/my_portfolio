"use client";

import styles from "../../styles/button.module.css";

export default function Button({
  type,
  text,
  href,
  onClick,
  disabled,
  ariaLabel,
  title,
}: {
  type: "submit" | "button";
  text: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  ariaLabel: string;
  title?: string;
}) {
  return href ? (
    <a href={href}>
      <button
        type={type}
        className={styles["custom-button"]}
        onClick={onClick}
        aria-label={ariaLabel}>
        {text}
      </button>
    </a>
  ) : (
    <button
      type={type}
      className={styles["custom-button"]}
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}>
      {text}
    </button>
  );
}
