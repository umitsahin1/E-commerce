import { ChevronRight } from "lucide-react";

const Container = () => {
  return (
    <div className="md:w-[788px] md:h-[180px] text-center md:text-left mx-auto flex flex-col items-center gap-4 mb-16 ">
      <h5 className="text-[#737373]">WHAT WE DO</h5>
      <h1 className="text-[40px] md:text-[58px] leading-[50px] md:leading-[80px] ">
        Innovation tailored for you
      </h1>
      <div className="flex gap-2 link items-center">
        <p>Home</p>
        <ChevronRight className="text-[#BDBDBD] link" />
        <p className="text-[#737373]">Team</p>
      </div>
    </div>
  );
};

export default Container;
