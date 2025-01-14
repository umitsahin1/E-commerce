const BestService = () => {
  return (
    <div className="flex flex-col gap-48 mt-20">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h4 className="text-[#737373] hidden md:block ">Featured Products</h4>
        <h3 className="text-center w-[239px] md:w-[310px]">
          THE BEST SERVICES
        </h3>
        <p className="text-[#737373] text-center w-[261px] md:w-[347px]">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-24 md:w-[1045px] mx-auto justify-around">
        <div className="flex flex-col gap-2 items-center">
          <img className="w-[72px] h-[72px]" src="/icon cool-icon-1153.svg" />
          <h3>Easy Wins</h3>
          <p className="w-[225px] text-center text-[#737373]">
            Get your best looking smile now!
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img className="w-[72px] h-[72px]" src="/carbon_book.svg" />
          <h3>Concrete</h3>
          <p className="w-[225px] text-center text-[#737373]">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img className="w-[72px] h-[72px]" src="/uil_arrow-growth.svg" />
          <h3>Hack Growth</h3>
          <p className="w-[225px] text-center text-[#737373] ">
            Overcame any hurdle or any other problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestService;
