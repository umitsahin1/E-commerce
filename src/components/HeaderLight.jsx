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
import { BiMenuAltRight } from "react-icons/bi";

const HeaderLight = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center h-[136px] px-10">
      <Link to="/">
        <h3>Bandage</h3>
      </Link>
      <div className="flex md:justify-between items-center md:w-[1250px] justify-end">
        <nav className=" gap-3 link text-[#737373] hidden md:flex">
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
          <Link className=" hover:text-[#252B42] hover:scale-110" to="/team">
            Team
          </Link>
        </nav>

        <div className="flex md:gap-6 items-center gap-3">
          <Link className=" hover:text-[#252B42] hover:scale-110" to="/signup">
            <div className="flex items-center gap-2">
              <UserRound className="xl:text-[#23A6F0] w-6 h-6 text-[#3C403D] " />
              <p className="link text-[#23A6F0] hidden md:block   ">
                Login / Register
              </p>
            </div>
          </Link>
          <Search className="md:text-[#23A6F0] w-6 h-6 text-[#3C403D]" />
          <ShoppingCart className="md:text-[#23A6F0] w-6 h-6 text-[#3C403D]" />
          <Heart className="md:text-[#23A6F0] w-6 h-6 text-[#3C403D] hidden md:block" />
          {isMenuOpen ? (
            <BiMenuAltRight className="w-6 h-6" onClick={toggleMenu} />
          ) : (
            <Menu
              className="md:text-[#23A6F0] w-6 h-6 text-[#3C403D] md:hidden"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="absolute top-[81px] right-0 w-full h-[500px] bg-white  z-10 flex flex-col  justify-center gap-4 md:hidden rounded-lg ">
          <Link
            className="hover:text-[#252B42] hover:scale-110 py-2 w-full text-center mobile-menu text-[#737373]"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#252B42] hover:scale-110 py-2 w-full text-center mobile-menu text-[#737373]"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className="hover:text-[#252B42] hover:scale-110 py-2 w-full text-center mobile-menu text-[#737373]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-[#252B42] hover:scale-110 py-2 w-full text-center mobile-menu text-[#737373]"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="hover:text-[#252B42] hover:scale-110 py-2 w-full text-center mobile-menu text-[#737373]"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="hover:text-[#252B42] hover:scale-110 py-2 w-full text-center mobile-menu text-[#737373]"
            to="/team"
          >
            Team
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderLight;
