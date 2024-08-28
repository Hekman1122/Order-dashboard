import { LogOut, UserRound } from "lucide-react";

export default function User() {
  return (
    <div className="flex flex-col gap-6 pl-8">
      <div className="flex gap-4 items-center">
        <p className="w-10 h-10 rounded-full bg-secondColor flex items-center justify-center">
          <UserRound />
        </p>
        <p className="text-neutral-700 font-bold ">John Doe</p>
      </div>
      <div className="flex gap-6 text-neutral-500 ">
        <LogOut />
        <p className="font-bold ">Log out</p>
      </div>
    </div>
  );
}
