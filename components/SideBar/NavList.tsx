"use client";
import {
  ChartLine,
  Layers3,
  ReceiptText,
  Settings,
  UserRound,
} from "lucide-react";
import { useState } from "react";

type ListType = { title: string; icon: React.ReactNode }[];

const list: ListType = [
  {
    title: "Dashboard",
    icon: <ChartLine />,
  },
  {
    title: "Stock",
    icon: <Layers3 />,
  },
  {
    title: "Orders",
    icon: <ReceiptText />,
  },
  {
    title: "Account",
    icon: <UserRound />,
  },
  {
    title: "Setting",
    icon: <Settings />,
  },
];
export default function NavList() {
  const [select, setSelect] = useState<String>("Dashboard");
  return (
    <ul className="flex flex-col gap-6">
      {list.map((item) => {
        return (
          <li
            key={item.title}
            className={`flex gap-6 items-center py-3 rounded-e-md pl-8 duration-300 cursor-pointer transition-all ${
              item.title === select
                ? "text-neutral-700 bg-secondColor"
                : "text-neutral-500"
            }`}
            onClick={() => setSelect(item.title)}
          >
            <p>{item.icon}</p>
            <p className="font-bold text-lg tracking-wider">{item.title}</p>
          </li>
        );
      })}
    </ul>
  );
}
