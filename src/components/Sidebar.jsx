import { NavLink } from "react-router-dom";
import { Building, Users, LogOut, Settings, ContactRound, ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const Sidebar = () => {
  const [openSetup, setOpenSetup] = useState(false);

  const links = [
    { name: "Clients", path: "/clients", icon: <Users /> },
    { name: "Properties", path: "/properties", icon: <Building /> },
    { name: "Rental Contracts", path: "/rentals", icon: <ContactRound /> },
    { name: "Broker", path: "/broker", icon: <Users /> },
  ];

  const setupLinks = [
    { name: "View", path: "/setup/view" },
    { name: "Community", path: "/setup/community" },
    { name: "Sub Community", path: "/setup/sub-community" },
    { name: "Types", path: "/setup/types" },
    { name: "Developers", path: "/setup/developers" },
    { name: "Banks", path: "/setup/banks" },
  ];

  return (
    <aside className="h-screen w-72 flex flex-col px-4 py-8 bg-white shadow-lg sticky top-0 left-0">
      <div className="text-2xl font-bold mb-8">🏠 PMS</div>
      <nav className="flex flex-col gap-2">
        {links.map(({ name, path, icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors 
            ${isActive ? "bg-blue-600 text-white" : "hover:bg-blue-100 text-gray-700"}`
            }
          >
            {icon}
            <span className="font-bold">{name}</span>
          </NavLink>
        ))}

        <button
          onClick={() => setOpenSetup(!openSetup)}
          className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-100 text-gray-700 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Settings />
            <span className="font-bold">Setup</span>
          </div>
          {openSetup ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>

        {openSetup && (
          <div className="flex flex-col ml-9 gap-1">
            {setupLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `text-sm px-4 py-3 font-semibold rounded hover:bg-blue-100 ${isActive ? "bg-blue-600 text-white"
                    : "text-gray-600"}`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        )}

        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors 
          ${isActive ? "bg-blue-600 text-white" : "hover:bg-blue-100 text-gray-700"}`
          }
        >
          <LogOut />
          <span className="font-bold">Logout</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
