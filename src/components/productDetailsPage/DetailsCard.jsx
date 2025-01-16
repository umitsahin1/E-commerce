import { ChevronRight } from "lucide-react";
import DetailsSlider from "./DetailsSlider";
import InformationCard from "./InformationCard";

const DetailsCard = () => {
  return (
    <div className="bg-[#FAFAFA] p-10">
      <div className="md:h-[690px] md:w-[1050px] mx-auto flex flex-col">
        <div>
          <div className="flex gap-2 link items-center h-[92px] ">
            <p>Home</p>
            <ChevronRight className="text-[#BDBDBD] link" />
            <p className="text-[#BDBDBD]">Shop</p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-4 ">
          <DetailsSlider />
          <InformationCard />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
