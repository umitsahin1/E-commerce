import bestSellerData from "../data/bestSellerData.js";

const BestSellerItem = () => {
  console.log(bestSellerData);
  return (
    <div className="flex w-[343px] md:w-[1035px] flex-wrap gap-6 flex-col md:flex-row">
      {bestSellerData.map((item) => (
        <div key={item.id} className="flex flex-col items-center gap-4 mb-6">
          <img src={item.imageUrl} alt="product" />
          <h5 className="text-[#252B42]">{item.name}</h5>
          <p className="text-[#737373]">{item.description}</p>
          <div className="flex gap-1">
            <h5 className="text-[#BDBDBD]">{item.price}</h5>
            <h5 className="text-[#23856D]">{item.newPrice}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BestSellerItem;
