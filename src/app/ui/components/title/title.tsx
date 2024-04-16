import styles from "../../../styles/variables.module.css";

type TitleProps = {
  text: string;
  icon: React.ElementType;
};

export default function Title({ text, icon: Icon }: TitleProps) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Icon size={50} className={styles.iconColor} />
      <h1 className="flex justify-center text-4xl font-bold text-white mt-10 mb-10 text-2xl">
        {text}
      </h1>
    </div>
  );
}