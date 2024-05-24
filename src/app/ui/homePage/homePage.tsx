import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { LiaHandPaper } from "react-icons/lia";
import Footer from "../components/footer/footer";
import Navbar from "../navbar/navbar";

export default function HomePage() {
  return (
    <>
      <section className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="left-0 top-0 flex h-20 sm:h-48 w-full items-end justify-center bg-gradient-to-b dark:from-black dark:via-black to-transparent lg:bg-gradient-to-t lg:from-white lg:via-white lg:dark:from-black lg:dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none flex items-center gap-2">
          <LiaHandPaper className="text-pink-500 hover:text-pink-700 transition-colors duration-300" />
          Bienvenue !
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className=" pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.linkedin.com/in/priscillia-ammeux/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin className="text-pink-500 hover:text-pink-700 transition-colors duration-300" />
            Par Priscillia Ammeux
          </a>
        </div>
      </section>
      <section className="flex flex-col items-center ">
        <h1 className="text-2xl sm:text-4xl mb-6 text-center">
          Conceptrice et Développeuse d'Applications
        </h1>
        <Image
          className="rounded-full"
          src="/me.jpg"
          alt="picture of me"
          width={90}
          height={18}
          priority
        />
      </section>
      <Navbar showParagraph={true} />
      <Footer />
    </>
  );
}
