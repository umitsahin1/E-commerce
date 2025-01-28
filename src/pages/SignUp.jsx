import { BellDot, BookOpen, CalendarRange, Tag } from "lucide-react";
import Header from "../layouts/Header";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const history = useHistory();

  const onSubmit = (formData) => {
    setData(formData);
    history.push("/login");
  };

  const password = watch("password");

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center bg-gray-100">
        <section className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl text-black mt-5">Sign Up</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-5 flex flex-col bg-white opacity-90 p-10 rounded-3xl min-w-80 md:min-w-[45rem] my-10"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl text-gray-700">Name *</h2>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="h-10 w-full text-base bg-gray-100 rounded-sm border border-[#D9D9D9] p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-2"
                {...register("name", {
                  required: "İsim zorunludur*",
                  minLength: {
                    value: 3,
                    message: "İsim en az 3 karakter olmalıdır",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl text-gray-700">
                Email Address *
              </h2>
              <input
                type="email"
                id="email"
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
                id="password"
                placeholder="********"
                className="h-10 w-full text-base bg-gray-100 rounded-sm border border-[#D9D9D9] p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-2"
                {...register("password", {
                  required: "Şifre zorunludur",
                  minLength: {
                    value: 8,
                    message: "Şifre en az 8 karakter olmalıdır",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Şifre en az bir harf ve bir rakam içermelidir",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl text-gray-700">
                Confirm Password *
              </h2>
              <input
                type="password"
                id="comfirmPassword"
                placeholder="********"
                className="h-10 w-full text-base bg-gray-100 rounded-sm border border-[#D9D9D9] p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-2"
                {...register("confirmPassword", {
                  required: "Şifreyi onaylamanız gerekiyor",
                  validate: (value) =>
                    value === password || "Şifreler uyuşmuyor",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 ">
              <h2 className="text-lg md:text-xl text-gray-700">Role *</h2>
              <select className="h-10 w-full text-base rounded-lg  border-2 border-[#D9D9D9] p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-2 bg-[#23A6F0]">
                <option value="admin" className="bg-gray-100 text-gray-700">
                  Yönetici
                </option>
                <option value="store" className="bg-gray-100 text-gray-700">
                  Mağaza
                </option>
                <option value="customer" className="bg-gray-100 text-gray-700">
                  Müşteri
                </option>
              </select>
            </div>

            <a href="/login" className="text-black text-md mt-2">
              Already have an account?
              <span className="text-[#23A6F0] ml-4 ">Login</span>
            </a>

            <button
              type="submit"
              className="inline-flex items-center justify-center  gap-2 rounded-md text-sm font-medium bg-[#23A6F0] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  mt-5 w-40 h-12 mx-auto"
            >
              Sign Up
            </button>
          </form>
        </section>
        <hr className="border-none w-[1px] min-h-screen bg-gray-200 mx-[50px] hidden md:block" />
        <div className="w-96 md:flex flex-col items-center gap-8 hidden ">
          <h3>ÜYE OLDUĞUNDA;</h3>
          <div className="flex gap-2 ">
            <div className="flex flex-col gap-10 ">
              <BellDot />
              <Tag />
              <CalendarRange />
              <BookOpen />
            </div>
            <div className="flex flex-col gap-[44px]">
              <p>Seni BANDAGE dünyasından haberdar ederiz.</p>
              <p>Kampanya ve indirimlerimizden öncelikli yararlanırsın.</p>
              <p>
                BANDAGE etkinliklerinde seni önceden bilgilendiririz ve özel
                davetlilerimiz arasında olabilirsin.
              </p>
              <p className="-mt-5">
                Üniversite öğrencilerine özel %20 indirimden yararlanabilirsin.
                Tek yapman gereken “edu.tr” uzantılı mail adresin ile üye olmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
