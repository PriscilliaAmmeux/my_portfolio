import Link from "next/link";

export default function ContactMe() {
  return (
    <section className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Prêt à lancer votre projet web à Lille ou partout en France ?
      </h3>
      <p className="text-gray-700 mb-4 text-xl">
        Discutons ensemble de vos besoins et transformons vos idées en réalité
        digitale.
      </p>
      <Link
        href="https://calendly.com/priscillia-ammeux-pro/rdv-web-audit-noel"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-xl gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
        Contactez-moi pour un devis gratuit
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </section>
  );
}
