import Me from "../me/me";
import Button from "@/app/components/button/button";
import Link from "next/link";

export default function About() {
  return (
    <section className="pt-10 pb-10">
      <Me />
      <Link
        className="flex justify-center items-center mt-4 mb-8"
        href="/contact"
        aria-label="Aller à la page contact">
        <Button type="button" text="Me contacter" ariaLabel="Contact" />
      </Link>
    </section>
  );
}
