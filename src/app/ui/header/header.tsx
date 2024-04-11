import Navbar from "../navbar/navbar";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <Navbar showParagraph={false} />

      <h1 className="text-3xl font-bold mb-6 mt-4">
        Un petit peu, beaucoup de moi !
      </h1>
    </header>
  );
}
