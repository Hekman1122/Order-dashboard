import Image from "next/image";
import logo from "@/public/logo.png";
export default function Title() {
  return (
    <div className="flex gap-3 items-center w-full px-3">
      <Image
        src={logo}
        alt="logo"
        width={42}
        height={42}
        className="rounded-full "
      />
      <h1 className="text-xl text-neutral-600 font-bold tracking-wider">
        Order Helper
      </h1>
    </div>
  );
}
