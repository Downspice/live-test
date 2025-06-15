"use client"
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allFormName } from "@/app/page";
import { useRouter } from "next/navigation";
import AuthPageHeaders from "@/components/authHeaders/authHeaders";
export default function AccountCreationSuccess({
  setView,
}: {
  setView: (x: allFormName) => void;
}) {
  const router = useRouter();
  return (
    <>
      <AuthPageHeaders title={""} />
      <article className="flex flex-1 w-full flex-col gap-3 justify-center space-y-6 items-center">
        <section className="bg-[#21A17910] rounded-full w-fit p-6">
          <Check size={150} strokeWidth={4} color="#21A179" />
        </section>
        <section className="flex flex-col justify-center space-y-2 items-center">
          <h3>All done!</h3>
          <div className="flex justify-center flex-col space-y-1">
          <span className="text-center">Your account has been created.</span>
          <span className="text-center"> Continue to start shopping.</span></div>
        </section>
        <Button className="w-full" onClick={() => router.push("/store")}>
          Start Shopping
        </Button>
      </article>
    </>
  );
}
