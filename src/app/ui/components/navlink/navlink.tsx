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
      className={`group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-pink-500 hover:bg-gray-100 hover:text-pink-200 hover:pink:border-neutral-700 hover:dark:bg-neutral-800/30 ${className}`}
      target="_self"
      rel="noopener noreferrer">
      <div>
        <h1
          className={`ml-4 mb-3 text-xl text-pink-500 font-semibold hover:text-pink-500`}>
          {title}{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h1>
        {children}
      </div>
    </Link>
  );
}
