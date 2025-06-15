import { Menu, Search, ShoppingCart, User2 } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { categories } from "@/lib/MockData/categories";

export default function BigScreenHeader() {
  return (
    <article className=" flex-row hidden justify-between sm:flex sm:flex-row sm:justify-between p-5 top-0   bg-white shadow-sm">
      <section className="flex flex-row">
         
        <Image src={"/logo.png"} height={5} width={40} alt="Image" />
      </section>

      <section className="flex justify-items-center items-center flex-row gap-2">
        {categories.map((category) => (
          <span className="text-[#808080]" key={category.id}>
            {category.name}
          </span>
        ))}
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
