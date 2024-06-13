import Layout from "./components/layout/layout";
import HomePage from "./ui/homePage/homePage";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Priscillia Ammeux - Conceptrice et Développeuse d'Applications",
  description:
    "Découvrez mon portfolio et mes services de développement freelance, alliant expertise technique et créativité pour réaliser vos projets digitaux.",
};

export default function Home() {
  return (
    <Layout>
      <main className="w-full flex min-h-screen flex-col items-center justify-between space-y-10">
        <HomePage />
      </main>
      <Analytics />
      <SpeedInsights />
    </Layout>
  );
}
