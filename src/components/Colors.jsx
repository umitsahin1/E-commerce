const Colors = ({ className, circleClassName }) => {
  return (
    <div className={`flex gap-1 justify-center mb-10 mt-8 ${className}`}>
      <div 
        className={`rounded-full bg-[#23A6F0] cursor-pointer ${circleClassName}`}
      ></div>
      <div
        className={`rounded-full bg-[#23856D] cursor-pointer ${circleClassName}`}
      ></div>
      <div
        className={`rounded-full bg-[#E77C40] cursor-pointer ${circleClassName}`}
      ></div>
      <div
        className={`rounded-full bg-[#23856D] cursor-pointer ${circleClassName}`}
      ></div>
    </div>
  );
};

export default Colors;
