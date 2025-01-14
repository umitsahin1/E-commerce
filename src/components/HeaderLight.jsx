import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderLight = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center h-[136px] px-10">
      <h3>Bandage</h3>
      <div className="flex xl:justify-between items-center xl:w-[1250px] justify-end">
        <nav className=" gap-3 link text-[#737373] hidden 2xl:flex">
          <Link className=" hover:text-[#252B42] hover:scale-110" to="/">
            Home
          </Link>
          <Link
            className=" flex gap-1 hover:text-[#252B42] hover:scale-110"
            to="/shop"
          >
            Shop
            <ChevronDown className="w-[15px]" />
          </Link>
          <Link className=" hover:text-[#252B42] hover:scale-110" to="/about">
            About
          </Link>
          <Link className=" hover:text-[#252B42] hover:scale-110" to="/blog">
            Blog
          </Link>
          <Link className=" hover:text-[#252B42] hover:scale-110" to="/contact">
            Contact
          </Link>
          <Link className=" hover:text-[#252B42] hover:scale-110" to="/pages">
            Pages
          </Link>
        </nav>

        <div className="flex xl:gap-6 items-center gap-3">
          <div className="flex items-center gap-2">
            <UserRound className="xl:text-[#23A6F0] w-6 h-6 text-[#3C403D] hidden xl:block" />
            <p className="link text-[#23A6F0] hidden xl:block   ">
              Login / Register
            </p>
          </div>
          <Search className="xl:text-[#23A6F0] w-6 h-6 text-[#3C403D]" />
          <ShoppingCart className="xl:text-[#23A6F0] w-6 h-6 text-[#3C403D]" />
          <Heart className="xl:text-[#23A6F0] w-6 h-6 text-[#3C403D] hidden xl:block" />
          <Menu
            className="xl:text-[#23A6F0] w-6 h-6 text-[#3C403D] xl:hidden"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menü */}
      {isMenuOpen && (
        <div className="absolute top-[81px] right-0 w-3/5 bg-white shadow-lg z-10 flex flex-col xl:hidden rounded-lg ">
          <Link
            className="hover:text-[#252B42] hover:scale-110 py-2 w-full text-center"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#252B42] hover:scale-110 py-2 w-full text-center"
            to="/product"
          >
            Product
          </Link>
          <Link
            className="hover:text-[#252B42] hover:scale-110 py-2 w-full text-center"
            to="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="hover:text-[#252B42] hover:scale-110 py-2 w-full text-center"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderLight;
