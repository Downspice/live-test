import Image from 'next/image'

interface AuthPageHeaderInterface {
    title :string
    optionalSubtext?: React.ReactNode
}
export default function AuthPageHeaders({title,optionalSubtext}:AuthPageHeaderInterface) {
  return (
    <section className="flex flex-col justify-start py-5 items-start sm:col-span-1">
      <Image src={"/logo.png"} className="pb-8" width={50} height={80} alt="logo" />
      <h1 className='pb-3'>{title}</h1>
      {optionalSubtext}
    </section>
  );
}
