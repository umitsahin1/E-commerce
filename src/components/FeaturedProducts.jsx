const FeaturedProducts = () => {
  return (
    <div className="flex flex-col-reverse gap-20 md:w-[1050px] mx-auto md:justify-between md:flex-row  items-center">
      <div className=" gap-4 hidden  md:flex">
        <img src="/homepage-7-görsel-1.svg" />
        <img src="/homePage-7-görsel-2.svg" />
      </div>
      <img className="block md:hidden" src="/hero-cover-212a.svg" />
      <div className="w-[280px] md:w-[447px] flex flex-col gap-5 justify-center">
        <h5 className="text-[#23A6F0]">Featured Products</h5>
        <h2 className="text-[#252B42] w-[246px] md:w-[431px]">
          We love what we do
        </h2>
        <div className="w-[258px] md:w-[351px] ">
          <p className="text-[#737373] mb-4">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
