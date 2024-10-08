import Image from "next/image";
import Footer from "../footer/footer";
import { ThemeProvider } from "../themeProvider/themeProvider";
import { ToggleButton } from "@/app/components/toggleButton/toggleButton";
import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";

export default function HomePage() {
  return (
    <section className="md:h-screen bg-pink-100 dark:bg-gray-700 text-gray-700 dark:text-white ">
      <Navbar />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex justify-around">
          <ToggleButton />
        </div>
      </ThemeProvider>

      <section className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left ">
        <Logo width={200} height={200} />

        <h1 className="text-2xl sm:text-3xl flex flex-col items-center">
          Priscillia AMMEUX
          <span>Développeuse Fullstack NextJs NodeJs</span>
        </h1>

        <Image
          className="rounded-full sm:mr-10 mb-10 sm:mb-0"
          src="/me.webp"
          alt="picture of me"
          width={150}
          height={150}
          priority
        />
      </section>

      <div className="md:fixed inset-x-0 bottom-0">
        <Footer />
      </div>
    </section>
  );
}
