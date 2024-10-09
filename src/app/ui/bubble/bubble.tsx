import Button from "@/app/components/button/button";
import { ReactNode } from "react";

interface BubbleProps {
  Icon: React.ElementType;
  title: string;
  children: ReactNode;
  button: {
    href: string;
    text: string;
    ariaLabel: string;
  };
}

export default function Bubble({ Icon, title, children, button }: BubbleProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2 mb-2">
        <Icon className="text-lg " />
        <h3 className="text-xl font-bold ">{title}</h3>
      </div>
      <div className="mb-4 text-lg italic flex justify-center flex-col items-center">
        {children}
      </div>
      <Button
        href={button.href}
        text={button.text}
        type={"button"}
        ariaLabel={button.ariaLabel}
      />
    </div>
  );
}
