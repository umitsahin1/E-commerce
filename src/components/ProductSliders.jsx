import ProductSliderItem from "./ProductSliderItems";

const ProductSliders = () => {
  return (
    <div className="bg-gradient-to-r from-[#96E9FB] to-[#ABECD6]  md:w-[1550px] md:h-[619px] h-[1434px] mx-auto rounded-2xl flex flex-col justify-end relative ">
      <ProductSliderItem className="z-20" />
      <div className="absolute md:translate-y-[-155px] md:flex md:items-start md:translate-x-[300px] flex flex-col gap-[30px] md:w-[548px] md:h-[316px] z-30 translate-x-[-15px] translate-y-[-800px]  items-center">
        <h5 className="text-[#2A7CC7]">SUMMER 2020</h5>
        <h1 className="text-[#252B42]">NEW COLLECTION</h1>
        <h4 className="text-[#737373] md:w-[350px] md:h-[60px] w-[291px] h-[90px] text-center md:text-start ">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="bg-[#23A6F0] w-[221px] h-[62px] rounded-lg flex justify-center items-center  ">
          <h3 className="text-[#FFFFFF] p-0 m-0 ">SHOP NOW</h3>
        </button>
      </div>
    </div>
  );
};

export default ProductSliders;
