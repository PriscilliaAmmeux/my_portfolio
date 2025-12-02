import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProps) {
  return (
    <Link href="/" aria-label="Accueil" className="inline-block cursor-pointer">
      <section>
        <Image
          src="/Logo.webp"
          alt="logo d'entreprise (Pixelia&Co)"
          aria-label="logo d'entreprise (Pixelia&Co)"
          className="block"
          width={width}
          height={height}
        />
      </section>
    </Link>
  );
}
