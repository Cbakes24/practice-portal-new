"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  return (
    <div className=" flex p-3 bg-blue-300 rounded-lg">
      <nav className="bg-slate-200 p-3 hidden sm:flex sm:flex-row rounded-lg">
        <Link className="sm:p-2 mr-5 hover:bg-pink-400 " href="/">
          Home
        </Link>
        <Link className="sm:p-2 mr-5 hover:bg-pink-400" href="/users">
          Users
        </Link>
        <Link className="sm:p-2 mr-5 hover:bg-pink-400" href="/users/new">
          New User
        </Link>
      </nav>

      {/* Mobile Nav */}
      <div className="sm:hidden dropdown dropdown-hover">
      <label tabIndex={0} className=" btn m-1">DROP</label>
              <nav tabIndex={0} className="sm:hidden flex flex-col w-max p-2 dropdown-content ">
          <Link className="p-2 mr-5 mb-1 hover:bg-pink-400 rounded-md" href="/">
            Home
          </Link>
          <Link
            className="p-2 mr-5 mb-1 hover:bg-pink-400 rounded-md"
            href="/users"
          >
            Users
          </Link>
          <Link
            className="p-2 mr-5 mb-1 hover:bg-pink-400 rounded-md"
            href="/users/new"
          >
            New User
          </Link>
      </nav>
        </div> 


    </div>
  );
};

export default NavBar;
