import React from "react";
import {
  HiOutlineMenuAlt2,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineHeart,
  HiOutlineTruck } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen p-2 bg-gray-100">
      <ul className="p-5 space-y-10">
        <li>
          <button>
            <HiOutlineMenuAlt2 size={"1.5rem"} />
          </button>
        </li>

        <li>
          <NavLink to="/">
            <button>
              <HiOutlineHome size={"1.5rem"} className="hover:text-red-700" />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            <button>
              <HiOutlineShoppingCart size={"1.5rem"} className="hover:text-red-700" />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/favs">
            <button>
              <HiOutlineHeart size={"1.5rem"} className="hover:text-red-700" />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders">
            <button>
              <HiOutlineTruck size={"1.5rem"} className="hover:text-red-700" />
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
