interface LogoProps {
  width: number;
}

export default function Logo({ width }: LogoProps = { width: 100 }) {
  return (
    <section>
      <img
        src="/logo-light-removebg.webp"
        alt="logo d'entreprise (Priscillia AMMEUX - Créatrice Développeuse)"
        className="block dark:hidden"
        width={width}
      />
      <img
        src="/logo-dark-removebg.webp"
        alt="logo d'entreprise (Priscillia AMMEUX - Créatrice Développeuse)"
        className="hidden dark:block"
        width={width}
      />
    </section>
  );
}
