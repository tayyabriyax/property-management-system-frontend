import { NavLink } from "react-router-dom";
import { Building, Users, LogOut } from "lucide-react"; 
import React from "react";

const Sidebar = () => {
  const links = [
    { name: "Clients", path: "/", icon: <Users /> },
    { name: "Properties", path: "/properties", icon: <Building /> },
    { name: "Rental Contracts", path: "/tenants", icon: <Users /> },
    { name: "Broker", path: "/broker", icon: <Users /> },
    { name: "Setup", path: "/setup", icon: <Users /> },
    { name: "Logout", path: "/logout", icon: <LogOut /> },
  ];

  return (
    <div className="h-screen w-72 flex flex-col px-4 sticky top-0 left-0">
      <div className="text-2xl font-bold py-8">🏠 PMS</div>
      <nav className="flex flex-col gap-2">
        {links.map(({ name, path, icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-3  rounded-lg hover:bg-blue-100 ${
                isActive ? "bg-[#3B82F6]" : ""
              }`
            }
          >
            {icon}
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
