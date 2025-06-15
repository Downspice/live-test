import { ProductInterface } from "@/lib/schemas/interfaces";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

export function ProductCard({
  name,
  imgLink,
  description,
  price,
}: ProductInterface) {
  return (
    <article className="flex flex-col col-span-1 m-1 p-0.5  ">
      <div className="relative w-full h-76">
        <Image
          src={imgLink}
          alt={name}
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="w-full flex flex-row justify-between pb-2">
        <h3>{name}</h3> <ShoppingCartIcon />
      </div>
      <p className="text-muted-foreground text-md pb-2">{description}</p>
      <p className="text-primary text-lg font-bold pb-2 text-[1.5rem]">
        {price}
      </p>
    </article>
  );
}
