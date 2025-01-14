import BestSellerItem from "./BestSellerItem";

const Bestsellers = () => {
  return (
    <div className="md:w-[1124px md:h-[1241px] flex flex-col items-center md:justify-around  gap-10 ">
      <div className="flex flex-col gap-2 items-center justify-center md:mb-[-100px]">
        <h4 className="text-[#737373] hidden md:block ">Featured Products</h4>
        <h3 className="text-center w-[239px] md:w-[310px]">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-[#737373] text-center w-[261px] md:w-[347px]">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <BestSellerItem />
      <button className="border-[1px] border-[#23A6F0] text-[#23A6F0] w-[256px] h-[52px] rounded-lg md:mt-[-100px]">
        LOAD MORE PRODUCTS
      </button>
    </div>
  );
};

export default Bestsellers;
