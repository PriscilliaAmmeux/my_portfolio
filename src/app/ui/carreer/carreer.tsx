import { MdWork } from "react-icons/md";
import styles from "../../styles/variables.module.css";
import jobs from "../../../data/jobs.json";
import ImageList from "../../components/imageList/imageList";

const images = [
  {
    src: "/OIG3.webp",
    alt: "picture of a woman in front of a computer",
    hideOnSmallScreen: true,
  },
  { src: "/bank.webp", alt: "picture of montains", hideOnSmallScreen: true },
  { src: "/writing.webp", alt: "hand writing", hideOnSmallScreen: true },
  {
    src: "/auto.webp",
    alt: "mum with children who are painting",
    hideOnSmallScreen: true,
  },
];
const randomIndex = Math.floor(Math.random() * images.length);
images[randomIndex].hideOnSmallScreen = false;

export default function Carreer() {
  const renderTasks = (tasks: any[]) =>
    tasks.map((task, taskIndex) => <li key={taskIndex}>{task}</li>);

  return (
    <section className="mt-8 pt-6 w-full p-6">
      <div className="flex items-center justify-center mb-4">
        <MdWork size={40} className={styles.colorFirst} />{" "}
        <h2 className="ml-4 text-2xl font-semibold ">
          Mon parcours professionnel
        </h2>
      </div>
      <div className="relative flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 mb-10">
        <ImageList images={images} />
      </div>
      <ul className="list-disc ml-6">
        {jobs.map((job, index) => (
          <li key={index} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{`${job.title} - ${job.date}`}</h2>
            {job.tasks && (
              <ul className="list-disc ml-6">{renderTasks(job.tasks)}</ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
