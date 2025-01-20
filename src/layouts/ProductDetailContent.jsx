import Clients from "../components/homePage/Clients";
import DetailsCard from "../components/productDetailsPage/DetailsCard";
import NavBar from "../components/productDetailsPage/NavBar";
import ProductCards from "../components/shopPage/ProductCards";

const ProductDetailContent = () => {
  return (
    <div className="md:px-0 px-6 flex flex-col gap-6">
      <DetailsCard />
      <NavBar />
      <div className="bg-[#FAFAFA]">
        <div className="mt-20 flex flex-col gap-6 mb-20">
          <h3 className="md:w-[1050px] mx-auto pl-4 mt-32 ">
            BESTSELLER PRODUCTS
          </h3>
          <hr className="md:w-[1050px] mx-auto" />
          <ProductCards />
        </div>
        <Clients />
      </div>
    </div>
  );
};

export default ProductDetailContent;
