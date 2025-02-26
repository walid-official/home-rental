import React from "react";
import logo from "../../assets/images/logo.png";
import Container from "../../shared/Container";
import { FiUser } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
const Navbar = () => {
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
        <div className="navbar ">
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
            <div className="flex gap-2 items-center">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
