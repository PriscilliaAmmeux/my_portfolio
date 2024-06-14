import Burger from "../burger/burger";
import Navbar from "../navbar/navbar";

export default function Navigation() {
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
