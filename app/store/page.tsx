"use client";
import Footer from "@/components/headersAndFooters/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function StorePage() {
  const router = useRouter();
  return (
    <>
      <>
        <article className="flex flex-col px-5 justify-items-start sm:px-5 gap-3 pt-4 bg-[#F7FAF8] items-center md:relative md:h-dvh overflow-hidden">
          <div>
            <Image
              // className="absolute bottom-0 left-1/2 -translate-x-1/2 rising-image"
              src={"/logo.png"}
              height={100}
              width={100}
              alt="Image"
            />
          </div>
          <h1 className="text-center">
            Nutritional value delivered every week
          </h1>
          <h3 className="text-center subtitle">
            Shop your microgreens with an added advantage of freshness
          </h3>
          <Image
            className="md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:rising-image"
            src={"/landingImage.png"}
            height={600}
            width={600}
            alt="Image"
          />
          <div className=" flex flex-col md:flex md:flex-row gap-3 sm:flex sm:flex-col">
            <Button onClick={() => router.push("/product-listing")}>
              Buy Commercial
            </Button>
            <Button className="opacity-50 ">Shop Commercial</Button>
          </div>
        </article>
        <article className="flex flex-col w-full justify-items-start items-center overflow-hidden">
          <h3>See Our Collections</h3>
          <div className="grid grid-cols-4 w-full gap-3 px-20 pt-3 overscroll-x-auto">
            <div className="flex flex-col col-span-1 justify-items-start items-center gap-3">
              <Image
                src={"/collection_1.png"}
                height={150}
                width={200}
                alt="Image"
              />
              <span>Microgreens</span>
            </div>
            <div className="flex flex-col col-span-1 justify-items-start items-center gap-3">
              <Image
                src={"/collection_2.png"}
                height={150}
                width={200}
                alt="Image"
              />
              <span>Microgreens Mixes</span>
            </div>
            <div className="flex flex-col col-span-1 justify-items-start items-center gap-3">
              <Image
                src={"/collection_3.png"}
                height={150}
                width={200}
                alt="Image"
              />
              <span>Shoots</span>
            </div>
            <div className="flex flex-col col-span-1 justify-items-start items-center gap-3">
              <Image
                src={"/collection_4.png"}
                height={300}
                width={300}
                alt="Image"
              />
              <span>Herbs</span>
            </div>
          </div>
          <div className="w-full  flex justify-center items-center px-4 py-8">
            <Button className="w-full sm:w-fit min-w-48">Shop More</Button>
          </div>
        </article>
        <article>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 px-4">
            <div className="flex flex-col col-span-1 justify-center space-y-3 items-start sm:px-28">
              <h3>Subscription</h3>
              <span>
                Subscribe to our weekly deliveries. No need to order multiple
                times.
              </span>
              <Button className="w-full "> Subscribe </Button>
            </div>
            <div>
              <Image
                src={"/subscriptionImage.png"}
                height={500}
                width={500}
                alt="Image"
              />
            </div>
          </div>
        </article>
      </>
      <Footer />
    </>
  );
}
