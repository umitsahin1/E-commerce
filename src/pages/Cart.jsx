import { useDispatch } from "react-redux";
import HeaderLight from "../components/HeaderLight";
import { CartPageContent } from "../layouts/CartPageContent";
import { useEffect } from "react";
import { setSelectedItems } from "../store/actions/shoppingCartActions";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedSelectedItems = localStorage.getItem("selectedItems");
    if (storedSelectedItems) {
      try {
        const parsedItems = JSON.parse(storedSelectedItems);
        dispatch(setSelectedItems(parsedItems));
      } catch (error) {
        console.error(
          "Local Storage'dan selectedItems yüklenirken hata:",
          error
        );
      }
    }
  }, [dispatch]);
  return (
    <div className="p-4 md:p-0">
      <HeaderLight />
      <CartPageContent />
    </div>
  );
};

export default Cart;
