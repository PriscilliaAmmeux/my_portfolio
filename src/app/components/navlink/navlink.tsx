import Link from "next/link";

export default function NavLink({
  href,
  title,
  children,
  className,
}: {
  href: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-pink-500 hover:bg-pink-200 hover:text-black dark:hover:text-pink-100 hover:pink:border-neutral-700 dark:hover:bg-neutral-800/30 ${className}`}
      target="_self"
      rel="noopener noreferrer">
      <div>
        <h1 className={`mb-3 text-xl text-pink-500 font-semibold`}>{title} </h1>
        {children}
      </div>
    </Link>
  );
}
