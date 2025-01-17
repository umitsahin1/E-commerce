import { useState } from "react";
import Addittional from "./Addittional";
import Description from "./Description";
import Reviews from "./Reviews";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Description");
  console.log(activeTab);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col gap-6 ">
      <nav className="flex md:justify-center  items-center  mx-auto md:gap-10 gap-4 h-[72px]">
        <p
          onClick={() => handleClick("Description")}
          className={`link cursor-pointer hover:scale-105  ${
            activeTab === "Description" ? "text-[#23A6F0]" : "text-[#737373]"
          }`}
        >
          Description
        </p>
        <p
          onClick={() => handleClick("Additional Information")}
          className={`link cursor-pointer hover:scale-105  ${
            activeTab === "Additional Information"
              ? "text-[#23A6F0]"
              : "text-[#737373]"
          }`}
        >
          Additional Information
        </p>
        <p
          onClick={() => handleClick("Reviews")}
          className={`link cursor-pointer hover:scale-105   ${
            activeTab === "Reviews" ? "text-[#23A6F0]" : "text-[#737373]"
          }`}
        >
          Reviews <span className="text-[#23856D]"> (0)</span>
        </p>
      </nav>
      <hr className="md:w-[1050px] mx-auto" />
      <div style={{ minHeight: "670px" }}>
        {activeTab === "Description" ? (
          <Description />
        ) : activeTab === "Additional Information" ? (
          <Addittional />
        ) : (
          <Reviews />
        )}
      </div>
    </div>
  );
};

export default NavBar;
