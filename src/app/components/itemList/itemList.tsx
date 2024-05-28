interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

interface ItemListProps {
  Icon: (props: IconProps) => JSX.Element;
  text: React.ReactNode;
}

export default function ItemList({ Icon, text }: ItemListProps) {
  return (
    <li className="flex items-start">
      <div style={{ width: "20px", height: "20px" }} className="align-top">
        <Icon className="mr-2 mt-1" />
      </div>
      {text}
    </li>
  );
}
