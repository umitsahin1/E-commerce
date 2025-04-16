import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import { thunk } from "redux-thunk";
import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  cart: shoppingCartReducer,
  auth: authReducer,
});

const mystore = createStore(rootReducer, applyMiddleware(thunk));

export default mystore;
