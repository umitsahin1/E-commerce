import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../layouts/Header";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/authActions";
import { useState } from "react";

const Login = () => {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRemember = () => {
    setIsRememberMe((prev) => !prev);
  };

  const onSubmit = (data) => {
    dispatch(loginUser(data, history, isRememberMe));
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center bg-gray-100 h-[800px]">
        <section className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl text-black mt-5">Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-5 flex flex-col bg-white opacity-90 p-10 rounded-3xl min-w-80 md:min-w-[45rem] my-10"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl text-gray-700">
                Email Address *
              </h2>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="h-10 w-full text-base bg-gray-100 rounded-sm border border-[#D9D9D9] p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-2"
                {...register("email", {
                  required: "E-posta zorunludur",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Geçersiz e-posta adresi",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl text-gray-700">Password *</h2>
              <input
                type="password"
                placeholder="********"
                className="h-10 w-full text-base bg-gray-100 rounded-sm border border-[#D9D9D9] p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-2"
                {...register("password", {
                  required: "Şifre zorunludur",
                  minLength: {
                    value: 6,
                    message: "Şifre en az 6 karakter olmalıdır",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <div className="flex gap-2 ml-2">
              <input
                type="checkbox"
                id="rememberMe"
                onChange={handleRemember}
              />
              <label>Remember me</label>
            </div>

            <a href="/signup" className="text-black text-md mt-2">
              Dont have an account?
              <span className="text-[#23A6F0] ml-4 ">Sign Up</span>
            </a>

            <button
              type="submit"
              className="inline-flex items-center justify-center  gap-2 rounded-md text-sm font-medium bg-[#23A6F0] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  mt-5 w-40 h-12 mx-auto"
            >
              Login
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
