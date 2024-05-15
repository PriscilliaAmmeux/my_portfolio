import Burger from "../burger/burger";
import Navbar from "../navbar/navbar";

export default function navigation() {
  return (
    <div>
      <section className="lg:hidden">
        <Burger />
      </section>
      <section className="hidden lg:flex justify-center">
        <Navbar showParagraph={false} />
      </section>
    </div>
  );
}
