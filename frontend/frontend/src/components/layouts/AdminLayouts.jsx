import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaRegListAlt,
  FaHome,
} from "react-icons/fa";

function AdminLayouts() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md transition
     ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100"}`;

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* 🔹 Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <h2 className="text-xl font-bold text-center py-4 border-b">
          Admin Panel
        </h2>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <NavLink to="users" className={linkClass}>
                <FaUser /> Users
              </NavLink>
            </li>
            <li>
              <NavLink to="contacts" className={linkClass}>
                <FaEnvelope /> Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to="services" className={linkClass}>
                <FaRegListAlt /> Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={linkClass}>
                <FaHome /> Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* 🔹 Page Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayouts;
