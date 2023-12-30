import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { MdLunchDining } from "react-icons/md";

function Navbar() {
  return (
    <nav
      className="flex items-center justify-between p-3 text-amber-800
      md:mx-[10%]"
      data-aos="fade-down"
    >
      <Link
        to={"/home"}
        className="flex items-center text-2xl font-semibold duration-300 hover:text-black"
      >
        <img
          src={
            "https://i.pinimg.com/736x/2d/50/ff/2d50ff348ad05a9a50ee80bae0224fd5.jpg"
          }
          className="h-16 w-16 rounded-full"
        />
        <p className="ml-2 hidden md:block">Coffee Break</p>
      </Link>

      <div className="flex items-center text-2xl md:text-xl">
        <Link
          to={"/menu"}
          className="mx-3 flex items-center duration-300 hover:translate-y-[-3px] hover:text-black"
        >
          <MdLunchDining />
          <p className="ml-2 hidden md:block">Menu</p>
        </Link>

        <Link
          to={"/menu"}
          className="mx-3 flex items-center duration-300 hover:translate-y-[-3px] hover:text-black"
        >
          <MdLocationOn />
          <p className="ml-2 hidden md:block">Location</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
