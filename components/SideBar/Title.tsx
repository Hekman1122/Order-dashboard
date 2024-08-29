import Image from "next/image";
import logo from "@/public/logo.png";
export default function Title() {
  return (
    <div className="flex gap-4 items-center w-full pl-6">
      <Image
        src={logo}
        alt="logo"
        width={42}
        height={42}
        className="rounded-full "
      />
      <h1 className="text-2xl text-neutral-600 font-bold tracking-wider">
        Order Helper
      </h1>
    </div>
  );
}
