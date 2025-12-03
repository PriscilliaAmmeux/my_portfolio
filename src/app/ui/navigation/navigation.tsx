import Navbar from "../navbar/navbar";
import NavMobile from "../navMobile/navMobile";

interface NavigationProps {
  forceWhiteText?: boolean;
}

export default function Navigation({
  forceWhiteText = false,
}: NavigationProps) {
  return (
    <div>
      <section className="block lg:hidden">
        <NavMobile />
      </section>
      <section className="hidden lg:block w-full">
        <Navbar forceWhiteText={forceWhiteText} />
      </section>
    </div>
  );
}
