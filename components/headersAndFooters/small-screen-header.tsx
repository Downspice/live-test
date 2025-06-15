import { Menu, Search, ShoppingCart, User2 } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function SmallScreenHeader() {
  return (
    <article className="flex flex-row justify-between sm:hidden sm:flex-row sm:justify-between pb-2 top-0 sticky bg-white shadow-sm">
      <section className="flex flex-row">
        <Button variant={"ghost"}>
          <Menu />
        </Button>
        <Image src={"/logo.png"} height={5} width={40} alt="Image" />
      </section>

      <section className="flex flex-row"> 
        <Button variant={"ghost"}>
          <Search />
        </Button>
        <Button variant={"ghost"}>
          <ShoppingCart />
        </Button>
        <Button variant={"ghost"}>
          <User2 />
        </Button>
      </section>
    </article>
  );
}
