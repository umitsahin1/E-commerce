import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  const cartIsEmpty = cartItems.length;

  const totalSelectedAmount = cartItems
    .reduce((sum, item) => {
      if (selectedItems[item.id]) {
        return sum + item.price * (item.quantity || 1);
      }
      return sum;
    }, 0)
    .toFixed(2);

  let kargoUcreti = 40;
  let genelToplam;
  let limit = false;
  if (totalSelectedAmount > 1000) {
    limit = true;
    genelToplam = parseFloat(totalSelectedAmount).toFixed(2);
  } else {
    genelToplam = (parseFloat(totalSelectedAmount) + kargoUcreti).toFixed(2);
  }

  return (
    cartIsEmpty && (
      <div className="w-2/12 h-96 border-2 shadow-lg bg-red mt-20 pt-8 ">
        <p className=" m-6 text-xl">Sipariş Özeti</p>
        <div className="flex justify-between items-center mb-2">
          <p className=" mx-6 text-md">Ürünün Toplamı:</p>
          <p className="text-md mr-4">{totalSelectedAmount} ₺</p>
        </div>
        <div className="flex flex-col justify-between  mb-10 gap-2">
          <div className="flex justify-between">
            <p className=" mx-6 text-md">Kargo Ücreti: </p>
            <p className="text-md mr-4">{kargoUcreti}</p>
          </div>

          {limit === true ? (
            <div className="flex justify-between">
              <p className="mx-6 text-green-500 text-sm">
                1000 ₺ ve üzeri kargo bedava
              </p>
              <p className="text-md mr-4 ">-{kargoUcreti}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-between items-center ">
          <p className=" mx-6 text-md font-bold">Toplam:</p>
          <p className="text-md mr-4 font-bold">{genelToplam} ₺</p>
        </div>
        <div className="flex justify-center">
          <button className="mt-10 mb-8 w-60 text-center rounded-md text-white p-3 bg-green-500 hover:bg-green-700 transition: background-color 0.3s ease;">
            Sepeti Onayla
          </button>
        </div>
      </div>
    )
  );
};

export default CartSummary;
