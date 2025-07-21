import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProps) {
  return (
    <section>
      <Image
        src="/Logo-rose.webp"
        alt="logo d'entreprise (Priscillia AMMEUX)"
        aria-label="logo d'entreprise (Priscillia AMMEUX)"
        className="block dark:hidden"
        width={width}
        height={height}
      />
      <Image
        src="/Logo-blanc.webp"
        alt="logo d'entreprise (Priscillia AMMEUX)"
        aria-label="logo d'entreprise (Priscillia AMMEUX)"
        className="hidden dark:block"
        width={width}
        height={height}
      />
    </section>
  );
}
