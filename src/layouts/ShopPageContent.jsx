import Clients from "../components/homePage/Clients";
import FilterRow from "../components/shopPage/FilterRow";
import PagePagination from "../components/shopPage/PagePagination";
import ProductCards from "../components/shopPage/ProductCards";
import ShopCards from "../components/shopPage/ShopCards";

const ShopPageContent = () => {
  return (
    <div className="flex flex-col lg:gap-20 gap-28 lg:p-0 p-3">
      <ShopCards />
      <FilterRow />
      <ProductCards />
      <PagePagination />
      <Clients />
    </div>
  );
};

export default ShopPageContent;
