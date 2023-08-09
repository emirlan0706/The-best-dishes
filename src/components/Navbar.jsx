import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSafeFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left size */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={35} />
        </div>
        <Link to={"/help"}>
          <h1 className="text-2xl sm:text-3xl  lg:text-4xl px-2">
            Best <span className=" font-bold">Eats</span>
          </h1>
        </Link>

        <div className="hidden  lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search input */}

      <div className="bg-gray-200 rounded-full  flex items-center px-2   w-[200px] sm:w-[400px]  lg:[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Seatch foods"
        />
      </div>
      {/* Cart Button  */}
      <button className=" bg-black text-white  hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu  */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Size Deraver Menu */}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className=" text-2xl p-4">
          Best <span className=" font-bold">East</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 ">
            <Link to={"/orders"}>
              <li className=" text-xl py-4 flex hover:bg-zinc-500 hover:border-l-4 hover:text-white">
                <TbTruckDelivery size={25} className="mr-4" />
                Orders
              </li>
            </Link>
            <Link to={"/favorite"}>
              <li className=" text-xl py-4 flex hover:bg-zinc-500 hover:border-l-4 hover:text-white">
                <MdFavorite size={25} className="mr-4" />
                Favorites
              </li>
            </Link>
            <Link to={"/wallet"}>
              <li className=" text-xl py-4 flex hover:bg-zinc-500 hover:border-l-4 hover:text-white">
                <FaWallet size={25} className="mr-4" />
                Wallet
              </li>
            </Link>
            <Link to={"/help"}>
              <li
                onClick={handleClick}
                className="text-xl  py-4 flex hover:bg-zinc-500 hover:border-l-4  hover:text-white "
              >
                <MdHelp size={25} className="mr-4" />
                Help
              </li>
            </Link>
            <li className=" text-xl py-4 flex hover:bg-zinc-500 hover:border-l-4 hover:text-white">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className=" text-xl py-4 flex hover:bg-zinc-500 hover:border-l-4 hover:text-white">
              <BsFillSafeFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className=" text-xl py-4 flex hover:bg-zinc-500 hover:border-l-4 hover:text-white">
              <FaUserFriends size={25} className="mr-4" />
              Inite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
