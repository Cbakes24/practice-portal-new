"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  return (
    <div className="flex p-3 bg-red-300">
      <nav className="bg-slate-200 p-5 sm:flex hidden">
        <Link className="mr-5 hover:bg-pink-400 " href="/">
          Home
        </Link>
        <Link className="mr-5 hover:bg-pink-400" href="/users">
          Users
        </Link>
        <Link className="mr-5 hover:bg-pink-400" href="/users/new">
          New User
        </Link>
      </nav>

      {/* Mobile Nav */}
      <nav className='sm:hidden flex flex-col p-2 bg-green-300' >
      <Link className="mr-5 mb-1 hover:bg-pink-400 " href="/">
          Home
        </Link>
        <Link className="mr-5 mb-1 hover:bg-pink-400" href="/users">
          Users
        </Link>
        <Link className="mr-5 mb-1 hover:bg-pink-400" href="/users/new">
          New User
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
