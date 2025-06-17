export default function GradesItems({
  title,
  pdf,
}: {
  title?: string;

  pdf?: string;
}) {
  return (
    <li className="text-gray-700 pt-3">
      <span className="font-bold">{title}</span>
      {pdf && (
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-blue-500 underline">
          Télécharger le programme
        </a>
      )}
    </li>
  );
}
