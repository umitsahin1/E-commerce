import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_AUTHENTICATED,
} from "../actions/authActions";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  token: localStorage.getItem("token") || null,
  userId: localStorage.getItem("userId") || null,
  name: localStorage.getItem("name") || null,
  email: localStorage.getItem("email") || null,
  role_id: localStorage.getItem("role") || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        userId: action.payload.userId,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        userId: null,
        name: null,
        email: null,
        role: null,
        error: action.payload,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
