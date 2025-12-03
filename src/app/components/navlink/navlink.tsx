"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive: boolean;
  forceWhiteText?: boolean;
}

export default function NavLink({
  href,
  title,
  children,
  className,
  onClick,
  forceWhiteText = false,
}: NavLinkProps) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname, href]);

  const textColorClass = forceWhiteText
    ? "text-white"
    : "dark:text-white text-pink-700";

  return (
    <Link
      href={href}
      className={`group rounded-lg border border-transparent px-2 py-1 transition-colors ${className}`}
      target="_self"
      rel="noopener noreferrer">
      <h3
        className={`ml-4 sm:ml-0 mb-1 ${textColorClass} font-semibold`}
        onClick={onClick}
        style={{
          textDecoration: isActive ? "underline" : "none",
        }}>
        {title}
      </h3>
      {children}
    </Link>
  );
}
