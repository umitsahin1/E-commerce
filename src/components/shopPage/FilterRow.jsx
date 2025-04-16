const FilterRow = () => {
  return (
    <div className="md:w-[1050px] md:h-[98px] flex flex-col gap-10 md:flex-row mx-auto justify-between items-center">
      <h6 className="text-[#737373]">Showing all 12 results</h6>

      <div className="flex items-center gap-4">
        <h6 className="text-[#737373]">Views:</h6>
        <img src="public/btn-büyük-görsel.svg" alt="Büyük Görsel" />
        <img src="public/btn-listegörsel.svg" alt="Liste Görseli" />
      </div>
      <div className="flex gap-2">
        <select
          id="exampleSelect"
          name="select"
          className="text-[#737373] w-[200px] h-[50px] border-2  bg-[#F9F9F9] rounded-lg px-4"
        >
          <option>Select Sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: Low to High</option>
          <option>Rating: High to Low</option>
        </select>
        <button className="w-[94px] h-[50px] bg-[#23A6F0] rounded-lg text-white">
          Filter
        </button>
      </div>
    </div>
  );
};
export default FilterRow;
