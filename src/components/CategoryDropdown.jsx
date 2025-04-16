import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { getCategories } from "../store/actions/productActions";

const CategoryDropdown = ({ onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const womenCategories = categories.filter(
    (category) => category.gender === "k"
  );
  const menCategories = categories.filter(
    (category) => category.gender === "e"
  );

  return (
    <div className="absolute flex top-full -left-48 shadow-md rounded-md z-40 w-[500px] mr-64 bg-gray-50 ">
      <div className="w-1/2 p-4 flex  items-center flex-col ">
        <h6 className="text-gray-800 8font-semibold mb-2 text-center">Kadın</h6>
        <div className="flex w-48 flex-wrap ">
          {womenCategories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/kadin/${category.title
                .toLowerCase()
                .replace(/ /g, "-")}/${category.id}`}
              className=" py-2 px-4 w-24 text-gray-500 hover:scale-105 cursor-pointer"
              onClick={onClose}
            >
              {category.title}
            </Link>
          ))}
        </div>
        {womenCategories.length === 0 && (
          <p className=" py-2 px-4 text-gray-500">Kategori bulunmuyor.</p>
        )}
      </div>
      <div className="w-1/2 p-4 border-l flex  items-center flex-col">
        <h6 className="text-gray-800 font-semibold mb-2  text-center">Erkek</h6>
        <div className="flex w-48 flex-wrap ">
          {menCategories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/erkek/${category.title
                .toLowerCase()
                .replace(/ /g, "-")}/${category.id}`}
              className="block py-2 px-4 w-24 text-gray-500  hover:scale-105 cursor-pointer"
              onClick={onClose}
            >
              {category.title}
            </Link>
          ))}
        </div>
        {menCategories.length === 0 && (
          <p className="py-2 px-4 text-gray-500">Kategori bulunmuyor.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryDropdown;
