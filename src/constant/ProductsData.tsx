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
        img: "patetesbomba.png",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Falafel Bomba",
        price: "52",
        img: "falafelbomba.png",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Nugget Bomba",
        price: "55",
        img: "nuggetbomba.png",
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
        img: "kankamenu.jpg",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Süper 3lü Tavuk Menü",
        price: "320",
        img: "super3lutavukmenu.jpg",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Süper 3lü Et Menü",
        price: "330",
        img: "super3luetmenu.jpg",
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
        img: "efsanatavukburgermenu",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Medium Burger Menü",
        price: "122",
        img: "mediumburgermenu.jpg",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Medium Cheese Burger Menü",
        price: "128",
        img: "mediumcheeseburgermenu.jpg",
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
        img: "mediumburger.jpg",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Medium Cheese Burger",
        price: "104",
        img: "mediumcheeseburger.jpg",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Medium Kasap Burger",
        price: "106",
        img: "mediumkasapburger.jpg",
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
        img: "nugget4adet.png",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Çıtır Peynir (4 Adet)",
        price: "37",
        img: "citirpeynir4adet.jpg",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Soğan Halkası",
        price: "6 Adet",
        img: "soganhalkasi6adet.jpg",
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
        img: "magnolia.png",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Magnolia Muzlu",
        price: "32",
        img: "magnolia.png",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Magnolia Çilekli",
        price: "32",
        img: "magnolia.png",
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
        img: "cola.jpg",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Sprite",
        price: "27",
        img: "sprite.jpg",
      },
      {
        id: Math.round(Math.random() * 999999),
        quantity: 1,
        productName: "Fanta",
        price: "27",
        img: "fanta.jpg",
      },
    ],
  },
];
