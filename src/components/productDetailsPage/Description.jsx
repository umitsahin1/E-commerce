import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Description = () => {
  const data = useSelector((state) => state.product.productList);
  const { productId } = useParams();

  const product = data.find((item) => item.id === Number(productId));
  console.log("product", product);
  return (
    <div className=" md:w-[1050px] mx-auto ">
      <h3>Description :</h3>
      <p className="text-[#737373] my-2">
        Placeholder content for the tab panel. This one relates to the home tab.
        Takes you miles high, so high, 'cause she’s got that one international
        smile. There's a stranger in my bed, there's a pounding in my head. Oh,
        no. In another life I would make you stay. ‘Cause I, I’m capable of
        anything. Suiting up for my crowning battle. Used to steal your parents'
        liquor and climb to the roof. Tone, tan fit and ready, turn it up cause
        its gettin' heavy. Her love is like a drug. I guess that I forgot I had
        a choice.
      </p>
      <div className="flex flex-col md:flex-row md:h-[500px] md:gap-0 gap-2">
        <img src={product?.images[0]?.url} />
      </div>
    </div>
  );
};

export default Description;
