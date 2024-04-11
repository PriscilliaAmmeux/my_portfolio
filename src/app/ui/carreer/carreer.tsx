import { MdWork } from "react-icons/md";
import styles from "../../styles/variables.module.css";

export default function Carreer() {
  return (
    <article className="mt-8 pt-6 bg-blue-100 w-full p-6 shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <MdWork size={40} className={styles.iconColor} />{" "}
        <h1 className="ml-4 text-blue-800 text-2xl font-semibold ">
          Mon parcours professionnel
        </h1>
      </div>
    </article>
  );
}
