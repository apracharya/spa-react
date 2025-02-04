import React from "react";
import Base from "../components/main/Base";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div
      className="min-h-screen 
        bg-slate-200 dark:bg-slate-900
        text-black dark:text-white 
        "
    >
      {/* left panel */}
      <div className="w-[20%] py-8 bg-amber-300 
        flex flex-col gap-4 items-center text-black min-h-screen">
        <NavLink className='text-3xl mb-5' to="/">respira</NavLink>
        <button className="bg-white mx-5 w-[75%] py-2 cursor-pointer">Summary</button>
        <button className="bg-white mx-5 w-[75%] py-2 cursor-pointer">Summary</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
