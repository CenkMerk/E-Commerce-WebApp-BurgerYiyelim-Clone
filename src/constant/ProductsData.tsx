import Cheeseburger from "../../public/cheeseburger.jpg";
import Citirpeynir from "../../public/citirpeynir4adet.jpg";
import Cola from "../../public/cola.jpg";
import Efsanatavukburgermenu from "../../public/efsanatavukburgermenu.jpg";
import Falafelbomba from "../../public/falafelbomba.png";
import Fanta from "../../public/fanta.jpg";
import Kankamenu from "../../public/kankamenu.jpg";
import Kasapburger from "../../public/kasapburger.jpg";
import Magnolia from "../../public/magnolia.png";
import Mediumburger from "../../public/mediumburger.jpg";
import Mediumburgermenu from "../../public/mediumburgermenu.jpg";
import Mediumcheeseburger from "../../public/mediumcheeseburger.jpg";
import Mediumcheeseburgermenu from "../../public/mediumcheeseburgermenu.jpg";
import Mediumkasapburger from "../../public/mediumkasapburger.jpg";
import Mexicanburger from "../../public/mexicanburger.jpg";
import Nugget from "../../public/nugget4adet.png";
import Nuggetbomba from "../../public/nuggetbomba.png";
import Patetesbomba from "../../public/patetesbomba.png";
import Soganhalkasi from "../../public/soganhalkasi6adet.jpg";
import Sprite from "../../public/sprite.jpg";
import Super3luetmenu from "../../public/super3luetmenu.jpg";
import Super3lutavukmenu from "../../public/super3lutavukmenu.jpg";
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
    icon: <ImSpoonKnife size={25} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Patetes Bomba",
        price: "50",
        img: <Patetesbomba />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Falafel Bomba",
        price: "52",
        img: <Falafelbomba />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Nugget Bomba",
        price: "55",
        img: <Nuggetbomba />,
      },
    ],
  },
  {
    id: 2,
    categoryName: "Super Menus",
    icon: <IoFastFoodOutline size={25} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Kanka Menü",
        price: "220",
        img: <Kankamenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Süper 3lü Tavuk Menü",
        price: "320",
        img: <Super3lutavukmenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Süper 3lü Et Menü",
        price: "330",
        img: <Super3luetmenu />,
      },
    ],
  },
  {
    id: 3,
    categoryName: "Popular Menus",
    icon: <IoFastFoodOutline size={25} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Efsana Tavuk Burger Menü",
        price: "122",
        img: <Efsanatavukburgermenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Medium Burger Menü",
        price: "122",
        img: <Mediumburgermenu />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Medium Cheese Burger Menü",
        price: "128",
        img: <Mediumcheeseburgermenu />,
      },
    ],
  },
  {
    id: 4,
    categoryName: "Burgers",
    icon: <GiHamburger size={25} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Medium Burger",
        price: "98",
        img: <Mediumburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Medium Cheese Burger",
        price: "104",
        img: <Mediumcheeseburger />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Medium Kasap Burger",
        price: "106",
        img: <Mediumkasapburger />,
      },
    ],
  },
  {
    id: 5,
    categoryName: "Snacks",
    icon: <TbSalad size={25} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Nugget (4 Adet)",
        price: "30",
        img: <Nugget />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Çıtır Peynir (4 Adet)",
        price: "37",
        img: <Citirpeynir />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Soğan Halkası",
        price: "6 Adet",
        img: <Soganhalkasi />,
      },
    ],
  },
  {
    id: 6,
    categoryName: "Ice Creams",
    icon: <CiIceCream size={25} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Magnolia Oreolu",
        price: "32",
        img: <Magnolia />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Magnolia Muzlu",
        price: "32",
        img: <Magnolia />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Magnolia Çilekli",
        price: "32",
        img: <Magnolia />,
      },
    ],
  },
  {
    id: 7,
    categoryName: "Beverages",
    icon: <GiSodaCan size={25} />,
    products: [
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Coca-Cola",
        price: "27",
        img: <Cola />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Sprite",
        price: "27",
        img: <Sprite />,
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Fanta",
        price: "27",
        img: <Fanta />,
      },
    ],
  },
];
