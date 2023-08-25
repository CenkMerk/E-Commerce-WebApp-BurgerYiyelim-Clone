import Cheeseburger from "cheeseburger.jpg";
import Citirpeynir from "citirpeynir4adet.jpg";
import Cola from "cola.jpg";
import Efsanatavukburgermenu from "efsanatavukburgermenu.jpg";
import Falafelbomba from "falafelbomba.png";
import Fanta from "fanta.jpg";
import Kankamenu from "kankamenu.jpg";
import Kasapburger from "kasapburger.jpg";
import Magnolia from "magnolia.png";
import Mediumburger from "mediumburger.jpg";
import Mediumburgermenu from "mediumburgermenu.jpg";
import Mediumcheeseburger from "mediumcheeseburger.jpg";
import Mediumcheeseburgermenu from "mediumcheeseburgermenu.jpg";
import Mediumkasapburger from "mediumkasapburger.jpg";
import Mexicanburger from "mexicanburger.jpg";
import Nugget from "nugget4adet.png";
import Nuggetbomba from "nuggetbomba.png";
import Patetesbomba from "patetesbomba.png";
import Soganhalkasi from "soganhalkasi6adet.jpg";
import Sprite from "sprite.jpg";
import Super3luetmenu from "super3luetmenu.jpg";
import Super3lutavukmenu from "super3lutavukmenu.jpg";
import { ImSpoonKnife } from "react-icons/im";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiHamburger } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { CiIceCream } from "react-icons/ci";
import { GiSodaCan } from "react-icons/gi";

export const ProductsData = [
  {
    id: 1,
    categoryName: "Patetes Bomb",
    icon: <ImSpoonKnife size={18} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        productName: "Patetes Bomba",
        price: "50",
        img: <Patetesbomba />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Falafel Bomba",
        price: "52",
        img: <Falafelbomba />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Nugget Bomba",
        price: "55",
        img: <Nuggetbomba />,
      },
    ],
  },
  {
    id: 2,
    categoryName: "Super Menus",
    icon: <IoFastFoodOutline size={18} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        productName: "Kanka Menü",
        price: "220",
        img: <Kankamenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Süper 3lü Tavuk Menü",
        price: "320",
        img: <Super3lutavukmenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Süper 3lü Et Menü",
        price: "330",
        img: <Super3luetmenu />,
      },
    ],
  },
  {
    id: 3,
    categoryName: "Advantageous Menus",
    icon: <IoFastFoodOutline size={18} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        productName: "Efsana Tavuk Burger Menü",
        price: "122",
        img: <Efsanatavukburgermenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Medium Burger Menü",
        price: "122",
        img: <Mediumburgermenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Medium Cheese Burger Menü",
        price: "128",
        img: <Mediumcheeseburgermenu />,
      },
    ],
  },
  {
    id: 4,
    categoryName: "Burgers",
    icon: <GiHamburger size={18} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        productName: "Medium Burger",
        price: "98",
        img: <Mediumburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Medium Cheese Burger",
        price: "104",
        img: <Mediumcheeseburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Medium Kasap Burger",
        price: "106",
        img: <Mediumkasapburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Cheese Burger",
        price: "119",
        img: <Cheeseburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Kasap Burger",
        price: "122",
        img: <Kasapburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Mexicano Burger",
        price: "122",
        img: <Mexicanburger />,
      },
    ],
  },
  {
    id: 5,
    categoryName: "Snacks",
    icon: <TbSalad size={18} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        productName: "Nugget (4 Adet)",
        price: "30",
        img: <Nugget />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Çıtır Peynir (4 Adet)",
        price: "37",
        img: <Citirpeynir />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Soğan Halkası",
        price: "6 Adet",
        img: <Soganhalkasi />,
      },
    ],
  },
  {
    id: 6,
    categoryName: "Ice Creams",
    icon: <CiIceCream size={18} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        productName: "Magnolia Oreolu",
        price: "32",
        img: <Magnolia />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Magnolia Muzlu",
        price: "32",
        img: <Magnolia />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Magnolia Çilekli",
        price: "32",
        img: <Magnolia />,
      },
    ],
  },
  {
    id: 7,
    categoryName: "Beverages",
    icon: <GiSodaCan size={18} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        productName: "Coca-Cola",
        price: "27",
        img: <Cola />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Sprite",
        price: "27",
        img: <Sprite />,
      },
      {
        id: Math.round(Math.random() * 999999),
        productName: "Fanta",
        price: "27",
        img: <Fanta />,
      },
    ],
  },
];
