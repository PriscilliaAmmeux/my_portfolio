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
}

export default function NavLink({
  href,
  title,
  children,
  className,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname, href]);

  return (
    <Link
      href={href}
      className={`group rounded-lg border border-transparent px-2 py-1 transition-colors  ${className}`}
      target="_self"
      rel="noopener noreferrer">
      <h3
        className={`ml-4 sm:ml-0 mb-1 dark:text-white text-pink-700 font-semibold`}
        onClick={onClick}
        style={{
          color: isActive ? "underline" : "",
        }}>
        {title}
      </h3>
      {children}
    </Link>
  );
}
