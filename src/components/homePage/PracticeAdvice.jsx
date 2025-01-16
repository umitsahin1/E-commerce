import PracticeAdviceItem from "./PracticeAdviceItem";

const PracticeAdvice = () => {
  return (
    <div className="md:h-[744px] flex flex-col justify-around items-center gap-20 ">
      <div className=" flex flex-col md:w-[309px] items-center">
        <h6 className="text-[#23A6F0]">Practice Advice</h6>
        <h2>Featured Posts</h2>
      </div>
      <PracticeAdviceItem />
    </div>
  );
};

export default PracticeAdvice;
