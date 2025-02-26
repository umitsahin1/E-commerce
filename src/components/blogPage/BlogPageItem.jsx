/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import blogPageData from "../../data/blogPageData";

function BlogPageItem() {
  return (
    <div className=" flex flex-col md:flex-row md:flex-wrap gap-[10px] justify-around md:p-0 p-16  ">
      {blogPageData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:w-[470px] md:h-[606px] gap-[30px] shadow-md mb-14"
        >
          <img src={item.imageUrl} />
          <div className="p-3 flex flex-col gap-4  ">
            <div className="hover:bg-[#8EC2F2] text-[#737373] flex gap-2 ">
              <p>Google</p>
              <p>Trending</p>
              <p>New</p>
            </div>
            <h4 className="w-[247px]">Koudetat à la Maison #1 (L'intégrale)</h4>
            <p className="text-[#737373] w-[280px]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="flex justify-between text-[#737373] w-[298px]">
              <div className="w-[105px] flex justify-center items-center ">
                <img
                  src="public/icons-calendar.svg"
                  className="w-[16px] h-[16px]"
                />
                <p>2 April 2021</p>
              </div>
              <div className="w-[105px] flex ">
                <img
                  src="public/chart-outlined.svg"
                  className="w-[16px] h-[16px]"
                />
                <p>10 comments</p>
              </div>
            </div>
            <h6 className="text-[#737373]">
              Learn More <span className="text-[#23A6F0]">{">"}</span>
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPageItem;
