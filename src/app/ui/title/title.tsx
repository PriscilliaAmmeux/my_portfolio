import styles from "../../styles/variables.module.css";

type TitleProps = {
  text: string;
  icon: React.ElementType;
};

export default function Title({ text, icon: Icon }: TitleProps) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Icon size={50} className={styles.colorFirst} />
      <h2
        className="flex justify-center text-3xl font-bold mt-5 mb-5 text-2xl"
        style={{ whiteSpace: "nowrap" }}>
        {text}
      </h2>
    </div>
  );
}
