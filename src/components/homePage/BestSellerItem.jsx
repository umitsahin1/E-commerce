/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getProductList,
} from "../../store/actions/productActions";
import { ShoppingCart } from "lucide-react";
import Colors from "../Colors";
import { CiHeart } from "react-icons/ci";
import {
  setCart,
  setSelectedItems,
} from "../../store/actions/shoppingCartActions";
import { toast } from "react-toastify";

const BestSellerItem = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const fetchState = useSelector((state) => state.product.fetchState);
  const categories = useSelector((state) => state.product.categories);
  const cart = useSelector((state) => state.cart.cart);
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  const products = productList.slice(2, 14);

  const handleAddToCart = (product) => {
    const currentCart = cart || [];

    const existingItemIndex = currentCart.findIndex(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingItemIndex >= 0) {
      updatedCart = currentCart.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [...currentCart, { ...product, quantity: 1 }];
    }

    dispatch(setCart(updatedCart));
    dispatch(setSelectedItems({ ...selectedItems, [product.id]: true }));
    toast.success("Ürün sepete başarıyla eklendi");
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(getProductList());
    dispatch(getCategories());
  }, [dispatch]);

  if (fetchState === "FAILED") {
    return <div>Ürünler yüklenemedi!</div>;
  }
  return (
    <div className="flex w-[343px] md:w-[1035px] justify-around items-center flex-wrap flex-col md:flex-row">
      {products.map((item, index) => {
        const category = categories.find((cat) => cat.id === item.category_id);
        return (
          <div
            key={index}
            className="w-[244px] p-2 items-center mb-10 text-center border-[1px] rounded-md border-gray-300 shadow-lg hover:border-[#23856D]"
          >
            <Link
              to={`/shop/${category?.gender}/${category?.title}/${item.category_id}/${item.name}/${item.id}`}
            >
              <div className=" relative w-56 h-46 overflow-hidden">
                <img
                  src={item.images[0].url}
                  alt="product"
                  className="w-full h-full object-cover transition-transform duration-500 scale-125 hover:scale-150 z-10"
                />
                <div
                  onClick={handleClick}
                  className="absolute top-2 left-2 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center z-20"
                >
                  <CiHeart size={25} />
                </div>
              </div>
              <p className="text-[#252B42] font-bold h-16 w-52">
                {item.description}
              </p>
            </Link>
            <Colors circleClassName="w-5 h-5" />
            <div className="flex justify-between items-center">
              <h5 className="text-gray-600 text-sm">{item.price} ₺</h5>
              <p
                onClick={() => handleAddToCart(item)}
                className="flex gap-1 border-[1px] border-blue-400 bg-opacity-45 px-1 items-center justify-center rounded-lg text-gray-800 p-1 cursor-pointer hover:bg-orange-600 hover:bg-opacity-60"
              >
                Sepete Ekle
                <ShoppingCart className="md:text-[#23A6F0] w-5 h-4 text-[#3C403D]" />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default BestSellerItem;
