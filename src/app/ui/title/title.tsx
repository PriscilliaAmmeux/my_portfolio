import styles from "../../styles/variables.module.css";

type TitleProps = {
  text: string;
  icon?: React.ElementType;
};

export default function Title({ text, icon: Icon }: TitleProps) {
  return (
    <div className="flex justify-left space-x-4">
      {Icon && <Icon className={`${styles.icon} text-blue-800`} />}
      <h2
        className="flex justify-center text-3xl font-bold mt-5 mb-5 text-2xl"
        style={{ whiteSpace: "nowrap" }}>
        {text}
      </h2>
    </div>
  );
}
