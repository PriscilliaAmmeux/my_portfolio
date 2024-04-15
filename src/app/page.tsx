import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/components/footer/footer";
/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <main className="bg-gray-800 flex min-h-screen flex-col items-center justify-between p-24 space-y-10 py-20">
      <section className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Bienvenue !
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.linkedin.com/in/priscillia-ammeux/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin className="text-pink-500 hover:text-pink-700 transition-colors duration-300" />
            Par Priscillia Ammeux
          </a>
        </div>
      </section>
      <section className="flex flex-col items-center ">
        <h1 className="text-4xl mb-6">
          Conceptrice et Développeuse d'Applications
        </h1>
        <Image
          className="rounded-full"
          src="/me.jpg"
          alt="picture of me"
          width={180}
          height={37}
          priority
        />
      </section>
      <Navbar showParagraph={true} />
      <Footer />
    </main>
  );
}
/* eslint-disable react/no-unescaped-entities */
