import { LayoutPage } from "./ui/components/layoutPage/layout";
import HomePage from "./ui/homePage/homePage";

export const metadata = {
  title: "Darkmode with Next.js and TailwindCSS",
  description: "My portfolio showcase dark mode with Next.js and TailwindCSS",
};

export default function Home() {
  return (
    <LayoutPage>
      <main className="flex min-h-screen flex-col items-center justify-between sm:px-24 sm:py-20 space-y-10">
        <HomePage />
      </main>
    </LayoutPage>
  );
}
