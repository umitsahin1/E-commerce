import { ChevronRight } from "lucide-react";

const ShopCards = () => {
  const images = [
    "public/shop-görsel-1.svg",
    "public/shop-görsel-2.svg",
    "public/shop-görsel-3.svg",
    "public/shop-görsel-4.svg",
    "public/shop-görsel-5.svg",
  ];
  return (
    <div className="bg-[#FAFAFA]  md:h-[363px] flex flex-col justify-center gap-4">
      <div className="flex flex-col md:flex-row gap-10 justify-between mx-auto md:w-[1042px] md:h-[58px] items-center mt-12  md:mt-0">
        <h3>Shop</h3>
        <div className="flex gap-2 link items-center">
          <p>Home</p>
          <ChevronRight className="text-[#BDBDBD] link" />
          <p className="text-[#BDBDBD]">Shop</p>
        </div>
      </div>
      <div className="flex flex-col justify-around md:flex-row h-[1428px] md:w-[1088px] md:h-[223px] mx-auto gap-4 ">
        {images.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center w-[205px]  h-[223px] text-white"
            key={index}
            style={{ backgroundImage: `url(${item})` }}
          >
            <h5>CLOTHS</h5>
            <p>5 Items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCards;
