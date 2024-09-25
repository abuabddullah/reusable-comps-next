import {
  MdQuestionMark,
  // MdRefresh,
} from "react-icons/md";
import {
  FaHome,
  FaBook,
  FaUsers,
  FaBriefcase,
  FaCog,
  FaRegPaperPlane,
  FaRegStar,
} from "react-icons/fa"; // Import your icons
import { TbAntennaBars5 } from "react-icons/tb";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const DashBoardSideBar = ({ isSidebarOpen, openDropdown, toggleDropdown }) => {
  return (
    <>
      <aside
        className={`w-full lg:w-1/5 bg-white shadow-md lg:static fixed ${
          isSidebarOpen ? "left-0" : "-left-full"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <Image
            src="https://jmctl-api.bdcare.vip/uploads/company/1725884397.png" // Replace with your logo
            alt="Company Logo"
            className="max-h-32 w-full"
            width={100}
            height={100}
          />
        </div>
        <nav className="mt-5">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center p-3 text-gray-600 hover:bg-gray-200 font-bold text-sm"
              >
                <FaHome className="mr-2" />
                Dashboard
              </Link>
            </li>

            {/* Dropdown for Landing Page */}
            <li>
              <button
                onClick={() => toggleDropdown("landing")}
                className="flex justify-between items-center w-full p-3 text-gray-600 hover:bg-gray-200 font-bold"
              >
                <div className="flex items-center">
                  <TbAntennaBars5 className="mr-2" />
                  <span>Landing Page</span>
                </div>
                <IoMdArrowDropdown size={20} />
              </button>
              {openDropdown === "landing" && (
                <ul className="pl-5 space-y-2">
                  <li>
                    <Link
                      href="/dashboard/at-a-glance"
                      className="block p-2 text-gray-600 hover:bg-gray-200 font-bold text-sm"
                    >
                      At A Glance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="landingPage/services"
                      className="block p-2 text-gray-600 hover:bg-gray-200 font-bold text-sm"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="landingPage/tech-tool-boxes"
                      className="block p-2 text-gray-600 hover:bg-gray-200 font-bold text-sm"
                    >
                      Tech Tool Boxes
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/works"
                className="flex items-center p-3 text-gray-600 hover:bg-gray-200 font-bold text-sm"
              >
                <FaBriefcase className="mr-2" />
                Works
              </Link>
            </li>

            {/* Dropdown for Blog */}
            <li>
              <button
                onClick={() => toggleDropdown("blog")}
                className="flex justify-between items-center w-full p-3 text-gray-600 hover:bg-gray-200 font-bold"
              >
                <div className="flex items-center">
                  <FaBook className="mr-2" />
                  <span>Blog</span>
                </div>
                <IoMdArrowDropdown size={20} />
              </button>
              {openDropdown === "blog" && (
                <ul className="pl-5 space-y-2">
                  <li>
                    <Link
                      href="blog/category"
                      className="block p-2 text-gray-600 hover:bg-gray-200 font-bold text-sm"
                    >
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="blog"
                      className="block p-2 text-gray-600 hover:bg-gray-200 font-bold text-sm"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/faq"
                className="flex items-center p-3 text-gray-600 hover:bg-gray-200 font-bold text-sm"
              >
                <MdQuestionMark className="mr-2" />
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="flex items-center p-3 text-gray-600 hover:bg-gray-200 font-bold text-sm"
              >
                <FaRegPaperPlane className="mr-2" />
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="/user"
                className="flex items-center p-3 text-gray-600 hover:bg-gray-200 font-bold text-sm"
              >
                <FaUsers className="mr-2" />
                User
              </Link>
            </li>

            {/* Dropdown for Career */}
            <li>
              <button
                onClick={() => toggleDropdown("career")}
                className="flex justify-between items-center w-full p-3 text-gray-600 hover:bg-gray-200 font-bold"
              >
                <div className="flex items-center">
                  <AiOutlineMenuUnfold className="mr-2" />
                  <span>Career</span>
                </div>
                <IoMdArrowDropdown size={20} />
              </button>
              {openDropdown === "career" && (
                <ul className="pl-5 space-y-2">
                  <li>
                    <Link
                      href="career/department"
                      className="block p-2 text-gray-600 hover:bg-gray-200 font-bold text-sm"
                    >
                      Department
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="career/job"
                      className="block p-2 text-gray-600 hover:bg-gray-200 font-bold text-sm"
                    >
                      Job
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="career/application"
                      className="block p-2 text-gray-600 hover:bg-gray-200 font-bold text-sm"
                    >
                      Online Application
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/subscriptions"
                className="flex items-center p-3 text-gray-600 hover:bg-gray-200 font-bold text-sm"
              >
                <IoMdMenu className="mr-2" />
                Subscriptions
              </Link>
            </li>
            <li>
              <Link
                href="/client-review"
                className="flex items-center p-3 text-gray-600 hover:bg-gray-200 font-bold text-sm"
              >
                <FaRegStar className="mr-2" />
                Client Review
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="flex items-center p-3 text-gray-600 hover:bg-gray-200 font-bold text-sm"
              >
                <FaCog className="mr-2" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default DashBoardSideBar;
