import { FaUser } from "react-icons/fa";
import {
  MdDashboard,
  MdMenuBook,
  MdOutlineLunchDining,
  MdOutlineManageHistory,
} from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import Swal from "sweetalert2";


  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "No, stay logged in",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the logout action here, e.g., clear localStorage and redirect
        localStorage.removeItem("role");
        window.location.href = "/login"; // Redirect to the login page or another appropriate page
      }
    });
  };

const MenuItems = [
  {
    id: 1,
    icon: MdDashboard,
    text: "Admin Dashboard",
    link: "/admin-dashboard",
    roles: ["ADMIN"],
  },
  {
    id: 2,
    icon: MdOutlineManageHistory,
    text: "Menu Management",
    link: "/menu-management",
    roles: ["ADMIN"],
  },

  {
    id: 3,
    icon: MdMenuBook,
    text: "Todays Menu",
    className: "text-white",
    link: "/todays-menu",
    roles: ["ADMIN", "EMPLOYEE"],
  },
  {
    id: 3,
    icon: MdOutlineLunchDining,
    text: "My Lunch Selection",
    className: "text-white",
    link: "/my-selection",
    roles: ["ADMIN", "EMPLOYEE"],
  },
  {
    id: 3,
    icon: FaUser,
    text: "Employee",
    className: "text-white",
    link: "/users",
    roles: ["ADMIN"],
  },

  {
    id: 4,
    icon: RiLogoutCircleLine,
    text: "Logout",
    link: "/logout",
    roles: ["ADMIN", "EMPLOYEE"],
    onClick: handleLogout,
  },
];

export default MenuItems;
