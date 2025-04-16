
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getProductList } from "../../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const DetailsSlider = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.productList);
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [activeImage, setActiveImage] = useState(0);

  
  useEffect(() => {
    dispatch(getProductList);
  }, []);

  const product = data.find((item) => item.id === Number(productId));

  useEffect(() => {
    if (product && product.images.length > 0) {
      setMainImage(product.images[0].url);
    }
  }, [product]);

  if (!product) {
    return <p>Ürün bulunamadı...</p>;
  }

  const handleImageClick = (imageUrl, index) => {
    setMainImage(imageUrl);
    setActiveImage(index);
  };

  const handleNextImage = () => {
    let nextIndex =
      activeImage === product.images.length - 1 ? 0 : activeImage + 1;
    setMainImage(product.images[nextIndex].url);
    setActiveImage(nextIndex);
  };

  const handlePreviousImage = () => {
    let prevIndex =
      activeImage === 0 ? product.images.length - 1 : activeImage - 1;
    setMainImage(product.images[prevIndex].url);
    setActiveImage(prevIndex);
  };

  return (
    <div className="md:w-[506px] md:h-[450px] flex flex-col gap-4">
      <div className="w-full relative">
        <img src={mainImage} alt="Ürün Resmi" className="w-52" />
        <button
          onClick={handlePreviousImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex gap-2 w-full overflow-auto">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Ürün Resmi ${index + 1}`}
            className={`w-[100px] h-[100px] object-cover cursor-pointer transition-all duration-300 ease-in-out ${
              activeImage === index
                ? "border-4 border-[#23A6F0]"
                : "border-2 border-gray-300"
            }`}
            onClick={() => handleImageClick(image.url, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsSlider;
