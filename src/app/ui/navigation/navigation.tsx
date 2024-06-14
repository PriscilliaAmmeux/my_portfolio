import Burger from "../burger/burger";
import NavBar from "@/app/ui/navBar/navBar";

export default function navigation() {
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
