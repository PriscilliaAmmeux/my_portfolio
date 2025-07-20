import Navbar from "../navbar/navbar";
import NavMobile from "../navMobile/navMobile";

export default function Navigation() {
  return (
    <div>
      <section className="block lg:hidden">
        <NavMobile />
      </section>
      <section className="hidden lg:block w-full">
        <Navbar />
      </section>
    </div>
  );
}
