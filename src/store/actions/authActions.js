import axios from "axios";
import { toast } from "react-toastify";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const SET_AUTHENTICATED = "SET_AUTHENTICATED";

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const registerSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const registerFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const setAuthenticated = (value) => ({
  type: SET_AUTHENTICATED,
  payload: value,
});

export const loginUser = (data, history, isRememberMe) => (dispatch) => {
  axios
    .post("https://workintech-fe-ecommerce.onrender.com/login", data)
    .then((response) => {
      if (response.status === 200) {
        const { token, name, email, role_id } = response.data;
        const payload = JSON.parse(atob(token.split(".")[1]));
        const userId = payload.userId;

        dispatch(loginSuccess({ token, userId, name, email, role_id }));
        history.push("/");
        toast.success(`${name} Hoşgeldiniz`);

        if (isRememberMe) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("role", role_id);
        } else {
          localStorage.removeItem("isAuthenticated");
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          localStorage.removeItem("name");
          localStorage.removeItem("email");
          localStorage.removeItem("role");
        }
      } else {
        dispatch(loginFailure("Giriş başarısız"));
        toast.error("Giriş başarısız, kullanıcı adı veya şifre yanlış.");
      }
    })
    .catch((error) => {
      dispatch(
        loginFailure("Giriş başarısız, kullanıcı adı veya şifre yanlış.")
      );
      toast.error("Giriş başarısız, kullanıcı adı veya şifre yanlış.");
    });
};

export const onSubmit = (formData) => {
  delete formData.confirmPassword;
  axios
    .post("https://workintech-fe-ecommerce.onrender.com/signup", formData)
    .then((response) => {
      dispatch(registerSuccess({ token, userId, name, email, role_id }));
      history.push("/login");
      toast.success("Kayıt olma işlemi başarılı");
    })
    .catch((error) => {
      console.error("Hata:", error.response?.data || error.message);
    });
};
