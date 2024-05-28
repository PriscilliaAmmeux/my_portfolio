"use client";

import styles from "../../styles/button.module.css";

export default function Button({
  type,
  text,
  href,
  onClick,
  disabled,
}: {
  type: "submit" | "button";
  text: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}) {
  return href ? (
    <a href={href}>
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
