import Link from "next/link";

export default function NavLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-pink-500 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_self"
      rel="noopener noreferrer">
      <h1 className={`mb-3 text-xl font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h1>
      {children}
    </Link>
  );
}
