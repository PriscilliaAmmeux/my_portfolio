export default function GradesItems({
  title,
  description,
}: {
  title?: string;
  description: string;
}) {
  return (
    <li className="text-gray-700 pt-3">
      <span className="font-bold">{title}</span> {description}
    </li>
  );
}
