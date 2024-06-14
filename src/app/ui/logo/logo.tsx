interface LogoProps {
  width: number;
}

export default function Logo({ width }: LogoProps = { width: 100 }) {
  return (
    <section>
      <img
        src="/logo-complet.webp"
        alt="logo d'entreprise (signe infini et Priscillia AMMEUX)"
        className="mb-2 block dark:hidden"
        width={width}
      />
      <img
        src="/logo-bg-dark.webp"
        alt="logo d'entreprise (signe infini et Priscillia AMMEUX)"
        className="mb-2 hidden dark:block"
        width={width}
      />
    </section>
  );
}