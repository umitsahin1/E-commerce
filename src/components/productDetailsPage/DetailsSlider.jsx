import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const DetailsSlider = () => {
  const images = [
    { id: 1, src: "public/details-görsel-1.svg" },
    { id: 2, src: "public/details-görsel-2.svg" },
  ];

  const [mainImage, setMainImage] = useState("public/details-görsel-1.svg");
  const [activeImage, setActiveImage] = useState(1);

  const handleImageClick = (imageSrc, id) => {
    setMainImage(imageSrc);
    setActiveImage(id);
  };

  const handleNextImage = () => {
    let nextIndex = activeImage === images.length ? 1 : activeImage + 1;
    setMainImage(images[nextIndex - 1].src);
    setActiveImage(nextIndex);
  };

  const handlePreviousImage = () => {
    let prevIndex = activeImage === 1 ? images.length : activeImage - 1;
    setMainImage(images[prevIndex - 1].src);
    setActiveImage(prevIndex);
  };

  return (
    <div className=" md:w-[506px] md:h-[450px] flex flex-col gap-4 ">
      <div className="w-full  relative">
        <img src={mainImage} />
        <button
          onClick={handlePreviousImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
        >
          {" "}
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex w-full ">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            className={`w-[100px] h-[100px] object-cover cursor-pointer transition-all duration-300 ease-in-out
                ${
                  activeImage === image.id
                    ? "border-4 border-[#23A6F0]"
                    : "border-2 border-gray-300"
                }`}
            onClick={() => handleImageClick(image.src, image.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsSlider;
