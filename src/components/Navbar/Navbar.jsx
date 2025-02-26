import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Container from "../../shared/Container";
import { FiUser } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoClose, IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [isAuthVisible, setIsAuthVisible] = useState(false);

  const toggleAuthButtons = () => {
    setIsAuthVisible(!isAuthVisible);
  };

  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
    </>
  );
  return (
    <div className="py-3">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="btn btn-ghost text-xl">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-6 font-semibold">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="lg:flex hidden gap-2 items-center">
              <div className="">
                <button className=" text-[#e93740] hover:bg-[#e93740] cursor-pointer hover:text-white duration-500 rounded-full px-7 py-3  flex gap-2 items-center ">
                  {" "}
                  <FiUser></FiUser> Sign in
                </button>
              </div>
              <div className="">
                <button className="bg-[#e93740] cursor-pointer rounded-full px-7 py-3 text-white flex gap-2 items-center">
                  {" "}
                  <div className="text-[18px] font-semibold">
                    <GoPlus></GoPlus>{" "}
                  </div>{" "}
                  Register
                </button>
              </div>
            </div>
            <div className="lg:hidden flex">
            <button onClick={toggleAuthButtons} className="lg:hidden p-2">
              {isAuthVisible ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
            </div>
          </div>
        </div>
        {isAuthVisible && (
          <div className="lg:hidden absolute top-16 right-0 bg-white shadow-md z-10 p-4 rounded-md w-52">
            <button className="w-full text-[#e93740] hover:bg-[#e93740] cursor-pointer hover:text-white duration-500 rounded-full px-7 py-3 flex gap-2 items-center">
              <FiUser /> Sign in
            </button>
            <button className="w-full bg-[#e93740] cursor-pointer rounded-full px-7 py-3 text-white flex gap-2 items-center mt-2">
              <GoPlus className="text-[18px] font-semibold" /> Register
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
