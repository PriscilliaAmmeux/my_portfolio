import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProps) {
  return (
    <section>
      <Image
        src="/logo-light-removebg.webp"
        alt="logo d'entreprise (Priscillia AMMEUX - Créatrice Développeuse)"
        className="block dark:hidden"
        width={width}
        height={height}
      />
      <Image
        src="/logo-dark-removebg.webp"
        alt="logo d'entreprise (Priscillia AMMEUX - Créatrice Développeuse)"
        className="hidden dark:block"
        width={width}
        height={height}
      />
    </section>
  );
}
