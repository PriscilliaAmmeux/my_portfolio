import Burger from "../burger/burger";
import NavBar from "../navBar/navBar";

export default function Navigation() {
  return (
    <div>
      <section className="pt-4 block lg:hidden">
        <Burger />
      </section>
      <section className="hidden lg:block w-full">
        <NavBar />
      </section>
    </div>
  );
}
