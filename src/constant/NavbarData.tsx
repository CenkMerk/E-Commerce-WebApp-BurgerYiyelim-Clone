import { BsFillSignpost2Fill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";

export const NavbarData = [
  {
    text: "LOCATIONS",
    icon: <BsFillSignpost2Fill size={25} />,
    navigationKey: "/location",
  },
  {
    text: "ABOUT US",
    icon: <FaInfo size={25} />,
    navigationKey: "/aboutUs",
  },
  {
    text: "PRODUCTS",
    icon: <ImSpoonKnife size={25} />,
    navigationKey: "/product",
  },
  {
    text: "CONTACT",
    icon: <IoLocationSharp size={25} />,
    navigationKey: "/contact",
  },
];
