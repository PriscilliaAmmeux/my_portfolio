interface ListItemProps {
  title: string;
  description: string;
}

export default function ListItemSectionArticle({
  title,
  description,
}: ListItemProps) {
  return (
    <li className="pl-2">
      <span className="font-bold">{title} </span>
      {description}
    </li>
  );
}
