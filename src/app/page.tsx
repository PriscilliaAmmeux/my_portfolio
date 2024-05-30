import Layout from "./components/layout/layout";
import HomePage from "./ui/homePage/homePage";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Priscillia Ammeux - Conceptrice et Développeuse d'Applications",
  description:
    "Découvrez mon portfolio et mes services de développement freelance, alliant expertise technique et créativité pour réaliser vos projets digitaux.",
};

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between sm:px-24 sm:py-20 space-y-10">
        <HomePage />
      </main>
      <Analytics />
    </Layout>
  );
}
