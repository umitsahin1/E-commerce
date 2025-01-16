const PracticeAdviceItem = () => {
  const images = ["/practiceAdvice-1.svg", "/practiceAdvice-2.svg"];
  return (
    <div className="flex md:w-[1050px] md:h-[404px] mx-auto md:justify-between items-center flex-col md:flex-row gap-16">
      {images.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:w-[508px] md:h-[404px] gap-4 md:gap-0 items-center"
        >
          <div
            key={index}
            className="w-[209px] h-[404px] flex flex-col justify-between items-center"
            style={{ backgroundImage: `url(${item})` }}
          >
            <div className="bg-[#E74040] w-[52px] h-[24px] rounded-md mt-6 ml-[-120px] text-white text-center">
              <h6>Sale</h6>
            </div>
            <div className="flex gap-2 mb-6">
              <img src="/like.svg" />
              <img src="/basket.svg" />
              <img src="public/göz.svg" />
            </div>
          </div>
          <div className="flex flex-col m-auto gap-4  md:gap-2 items-center md:items-start ">
            <div className="flex w-[242px] justify-between ">
              <p className="link text-[#23A6F0]">English Department</p>
              <div className="bg-black w-[50px] h-[26px] rounded-3xl flex items-center justify-center gap-1  ">
                <img src="/yıldız.svg" />
                <p className=" text-white text-[12px]">4.9</p>
              </div>
            </div>
            <h5>Graphic Design</h5>
            <p className="text-[#737373] w-[242px]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="text-[#737373] flex gap-2">
              <img src="/inidrme.svg" />
              <h6>15 Sales</h6>
            </div>
            <div className="flex gap-2 mb-2">
              <h5 className="text-[#BDBDBD]">$16.48</h5>
              <h5 className="text-[#23856D]">$6.48</h5>
            </div>
            <img className="w-[82px] h-[16px]" src="/product-colors.svg" />
            <img src="public/detay görsel.svg" />
            <button className="w-[141px] h-[44px] rounded-3xl border-[1px] border-[#23A6F0]">
              <h6 className="text-[#23A6F0]">Learn More</h6>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PracticeAdviceItem;
