import Bestsellers from "../components/homePage/Bestsellers";
import BestService from "../components/homePage/BestService";
import Clients from "../components/homePage/Clients";
import FeaturedProducts from "../components/homePage/FeaturedProducts";
import PracticeAdvice from "../components/homePage/PracticeAdvice";
import ProductSliders from "../components/homePage/ProductSliders";
import ShopCards from "../components/homePage/ShopCards";

const HomePageContent = () => {
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

export default HomePageContent;
