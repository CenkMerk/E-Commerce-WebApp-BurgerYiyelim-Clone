import { BsFillSignpost2Fill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { GoLocation } from "react-icons/go";

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
    icon: <GoLocation size={25} />,
    navigationKey: "/contact",
  },
];
