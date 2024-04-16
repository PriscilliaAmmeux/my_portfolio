import { MdWork } from "react-icons/md";
import Image from "next/image";
import styles from "../../styles/variables.module.css";
import jobs from "../../../data/jobs.json";

const images = [
  {
    src: "/OIG3.jpeg",
    alt: "picture of a woman in front of a computer",
    hideOnSmallScreen: false,
  },
  { src: "/bank.jpeg", alt: "picture of montains", hideOnSmallScreen: true },
  { src: "/writing.jpeg", alt: "hand writing", hideOnSmallScreen: true },
  {
    src: "/auto.jpeg",
    alt: "mum with children who are painting",
    hideOnSmallScreen: true,
  },
];

export default function Carreer() {
  const renderImages = () =>
    images.map((image, index) => (
      <Image
        key={index}
        className={`${index % 2 === 0 ? "transform -rotate-6" : ""} pt-4 ${
          image.hideOnSmallScreen ? "sm:hidden md:block" : ""
        }`}
        src={image.src}
        alt={image.alt}
        width={200}
        height={37}
        priority
      />
    ));

  const renderTasks = (tasks: any[]) =>
    tasks.map((task, taskIndex) => <li key={taskIndex}>{task}</li>);

  return (
    <section className="mt-8 pt-6 bg-gray-800 text-white w-full p-6 shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <MdWork size={40} className={styles.iconColor} />{" "}
        <h1 className="ml-4 text-white text-2xl font-semibold ">
          Mon parcours professionnel
        </h1>
      </div>
      <div className="relative flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 mb-10">
        {renderImages()}
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
