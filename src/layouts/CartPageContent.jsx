import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

export const CartPageContent = () => {
  return (
    <div className="flex gap-4 ">
      <CartItem />
      <CartSummary />
    </div>
  );
};
