import FooterBandage from "../components/FooterBandage";
import FooterEnd from "../components/FooterEnd";
import HeaderGreen from "../components/HeaderGreen";
import HeaderLight from "../components/HeaderLight";
import ProductDetailContent from "../layouts/ProductDetailContent";

const ProductDetails = () => {
  return (
    <div className="w-fit md:w-full">
      <HeaderGreen />
      <HeaderLight />
      <ProductDetailContent />
      <div className="flex flex-col gap-10">
        <FooterBandage backgroundClass="bg-white" />
        <FooterEnd />
      </div>
    </div>
  );
};

export default ProductDetails;
