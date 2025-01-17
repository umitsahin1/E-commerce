import { Rating } from "@mui/material";

const InformationCard = () => {
  return (
    <div>
      <div className="md:w-[510px] md:h-[471px] p-3 flex flex-col gap-6">
        <h4>Floating Phone</h4>
        <div className="flex gap-4">
          <Rating />
          <h6 className="text-[#737373]">10 Reviews</h6>
        </div>
        <div>
          <h3>$1,139.33</h3>
          <h6 className="text-[#737373] mt-2">
            Availability : <span className="text-[#23A6F0]"> In Stock </span>
          </h6>
        </div>
        <p className="text-[#858585] w-[271px] md:w-[464px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <hr />
        <img
          src="public/product-colors.svg"
          className="md:w-[150px] md:h-[30px]"
        />
        <div className="flex mt-8 gap-4">
          <button className="bg-[#23A6F0] w-[148px] h-[44px] rounded-md">
            <h6 className="text-white">Select Options</h6>
          </button>
          <div className="flex gap-2">
            <img
              className="border rounded-full w-[40px] h-[40px]"
              src="public/like.svg"
            />
            <img
              className="border rounded-full w-[40px] h-[40px]"
              src="public/basket.svg"
            />
            <img
              className="border rounded-full w-[40px] h-[40px]"
              src="public/göz.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
