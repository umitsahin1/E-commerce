import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/actions/productActions";

const PagePagination = () => {
  const dispatch = useDispatch();
  const { page, limit, total } = useSelector((state) => state.product);
  const totalPages = Math.ceil(total / limit);
  const visiblePageCount = 4;

  const handleNext = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  const handleFirst = () => {
    dispatch(setPage(1));
  };

  const handlePageClick = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.min(visiblePageCount, totalPages); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center border-[#E8E8E8] h-[74px] w-[312px] mx-auto">
      <button
        onClick={handleFirst}
        className="w-[83px] bg-[#F3F3F3] text-[#BDBDBD] h-[74px] rounded-l-lg"
      >
        First
      </button>

      <div className="flex">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`w-[46px] h-[74px] border ${
              pageNumber === page ? "bg-[#23A6F0] text-white" : "bg-white"
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="py-2 h-[74px] w-[83px] bg-white text-[#23A6F0] border rounded-r-lg"
      >
        Next
      </button>
    </div>
  );
};

export default PagePagination;
