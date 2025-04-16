import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/actions/productActions";

const ShopCards = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const top5Categories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch, categories]);
  return (
    <div className="bg-[#FAFAFA]  md:h-[363px] flex flex-col justify-center gap-4">
      <div className="flex flex-col md:flex-row gap-10 justify-between mx-auto md:w-[1042px] md:h-[58px] items-center mt-12  md:mt-0">
        <h3>Shop</h3>
        <div className="flex gap-2 link items-center">
          <p>Home</p>
          <ChevronRight className="text-[#BDBDBD] link" />
          <p className="text-[#BDBDBD]">Shop</p>
        </div>
      </div>
      <div className="flex flex-col justify-around md:flex-row h-[1428px] md:w-[1088px] md:h-[223px] mx-auto gap-4 ">
        {top5Categories.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center w-[205px]  h-[223px] text-white bg-cover bg-center rounded-md"
            key={index}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="flex flex-col bg-black p-4 items-center  bg-opacity-50">
              <h5>{item.title}</h5>
              <p>5 Items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCards;
