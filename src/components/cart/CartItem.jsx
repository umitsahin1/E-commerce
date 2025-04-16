import { useDispatch, useSelector } from "react-redux";
import {
  setCart,
  setSelectedItems,
} from "../../store/actions/shoppingCartActions";
import { ShoppingCart } from "lucide-react";
import { RiDeleteBinLine } from "react-icons/ri";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  const handleCheckboxChange = (itemId, isChecked) => {
    dispatch(setSelectedItems({ ...selectedItems, [itemId]: isChecked }));
  };

  const handleIncreaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
        : cartItem
    );
    dispatch(setCart(updatedCart));
  };

  const handleDeleteAll = () => {
    const updateCart = [];
    dispatch(setCart(updateCart));
  };

  const handleDeleteItem = (id) => {
    const updateCart = cartItems.filter((item) => item.id !== id);
    dispatch(setCart(updateCart));
  };

  const handleDecreaseQuantity = (item) => {
    const updatedCart = cartItems
      .map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: Math.max(1, (cartItem.quantity || 1) - 1) }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);
    dispatch(setCart(updatedCart));
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="p-4 w-7/12 mx-auto flex flex-col gap-4">
        <h3 className="text-2xl mb-2 text-gray-400 mt-10">
          Sepetim ({cartItems.length} Ürün)
        </h3>
        <div>
          <ShoppingCart className="w-10 h-10 mx-auto text-gray-400 mt-24" />
          <p className="text-center text-gray-600 mt-2">
            Sepetinizde ürün bulunmamaktadır
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-7/12 ml-36 mt-20 ">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl text-gray-700">
          Sepetim ({cartItems.length} Ürün)
        </h3>
        <h5
          onClick={handleDeleteAll}
          className="text-sm  mb-2 bg-red-700 py-1 px-2 rounded-lg text-white hover:bg-red-600 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Sepeti Boşalt
        </h5>
      </div>
      <ul className="border-x-2 p-4 shadow-lg  ">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center py-2 border-b mb-10">
            <input
              id={item.id}
              type="checkbox"
              checked={selectedItems[item.id] || false}
              onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
            />
            <div className="w-24 h-24 overflow-hidden rounded mr-8">
              <img
                src={
                  item.images
                    ? item.images[0]?.url
                    : "https://via.placeholder.com/150"
                }
                alt={item.description}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="ml-2 mr-2 flex-grow">
              <div className="flex items-center gap-2  ">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-md text-gray-500 mt-[1px] ">
                  {item.description}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mr-2">Beden:36-41 </p>
                <p className="text-gray-400 text-sm ">
                  Adet:{item.quantity || 1}
                </p>
              </div>

              <p className="text-gray-600 text-md">
                {(parseFloat(item.price) * parseFloat(item.quantity)).toFixed(
                  2
                )}
                ₺
              </p>
            </div>

            <div className="flex flex-col items-end gap-7">
              <RiDeleteBinLine
                onClick={() => handleDeleteItem(item.id)}
                className="text-red-600 cursor-pointer"
              />
              <div>
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  className=" text-gray-400 px-2 text-sm border-[1px] border-gray-300 hover:scale-125 rounded-md"
                >
                  -
                </button>
                <button
                  onClick={() => handleIncreaseQuantity(item)}
                  className=" text-gray-400 px-2 text-sm border-[1px] border-gray-300 hover:scale-125 rounded-md"
                >
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItem;
