import { MdWork } from "react-icons/md";
import styles from "../../styles/variables.module.css";
import jobs from "../../../data/jobs.json";
import Image from "next/image";

const image = {
  src: "/OIG3.webp",
  alt: "picture of a woman in front of a computer",
  width: 200,
  height: 200,
  hideOnSmallScreen: true,
};

export default function Carreer() {
  return (
    <section className="mt-8 pt-6 w-full p-6">
      <div className="flex items-center justify-center mb-4">
        <MdWork size={40} className={styles.colorFirst} />{" "}
        <h2 className="ml-4 text-2xl font-semibold ">
          Mon parcours professionnel
        </h2>
      </div>
      <div className="relative flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 mb-10">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={image.hideOnSmallScreen ? "hidden sm:block" : ""}
        />
      </div>
      <ul className="list-disc ml-6">
        {jobs.map((job, id) => (
          <li key={id} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{`${job.title} - ${job.date}`}</h2>
            {job.tasks && (
              <ul className="list-disc ml-6">
                {job.tasks.map((task) => (
                  <li key={id}>{task}</li>
                ))}
              </ul>
            )}
            {job.link && (
              <a
                href={job.link}
                className="underline hover:text-pink-700 hover:font-bold ml-6">
                Voir mes projets
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
