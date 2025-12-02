"use client";

import styles from "../../styles/button.module.css";

type ButtonVariant = "bgPink" | "bgWhite" | "bgDark";

interface ButtonProps {
  type: "submit" | "button";
  text: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel: string;
  title?: string;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  type,
  text,
  href,
  onClick,
  disabled = false,
  ariaLabel,
  title,
  variant = "bgPink",
  className,
}: ButtonProps) {
  const getVariantClasses = (): string => {
    const baseClasses = styles["custom-button"];

    const variants = {
      bgPink:
        "bg-pink-700 text-white hover:bg-pink-900 text-lg py-4 flex items-center justify-center",
      bgWhite:
        "bg-white text-pink-700 border border-pink-700 hover:bg-pink-100 text-lg py-4 flex items-center justify-center",
      bgDark:
        "bg-black text-white hover:bg-gray-800 text-lg py-4 flex items-center justify-center",
    };

    return `${baseClasses} ${variants[variant]} ${className || ""}`.trim();
  };

  const commonProps = {
    type,
    className: getVariantClasses(),
    onClick,
    "aria-label": ariaLabel,
    disabled,
    ...(title && { title }),
  };

  const ButtonElement = () => <button {...commonProps}>{text}</button>;

  return href ? (
    <a href={href} className={disabled ? "pointer-events-none" : ""}>
      <ButtonElement />
    </a>
  ) : (
    <ButtonElement />
  );
}
