import Link from "next/link";
import Button from "../../components/button/button";

interface CtaFinalProps {
  className?: string;
}

export default function CtaFinal({ className = "" }: CtaFinalProps) {
  return (
    <div
      className={`bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 mt-12 text-center border border-pink-200 ${className}`}>
      <h3 className="text-2xl lg:text-3xl font-bold text-pink-600 mb-4">
        Un projet en tête ? Parlons-en.
      </h3>
      <div className="space-y-3 mb-6 max-w-2xl mx-auto">
        <p className="text-gray-700 leading-relaxed">
          Je vous propose un échange gratuit pour définir vos besoins et créer
          un site qui vous ressemble vraiment.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Pas de jargon inutile, pas de bidouille compliquée.
        </p>
        <p className="text-gray-700 font-medium">
          Un site joli, clair, rapide, fait pour vendre. Point.
        </p>
      </div>
      <Link
        href="/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block">
        <Button
          type="button"
          text="Discutons de votre projet"
          ariaLabel="Discutons de votre projet"
          variant="bgPink"
          className="w-full sm:w-auto"
        />
      </Link>
    </div>
  );
}
