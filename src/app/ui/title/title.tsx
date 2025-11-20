import styles from "../../styles/variables.module.css";

type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return (
    <div className="flex justify-left space-x-4">
      <h2 className="flex justify-center text-3xl font-bold mt-5 mb-5 text-2xl">
        {text}
      </h2>
    </div>
  );
}
