import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselWithText = () => {
  const images = ["/col-md-6.png", "col-md-6.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative mx-auto  ">
      <div className="relative  bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] md:w-[1492px] md:h-[619px] rounded-xl h-[904px]  ">
        <div className="relative flex justify-end lg:-mr-20 translate-y-[553px] md:translate-y-0 ">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>

        <div
          className="absolute md:translate-y-[-455px] md:flex md:items-start md:translate-x-[300px] md:w-[548px] md:h-[316px] flex flex-col items-center 
        gap-[30px]  w-[395px]  h-[375px] z-30  translate-y-[-305px] "
        >
          <h5 className="text-[#2A7CC7] text-center">SUMMER 2024</h5>
          <h1 className="text-[#252B42]  text-center">NEW COLLECTION</h1>
          <h4 className="text-[#737373] md:w-[350px] md:h-[60px] w-[291px] h-[90px] text-center md:text-start ">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="bg-[#23A6F0] w-[221px] h-[62px] rounded-lg flex justify-center items-center  ">
            <h3 className="text-[#FFFFFF] p-0 m-0 ">SHOP NOW</h3>
          </button>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-opacity-50 p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-opacity-50 p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-[5vw] h-[0.5vh] ${
                index === currentIndex ? "bg-[#23A6F0]" : "bg-[#B0BEC5]"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselWithText;
