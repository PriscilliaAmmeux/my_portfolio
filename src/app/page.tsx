import HomePage from "./ui/homePage/homePage";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Cookies from "./components/cookies/cookies";

export const metadata = {
  title: "Priscillia Ammeux - Conceptrice et Développeuse d'Applications",
  description:
    "Priscillia Ammeux, freelance, développeuse web, création et conception de site web. Expertise technique et créativité.",
};

export default function Home() {
  return (
    <main>
      <HomePage />
      <Analytics />
      <SpeedInsights />
      <Cookies />
    </main>
  );
}
