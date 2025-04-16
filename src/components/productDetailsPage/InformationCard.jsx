import { Rating } from "@mui/material";
import Colors from "../Colors";
import { SlBasket } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const InformationCard = () => {
  const { productId } = useParams();
  const data = useSelector((state) => state.product.productList);

  const product = data.find((item) => item.id === Number(productId));

  return (
    <div>
      <div className="md:w-[510px] md:h-[471px] p-3 flex flex-col gap-5">
        <h4>{product.name}</h4>
        <div className="flex gap-4">
          <Rating />
          <h6 className="text-[#737373]">{product.sell_count} Review</h6>
        </div>
        <div>
          <h3>{product.price} ₺</h3>
          <h6 className="text-[#737373] mt-2">
            Availability :{" "}
            <span className="text-[#23A6F0]"> {product.stock} quantity </span>
          </h6>
        </div>
        <p className="text-[#858585] w-[271px] md:w-[464px]">
          {product.description}
        </p>
        <hr />
        <div className="flex">
          <Colors circleClassName="w-7 h-7 " />
        </div>

        <div className="flex gap-4">
          <button className="bg-[#23A6F0] w-[148px] h-[44px] rounded-md">
            <h6 className="text-white">Select Options</h6>
          </button>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <CiHeart size={25} />
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <SlBasket size={20} />
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <IoEyeOutline size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
