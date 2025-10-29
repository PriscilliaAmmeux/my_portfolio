import Head from "next/head";
import { useRouter } from "next/router";

export default function Canonical() {
  const router = useRouter();
  const canonicalUrl = (`https://www.pixelia-and-co.fr` + router.asPath).split(
    "?"
  )[0];

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
