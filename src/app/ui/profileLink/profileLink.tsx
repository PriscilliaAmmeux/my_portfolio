import { IconType } from "react-icons";

interface ProfileLinkProps {
  href: string;
  ariaLabel: string;
  children?: React.ReactNode;
  Icon: IconType;
  size?: number;
}

export default function ProfileLink({
  href,
  ariaLabel,
  Icon,
  children,
  size,
}: ProfileLinkProps) {
  return (
    <section className="flex items-center justify-center dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <a
        className="flex items-center p-1 gap-2 lg:p-0 lg:pointer-events-auto transition-colors duration-300 text-xs md:text-sm lg:text-base  hover:font-bold p-1"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}>
        <Icon
          className="hover:text-pink-700 transition-colors duration-300"
          size={size}
        />
        {children}
      </a>
    </section>
  );
}
