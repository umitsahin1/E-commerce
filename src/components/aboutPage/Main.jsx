const Main = () => {
  return (
    <div className=" flex flex-col gap-40 md:flex-row justify-between items-center  md:w-[1050px] mx-auto mb-36">
      <div className="flex flex-col gap-[40px] items-center md:items-start">
        <h5 className="hidden md:block">ABOUT COMPANY</h5>
        <h1>ABOUT US</h1>
        <h4 className="w-[330px] text-[#737373] text-center md:text-start">
          We know how large objects will act, but things on a small scale
        </h4>
        <button className="w-[193px] h-[52px] bg-[#23A6F0] rounded-lg text-white">
          Get Quote Now
        </button>
      </div>
      <img
        className="md:-mr-32"
        src="public/about-görsel-1.svg"
        alt="about-görsel-1"
      />
    </div>
  );
};

export default Main;
