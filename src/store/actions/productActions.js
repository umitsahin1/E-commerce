import axios from "axios";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_PAGE = "SET_PAGE";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const getProductList = (limit = 25, page = 1, filter = "") => {
  return (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    const offset = (page - 1) * limit;

    axios
      .get("https://workintech-fe-ecommerce.onrender.com/products", {
        params: { limit, offset, filter },
      })
      .then((response) => {
        dispatch(setProductList(response.data.products));
        dispatch(setTotal(response.data.total));
        dispatch(setFetchState("FETCHED"));
      })
      .catch((error) => {
        console.error("Ürün listesi alınırken hata oluştu", error);
        dispatch(setFetchState("FAILED"));
      });
  };
};

export const getCategories = () => {
  return (dispatch) => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/categories")
      .then((response) => {
        dispatch(setCategories(response.data));
      })
      .catch((error) => {
        console.error("Kategoriler alınırken hata oluştu", error);
      });
  };
};
