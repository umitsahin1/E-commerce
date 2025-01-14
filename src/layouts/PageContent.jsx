import Bestsellers from "../components/Bestsellers";
import BestService from "../components/BestService";
import Clients from "../components/Clients";
import FeaturedProducts from "../components/FeaturedProducts";
import PracticeAdvice from "../components/PracticeAdvice";
import ProductSliders from "../components/ProductSliders";
import ShopCards from "../components/ShopCards";

const PageContent = () => {
  return (
    <div className="flex flex-col lg:gap-20 gap-48 lg:p-0 p-3">
      <ProductSliders />
      <Clients />
      <ShopCards />
      <Bestsellers />
      <FeaturedProducts />
      <BestService />
      <PracticeAdvice />
    </div>
  );
};

export default PageContent;
