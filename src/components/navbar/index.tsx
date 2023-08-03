import React, { useState, useContext } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { auth as fauth, signOut } from "../../utils/firebase";

const Navbar: React.FC = () => {
  const context = useContext(Context);
  const { auth } = context;
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const signout = () => {
    signOut(fauth);
    console.log(fauth);
  };

  return (
    <div className="relative">
      <aside
        className={` ${
          isSidebarOpen ? "left-0 " : "-left-full "
        } fixed flex flex-col items-center justify-center gap-14 w-full h-screen bg-slate-950 z-50 opacity-90 lg:hidden`}
      >
        {isSidebarOpen && (
          <i
            className="fa fa-window-close text-2xl text-blue-500 cursor-pointer z-60 justify-end absolute right-10 top-10"
            aria-hidden="true"
            onClick={toggleSidebar}
          ></i>
        )}

        <img src={logo} alt="logo" />

        <div className="flex items-center gap-5">
          {auth ? (
            <button
              className="bg-blue-700 text-white p-4 rounded-full hover:bg-blue-500"
              onClick={signout}
            >
              Sign out
            </button>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-blue-700">
                Log in
              </Link>
              <Link
                to="/signup"
                className="bg-blue-700 text-white p-4 rounded-full hover:bg-blue-500"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </aside>
      <nav className={` navbar fixed z-40 w-full bg-white py-3`}>
        <div className="content flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden items-center justify-between gap-8 lg:flex">
            <a href="#myurl" className="  hover:text-blue-500">
              My URLs
            </a>
            <a href="#features" className="  hover:text-blue-500">
              Features
            </a>
            <a href="#pricing" className="  hover:text-blue-500">
              Pricing
            </a>
            <Link to="/dashboard" className="hover:text-blue-500">
              Analytics
            </Link>
            <a href="#faqs" className="  hover:text-blue-500">
              FAQs
            </a>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            {auth ? (
              <button
                className="bg-blue-700 text-white p-4 rounded-full hover:bg-blue-500"
                onClick={signout}
              >
                Sign out
              </button>
            ) : (
              <>
                <Link to="/login" className="text-blue-500 hover:text-blue-700">
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-700 text-white p-4 rounded-full hover:bg-blue-500"
                >
                  Try for free
                </Link>
              </>
            )}
          </div>
          <div className="block lg:hidden">
            {!isSidebarOpen && (
              <i
                className="fa fa-bars text-2xl text-blue-500 cursor-pointer"
                aria-hidden="true"
                onClick={toggleSidebar}
              ></i>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
