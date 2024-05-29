import { FaUser } from "react-icons/fa";
import {
  MdDashboard,
  MdMenuBook,
  MdOutlineLunchDining,
  MdOutlineManageHistory,
} from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";

const MenuItems = [
  {
    id: 1,
    icon: MdDashboard,
    text: "Admin Dashboard",
    link: "/admin-dashboard",
  },
  {
    id: 2,
    icon: MdOutlineManageHistory,
    text: "Menu Management",
    link: "/menu-management",
  },

  {
    id: 3,
    icon: MdMenuBook,
    text: "Todays Menu",
    className: "text-white",
    link: "/todays-menu",
  },
  {
    id: 3,
    icon: MdOutlineLunchDining,
    text: "My Lunch Selection",
    className: "text-white",
    link: "/my-selection",
  },
  {
    id: 3,
    icon: FaUser,
    text: "Employee",
    className: "text-white",
    link: "/users",
  },

  { id: 4, icon: RiLogoutCircleLine, text: "Logout", link: "/logout" },
];

export default MenuItems;
