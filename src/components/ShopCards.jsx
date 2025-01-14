const ShopCards = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row md:w-[1180px] md:h-[572px] mx-auto md:gap-3 gap-6 w-[345px] h-auto z-10 place-content-center">
        <div
          className="hidden bg-cover relative w-full h-[572px] md:flex  md:items-end "
          style={{
            backgroundImage: "url('/main2 görsel1.svg')",
          }}
        >
          <div className="text-white absolute w-[420px] h-[238px] bg-[#2D8BC0BF] opacity-95 ">
            <div className="ml-[-80px] mt-16 flex flex-col gap-3 items-center">
              <h3 className="w-[192px]">Top Product Of the Week</h3>
              <button className="w-[198px] h-[52px] border-[1px] rounded-lg text-[14px] ">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>

        <div
          className=" md:hidden bg-cover relative w-full h-[572px] flex items-end"
          style={{
            backgroundImage: "url('/main2-uzungörsel1.svg')",
          }}
        >
          <div className="text-white absolute w-[346px] h-[238px] bg-[#2D8BC0BF] opacity-95 ">
            <div className="ml-[-80px] mt-16 flex flex-col gap-3 items-center">
              <h3 className="w-[192px]">Top Product Of the Week</h3>
              <button className="w-[198px] h-[52px] border-[1px] rounded-lg text-[14px] ">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 w-full">
          <div
            className="hidden bg-cover relative w-[557px] h-[289px] md:flex  md:items-end"
            style={{
              backgroundImage: "url('/main2 görsel 2.svg')",
            }}
          >
            <div className="text-white absolute w-[347px] h-[173px] bg-[#2D8BC0BF] opacity-95">
              <div className="ml-[50px] mt-10 flex flex-col gap-4">
                <h4>Top Product Of the Week</h4>
                <button className="w-[198px] h-[52px] border-[1px] rounded-lg text-[14px] ">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>

          <div
            className="flex items-end md:hidden bg-cover relative w-full h-[389px]"
            style={{
              backgroundImage: "url('/main2-uzungörsel2.svg')",
            }}
          >
            <div className="text-white absolute w-[347px] h-[173px] bg-[#2D8BC0BF] opacity-95">
              <div className="ml-[50px] mt-10 flex flex-col gap-4">
                <h4>Top Product Of the Week</h4>
                <button className="w-[198px] h-[52px] border-[1px] rounded-lg text-[14px] ">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>

          <div
            className="hidden  bg-cover relative w-[557px] h-[289px] md:flex  md:items-end"
            style={{
              backgroundImage: "url('/main2-görsel3.svg')",
            }}
          >
            <div className="text-white absolute w-[347px] h-[173px] bg-[#2D8BC0BF] opacity-95">
              <div className="ml-[50px] mt-10 flex flex-col gap-4">
                <h4>Top Product Of the Week</h4>
                <button className="w-[198px] h-[52px] border-[1px] rounded-lg text-[14px] ">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>

          <div
            className="flex items-end md:hidden bg-cover relative w-full h-[389px]"
            style={{
              backgroundImage: "url('/main2-uzungörsel3.svg')",
            }}
          >
            <div className="text-white absolute w-[347px] h-[173px] bg-[#2D8BC0BF] opacity-95">
              <div className="ml-[50px] mt-10 flex flex-col gap-4">
                <h4>Top Product Of the Week</h4>
                <button className="w-[198px] h-[52px] border-[1px] rounded-lg text-[14px] ">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
