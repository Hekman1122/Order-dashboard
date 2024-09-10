"use client";
import Link from "next/link";
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
    title: "products",
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
    <ul className="flex flex-col gap-1">
      {list.map((item) => {
        return (
          <Link
            href={`/${item.title === "Dashboard" ? "/" : item.title}`}
            key={item.title}
          >
            <li
              className={`flex gap-6 items-center py-4 rounded-e-md pl-8 duration-300 cursor-pointer transition-all ${
                item.title === select
                  ? "text-neutral-700 bg-secondColor"
                  : "text-neutral-500"
              }`}
              onClick={() => {
                setSelect(item.title);
              }}
            >
              <p>{item.icon}</p>
              <p className="font-bold tracking-wider">
                {item.title.toUpperCase()}
              </p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
