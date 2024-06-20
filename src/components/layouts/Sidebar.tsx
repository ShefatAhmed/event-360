import { cn } from "@/lib/utils";
import { HomeIcon, LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col-span-2 h-screen sticky left-0 top-0 overflow-auto p-4 lg:p-5 bg-black flex flex-col justify-between">
      <nav className="flex flex-col gap-5">
        <NavLink
          to="/dashboard/dashboard"
          className={({ isActive }) =>
            cn("flex items-center gap-2 text-gray-200 p-3", {
              "text-black font-extrabold bg-white rounded-lg": isActive,
            })
          }
        >
          <LayoutDashboard className="shrink-0" />{" "}
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/dashboard/events-item"
          className={({ isActive }) =>
            cn("flex items-center gap-2 text-gray-200", {
              "text-white font-extrabold border border-b-2": isActive,
            })
          }
        >
          <span className="truncate lg:px-8">Event Items</span>
        </NavLink>
        <NavLink
          to="/dashboard/recent-events"
          className={({ isActive }) =>
            cn("flex items-center gap-2 text-gray-200", {
              "text-white font-extrabold border border-b-2": isActive,
            })
          }
        >
          <span className="truncate lg:px-8">Recent Event</span>
        </NavLink>
      </nav>
      <div className="bottom-0">
        <NavLink
          to="/"
          className="text-white flex justify-center items-center gap-2"
        >
          <HomeIcon /> Home
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
