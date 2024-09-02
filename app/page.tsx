import ChartComponent from "@/components/Chart/ChartComponent";
import HeaderComponent from "@/components/Main/HeaderComponent";
export default function Home() {
  return (
    <main className=" px-4 pt-10">
      <HeaderComponent />
      <div className="bg-neutral-50 w-full">
        <ChartComponent />
      </div>
    </main>
  );
}
