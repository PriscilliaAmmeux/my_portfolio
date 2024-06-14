import Burger from "../burger/burger";
import Navbar from "../navBar/navBar";

export default function navigation() {
  return (
    <div>
      <section className="pt-4 block lg:hidden">
        <Burger />
      </section>
      <section className="hidden lg:block w-full">
        <Navbar />
      </section>
    </div>
  );
}
