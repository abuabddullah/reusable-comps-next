import Link from "next/link";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbAntennaBars5 } from "react-icons/tb";

const DashHeader = ({ openDropdown, toggleDropdown }) => {
  return (
    <div className="flex justify-end items-center mb-6 bg-white p-6  mt-20 lg:mt-0">
      {/* Dropdown for Header */}
      <div>
        <button
          onClick={() => toggleDropdown("headerBtn")}
          className="flex justify-between items-center w-full p-3 text-gray-600 hover:bg-gray-200 font-bold border"
        >
          <div className="flex items-center">
            <TbAntennaBars5 className="mr-2 bg-red-600 rounded-full p-1 text-2xl text-white" />
            <span>Landing Page</span>
          </div>
          <IoMdArrowDropdown size={20} />
        </button>
        {openDropdown === "headerBtn" && (
          <ul className="p-5 space-y-2  absolute bg-white mt-4 shadow-md lg:min-w-48">
            <li>
              <Link
                href="/account-setting"
                className="block p-2 text-gray-600 hover:bg-gray-200 font-bold text-sm"
              >
                Account Setting
              </Link>
            </li>
            <li className="block p-2 text-gray-600 hover:bg-gray-200 font-bold text-sm">
              Log out
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DashHeader;
