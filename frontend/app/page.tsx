"use client";

import React, { useState } from "react";
import Btn from "./components/Button/Btn";
import Login from "./components/auth/loginw/Login";
import { signIn, signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log({ session, status });

  const handleLoginButtonClick = () => {
    signIn();
    setIsOpen(true);
  };

  return (
    <header className="text-white w-full fixed top-0 left-0 z-10" style={{ backgroundColor: "rgba(62, 58, 58, 0.6)" }}>
      <div className="max-w-full mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">Logo</div>

        <div className="justify-items-center relative">
          <div className="text-sm font-bold relative z-10">Home</div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-400"></div>
        </div>

        <div className="relative flex items-center mr-4">
          <div className=" border rounded-md border-white flex items-center">
            <div className=" p-2 ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="z-20 text-white-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            <div className=" p-2">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>

          <div
            className={`absolute top-full right-0  p-2 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
              isOpen ? "scale-y-100" : "scale-y-0"
            }`}
          >
            <div className="relative inline-block text-left">
              <div
                className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  <button
                    onClick={handleLoginButtonClick}
                    className="text-black ml-4 m-1 text-sm"
                  >
                    Login
                  </button>
                  <div className="border-t border-gray-400"></div>{" "}
                  <button
                    className="text-gray-700 block px-4 py-2 text-sm transition-colors duration-300 hover:bg-gray-100"
                    onClick={() => {}}
                  >
                    Register
                  </button>
                  {session && (
                    <>
                      <div className="border-t border-gray-400"></div>{" "}
                      <button
                        onClick={() => signOut()}
                        className="text-gray-700 block px-4 py-2 text-sm transition-colors duration-300 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
