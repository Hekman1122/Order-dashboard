import Title from "./Title";
import NavList from "./NavList";
import User from "./User";
export default function SideBar() {
  return (
    <div className="w-full flex flex-col min-h-screen justify-around">
      <Title />
      <NavList />
      <User />
    </div>
  );
}
