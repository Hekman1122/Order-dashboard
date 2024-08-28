import Image from "next/image";
import logo from "@/public/logo.png";
export default function Title() {
  return (
    <div className="flex gap-4 items-center w-full justify-center">
      <Image
        src={logo}
        alt="logo"
        width={42}
        height={42}
        className="rounded-full "
      />
      <h1 className="text-2xl text-neutral-700 font-bold tracking-wider">
        Tech-Order
      </h1>
    </div>
  );
}
