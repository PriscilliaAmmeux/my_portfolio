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
      className={`group rounded-lg border border-transparent px-2 py-1 transition-colors hover:border-pink-700 hover:bg-pink-200 hover:text-black dark:hover:text-pink-100 hover:pink:border-neutral-700 dark:hover:bg-neutral-800/30 ${className}`}
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
