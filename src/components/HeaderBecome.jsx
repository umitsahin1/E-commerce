import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import CategoryDropdown from "./CategoryDropdown";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HeaderBecome = () => {
  const isAuth = localStorage.getItem("isAuthenticated");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const history = useHistory();

  const handleClickBecome = () => {
    if (isAuth === "true") {
      toast.success("Siz zaten üyesiniz");
    } else {
      history.push("/signup");
    }
  };

  const openCategoryDropdown = () => {
    setIsCategoryDropdownOpen(true);
  };

  const closeCategoryDropdown = () => {
    setIsCategoryDropdownOpen(false);
  };
  return (
    <div className="flex md:justify-around justify-between items-center h-[91px] px-10 md:gap-20">
      <Link to="/">
        <h3>Bandage</h3>
      </Link>
      <div className="flex md:justify-between items-center md:w-[1250px] justify-end md:gap-20">
        <nav className=" gap-3 link text-[#737373] hidden md:flex">
          <Link className=" hover:text-[#252B42] hover:scale-110" to="/">
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
          {!isAuth && (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <p className="link text-[#23A6F0]  ">Login</p>
              </Link>
            </div>
          )}

          <button
            onClick={handleClickBecome}
            className="text-white w-[214px] h-[52px] bg-[#23A6F0] md:block hidden rounded-lg"
          >
            Become a member
          </button>
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

      {/* Mobile Dropdown Menü */}
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
            to="/pricing"
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

export default HeaderBecome;
