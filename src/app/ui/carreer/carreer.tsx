import { MdWork } from "react-icons/md";
import Image from "next/image";
import styles from "../../styles/variables.module.css";
import jobs from "../../../data/jobs.json";

export default function Carreer() {
  return (
    <section className="mt-8 pt-6 bg-gray-800 text-white  w-full p-6 shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <MdWork size={40} className={styles.iconColor} />{" "}
        <h1 className="ml-4 text-white text-2xl font-semibold ">
          Mon parcours professionnel
        </h1>
      </div>
      <div className="relative flex items-center justify-center space-x-2 mb-10">
        <Image
          className="transform -rotate-6 pt-4"
          src="/OIG3.jpeg"
          alt="picture of a woman in front of a computer "
          width={200}
          height={37}
          priority
        />
        <Image
          className="pt-4 rotate-6"
          src="/bank.jpeg"
          alt="picture of montains"
          width={200}
          height={37}
          priority
        />
        <Image
          className="transform -rotate-6 pt-4"
          src="/writing.jpeg"
          alt="hand writing "
          width={200}
          height={37}
          priority
        />
        <Image
          className="pt-4 rotate-6"
          src="/auto.jpeg"
          alt="mum with children who are painting"
          width={200}
          height={37}
          priority
        />
      </div>
      <ul className="list-disc ml-6">
        {jobs.map((job, index) => (
          <li key={index} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{`${job.title} - ${job.date}`}</h2>
            {job.tasks && (
              <ul className="list-disc ml-6">
                {job.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
