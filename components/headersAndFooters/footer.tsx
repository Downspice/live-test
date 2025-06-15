import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <article className="flex flex-col w-full bg-[#E6FAF3]   bottom-0 p-4 gap-2 mt-4 sm:flex-row sm:justify-between">
      <div className="sm:flex sm:flex-row sm:gap-3 flex flex-col">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
      <div className="flex flex-row gap-3 sm:hidden">
        <Instagram />
        <Facebook />
      </div>
      <div className="sm:flex sm:gap-2.5">
        <span className="text-muted-foreground">Micro Gardens © 2022</span>
        <div className="sm:flex sm:flex-row sm:gap-3 hidden">
          <Instagram />
          <Facebook />
        </div>
      </div>
    </article>
  );
}
