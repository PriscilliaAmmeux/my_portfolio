export default function ShareOpinionGoogle() {
  return (
    <div className="mt-12 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border border-pink-200 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-pink-600 mb-2">
          Vous aussi, partagez votre expérience !
        </h3>
        <p className="text-gray-600 text-sm">
          Votre avis compte et aide d'autres porteurs de projets à me faire
          confiance.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
        <a
          href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x65814fd3bf149c95:0x380d3d112ad07d97!12e1?source=g.page.m._&laa=merchant-review-solicitation"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all duration-300 flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0">
            G
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
              Laisser un avis sur Google
            </h4>
            <p className="text-sm text-gray-600">
              Aidez d'autres clients à me découvrir
            </p>
          </div>
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/priscillia-ammeux/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all duration-300 flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0">
            in
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
              Me recommander sur LinkedIn
            </h4>
            <p className="text-sm text-gray-600">
              Partagez votre expérience professionnelle
            </p>
          </div>
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
