import { ChevronDown, Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

import Gravatar from "react-gravatar";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../store/actions/authActions";
import CategoryDropdown from "./CategoryDropdown";
import { FaRegUser } from "react-icons/fa";
import CartDropdown from "./cart/CartDropDown";

const HeaderLight = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userEmail = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isCartFlipping, setIsCartFlipping] = useState(false);

  console.log(isCartFlipping);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const openCategoryDropdown = () => {
    setIsCategoryDropdownOpen(true);
  };

  const closeCategoryDropdown = () => {
    setIsCategoryDropdownOpen(false);
  };

  const toggleCartDropdown = () => {
    setIsCartFlipping(true);
    setIsCartDropdownOpen((prev) => !prev);
    setTimeout(() => setIsCartFlipping(false), 500);
  };

  const closeCartDropdown = () => {
    setIsCartDropdownOpen(false);
  };

  const logout = () => {
    localStorage.clear();
    dispatch(setAuthenticated(false));
  };

  const cartItems = useSelector((state) => state.cart.cart);
  const cartItemCount = cartItems
    ? cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0)
    : 0;
  return (
    <div className=" relative flex justify-between items-center h-[136px] px-10">
      <Link to="/">
        <h3>Bandage</h3>
      </Link>
      <div className="flex md:justify-between items-center md:w-[1250px] justify-end z-40">
        <nav className=" gap-3 link text-[#737373] hidden md:flex">
          <Link className=" hover:text-[#252B42] hover:scale-105" to="/">
            Home
          </Link>
          <Link
            className="relative hover:text-[#252B42] hover:scale-105"
            to="/shop"
            onMouseEnter={openCategoryDropdown}
            onMouseLeave={closeCategoryDropdown}
          >
            <button className=" flex gap-1 hover:text-[#252B42] hover:scale-110">
              Shop
              <ChevronDown className="w-[15px]" />
            </button>
            {isCategoryDropdownOpen && (
              <div
                onMouseEnter={openCategoryDropdown}
                onMouseLeave={closeCategoryDropdown}
              >
                <CategoryDropdown onClose={closeCategoryDropdown} />
              </div>
            )}
          </Link>
          <Link className=" hover:text-[#252B42] hover:scale-105" to="/about">
            About
          </Link>
          <Link className=" hover:text-[#252B42] hover:scale-105" to="/blog">
            Blog
          </Link>
          <Link className=" hover:text-[#252B42] hover:scale-105" to="/contact">
            Contact
          </Link>
          <Link className=" hover:text-[#252B42] hover:scale-105" to="/team">
            Team
          </Link>
        </nav>

        <div className="flex md:gap-6 items-center gap-3">
          <Link
            className=" hover:text-[#252B42] hover:scale-105 flex gap-4"
            to="/login"
          >
            {userEmail ? (
              <Gravatar email={userEmail} size={27} className="rounded-full" />
            ) : (
              <FaRegUser size={23} className="text-[#23A6F0] " />
            )}

            <div className="flex items-center gap-2">
              {isAuthenticated === true ? (
                <p
                  className=" text-[#23A6F0] hidden md:block cursor-pointer text-lg  "
                  onClick={logout}
                >
                  Logout
                </p>
              ) : (
                <p className="text-[#23A6F0] hidden md:block text-lg">
                  Login / Register
                </p>
              )}
            </div>
          </Link>
          <Search className="md:text-[#23A6F0] w-6 h-6 text-[#3C403D]" />
          <div className="relative ">
            <ShoppingCart
              className={`md:text-[#23A6F0] w-6 h-6 text-[#3C403D] cursor-pointer transition-transform duration-500 ${
                isCartFlipping ? "transform rotate-45" : ""
              }`}
              onClick={toggleCartDropdown}
            />
            {cartItemCount > 0 && (
              <span className="absolute top-[-8px] right-[-18px] bg-red-500 text-white rounded-full text-xs px-1.5 py-0.5">
                {cartItemCount}
              </span>
            )}
            {isCartDropdownOpen && (
              <div className="absolute top-[50px] -right-20 w-[450px] bg-gray-100 shadow-lg rounded-md overflow-hidden z-50">
                <CartDropdown onClose={closeCartDropdown} />
              </div>
            )}
          </div>
          <div className="relative group hidden md:block">
            <Heart className="md:text-[#23A6F0] w-6 h-6 text-[#3C403D] cursor-pointer" />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Favorilerim
            </span>
          </div>
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
