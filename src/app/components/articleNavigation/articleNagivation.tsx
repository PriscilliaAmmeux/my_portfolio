import Link from "next/link";
import Button from "../button/button";

interface ArticleNavigationProps {
  prevHref?: string;
  nextHref?: string;
}

export default function ArticleNavigation({
  prevHref,
  nextHref,
}: ArticleNavigationProps) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
      {nextHref && (
        <Link href={nextHref}>
          <Button
            type="button"
            text="Article suivant"
            ariaLabel="Article suivant"
          />
        </Link>
      )}
      {prevHref && (
        <Link href={prevHref}>
          <Button
            type="button"
            text="Article précédent"
            ariaLabel="Article précédent"
          />
        </Link>
      )}
    </div>
  );
}
