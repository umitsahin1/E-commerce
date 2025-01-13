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
      <div className="flex md:justify-between items-center md:w-[1250px] justify-end">
        <nav className=" gap-3 link text-[#737373 hidden md:flex">
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

        <div className="flex sm:gap-6 items-center gap-3">
          <div className="flex items-center gap-2">
            <UserRound className="md:text-[#23A6F0] w-6 h-6 text-[#3C403D]" />
            <p className="link text-[#23A6F0] hidden md:block   ">
              Login / Register
            </p>
          </div>
          <Search className="md:text-[#23A6F0] w-6 h-6 text-[#3C403D]" />
          <ShoppingCart className="md:text-[#23A6F0] w-6 h-6 text-[#3C403D]" />
          <Heart className="md:text-[#23A6F0] w-6 h-6 text-[#3C403D] hidden md:block" />
          <Menu
            className="md:text-[#23A6F0] w-6 h-6 text-[#3C403D] md:hidden"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menü */}
      {isMenuOpen && (
        <div className="absolute top-[81px] right-0 w-3/5 bg-white shadow-lg z-10 flex flex-col md:hidden rounded-lg">
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
