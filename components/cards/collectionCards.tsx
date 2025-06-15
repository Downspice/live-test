import Image from "next/image";

export default function CollectionCards() {
  return (
    <div>
      <Image
        src={"/collection.png"}
        width={150}
        height={150}
        alt="collection"
      />
      <span>Microgreens</span>
    </div>
  );
}
