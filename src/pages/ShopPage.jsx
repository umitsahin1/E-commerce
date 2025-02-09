import HeaderGreen from "../components/HeaderGreen";
import HeaderLight from "../components/HeaderLight";
import Footer from "../layouts/Footer";
import ShopPageContent from "../layouts/ShopPageContent";

const ShopPage = () => {
  return (
    <div className="flex flex-col  w-fit md:w-full ">
      <HeaderGreen />
      <HeaderLight />
      <ShopPageContent />
      <Footer />
    </div>
  );
};

export default ShopPage;
