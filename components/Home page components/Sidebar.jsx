import HomeSearch from "./Sidebar components/HomeSearch";
import UserLibrary from "./Sidebar components/UserLibrary";

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-2 mr-2 min-w-[26rem] min-h-[90vh]">
      <HomeSearch/>
      <UserLibrary/>
    </nav>
  )
}
