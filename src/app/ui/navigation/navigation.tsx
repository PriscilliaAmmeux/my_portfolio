import Burger from "../burger/burger";
import Navbar from "../navBar/navBar";

export default function navigation() {
  return (
    <div>
      <section className="lg:hidden">
        <Burger />
      </section>
      <section className="w-full">
        <Navbar />
      </section>
    </div>
  );
}
