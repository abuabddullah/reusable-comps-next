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

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <FaHome className="mr-2" />,
  },
  {
    name: "Landing Page",
    href: "",
    icon: <TbAntennaBars5 className="mr-2" />,
    dropdown: [
      {
        name: "At A Glance",
        href: "/dashboard/at-a-glance",
      },
      {
        name: "Services",
        href: "/landingPage/services",
      },
      {
        name: "Tech Tool Boxes",
        href: "/landingPage/tech-tool-boxes",
      },
    ],
  },
  {
    name: "Works",
    href: "/works",
    icon: <FaBriefcase className="mr-2" />,
  },
  {
    name: "Blog",
    href: "",
    icon: <FaBook className="mr-2" />,
    dropdown: [
      {
        name: "Category",
        href: "/blog/category",
      },
      {
        name: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    name: "FAQ",
    href: "/faq",
    icon: <MdQuestionMark className="mr-2" />,
  },
  {
    name: "Contacts",
    href: "/contacts",
    icon: <FaRegPaperPlane className="mr-2" />,
  },
  {
    name: "User",
    href: "/user",
    icon: <FaUsers className="mr-2" />,
  },
  {
    name: "Career",
    href: "",
    icon: <AiOutlineMenuUnfold className="mr-2" />,
    dropdown: [
      {
        name: "Department",
        href: "/career/department",
      },
      {
        name: "Job",
        href: "/career/job",
      },
      {
        name: "Online Application",
        href: "/career/application",
      },
    ],
  },
  {
    name: "Subscriptions",
    href: "/subscriptions",
    icon: <IoMdMenu className="mr-2" />,
  },
  {
    name: "Client Review",
    href: "/client-review",
    icon: <FaRegStar className="mr-2" />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <FaCog className="mr-2" />,
  },
];

const DashBoardSideBar = ({ isSidebarOpen, openDropdown, toggleDropdown }) => {
  return (
    <>
      <aside
        className={`w-full lg:w-1/5 bg-white lg:static fixed ${
          isSidebarOpen ? "left-0" : "-left-full"
        } transition-all duration-300 ease-in-out border-e`}
      >
        <div className="flex items-center p-6">
          <Image
            src="https://www.hrm-api.bdcare.vip/uploads/logo/Tech-logo.png"
            alt="HRM Logo"
            layout="responsive" // Make the image responsive
            width={150} // Original width of the image
            height={50} // Original height of the image
            className="w-full" // Add w-full to make it take full width
          />
        </div>
        <nav className="mt-0">
          <ul className="space-y-2 px-6">
            {navItems.map((item, index) => {
              if (item.dropdown) {
                return (
                  <li key={index}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex justify-between items-center w-full p-3 text-dashCaviarTitleText rounded-lg text-lg hover:bg-dashPrimary hover:text-white "
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <IoMdArrowDropdown size={20} />
                    </button>
                    {openDropdown === item.name && (
                      <ul className="pl-5 space-y-2">
                        {item.dropdown.map((subItem, subIndex) => {
                          return (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                className="block p-2 text-dashCaviarTitleText rounded-lg text-lg hover:bg-dashPrimary hover:text-white  text-sm"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center p-3 text-dashCaviarTitleText rounded-lg text-lg hover:bg-dashPrimary hover:text-white  text-sm "
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default DashBoardSideBar;
