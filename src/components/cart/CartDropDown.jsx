import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { setCart } from "../../store/actions/shoppingCartActions";
import { RiDeleteBinLine } from "react-icons/ri";

const CartDropdown = ({ onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const totalAmount = cartItems
    ? cartItems
        .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
        .toFixed(2)
    : "0.00";

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
    onClose();
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
      <div className="p-4 flex flex-col gap-4">
        <h3 className="text-lg font-semibold mb-2  text-gray-400">
          Sepetim ({cartItems.length} Ürün)
        </h3>
        <div>
          <ShoppingCart className="w-10 h-10 mx-auto text-gray-400" />
          <p className="text-center text-gray-600 mt-2">Sepetiniz boş.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold mb-2 ">
          Sepetim ({cartItems.length} Ürün)
        </h3>
        <h5
          onClick={handleDeleteAll}
          className="text-sm  mb-2 bg-red-700 py-1 px-2 rounded-lg text-white hover:bg-red-600 hover:scale-105 transition-all duration-300"
        >
          Sepeti Boşalt
        </h5>
      </div>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center py-2 border-b">
            <div className="w-14 h-20 overflow-hidden rounded">
              <img
                src={
                  item.images
                    ? item.images[0]?.url
                    : "https://via.placeholder.com/150"
                }
                alt={item.description}
                className="h-full object-cover"
              />
            </div>
            <div className="ml-2 mr-2 flex-grow">
              <p className="text-lg font-semibold">{item.name}</p>
              <div className="flex">
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

            <div className="flex flex-col items-end gap-2">
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
      <div className="mt-4 flex justify-between items-center font-semibold">
        <span>Toplam:</span>
        <span>{totalAmount} ₺</span>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Link
          to="/cart"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center block"
          onClick={onClose}
        >
          Sepete Git
        </Link>
        <Link
          to="/checkout"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center block"
          onClick={onClose}
        >
          Siparişi Tamamla
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
