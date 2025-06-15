import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allFormName } from "@/app/page";
export default function AccountCreationSuccess({setView}:{setView:(x:allFormName)=>void}) {
  return (
    <article className="flex flex-col gap-3 justify-center items-center">
      <section className="bg-[#21A17910] rounded-full w-fit">
        <Check size={150} strokeWidth={2} color="#21A179" />
      </section>
      <section className="flex flex-col justify-center items-center">
        <span>All done!</span>
        <span>Your account has been created.</span>
        <span> Continue to start shopping.</span>
      </section>
      <Button className="w-full">Start Shopping</Button>
    </article>
  );
}
