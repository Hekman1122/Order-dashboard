import Link from "next/link";
import { Button } from "../ui/button";

export default async function HeaderComponent() {
  return (
    <header className="pb-5 flex justify-between items-center">
      <div className="flex flex-col gap-1">
        {/* title */}
        <h1 className="text-xl font-bold tracking-wider text-neutral-600">
          Order Management System
        </h1>
        <p className="text-sm font-bold text-neutral-400">
          A dashboard make your life easier.
        </p>
      </div>

      {/* function button */}
      <div className="flex items-center justify-center gap-4">
        <Button variant={"default"} className="font-bold">
          Add new order
        </Button>
        <Button
          variant={"secondary"}
          className="font-bold bg-secondColor text-neutral-700"
        >
          <Link href={"/createStock"}>Add new product</Link>
        </Button>
      </div>
    </header>
  );
}
