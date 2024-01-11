import image from "../assets/stock-login-bg.png";
import { IoMdPerson } from "react-icons/io";

const Login = () => {
  return (
    <div className="h-full mt-10">
      <div className="flex justify-center max-w-[1250px] gap-10 items-center sm:flex-wrap-reverse md:flex-nowrap">
        <img src={image} alt="" className="w-1/2" />
        <div className="w-full">
          <div className="flex justify-center gap-2 font-bold flex-col">
            <span className="text-5xl text-[#537D3C] mx-auto">
              <IoMdPerson />
            </span>
            <h2 className="text-center text-4xl mb-5 text-[#537D3C] uppercase tracking-widest">
              {" "}
              Register
            </h2>
          </div>
          <div className="p-10 h-[50vh]">
            <form className="">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="username"
                  id="floating_username"
                  className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="username"
                  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#537D3C] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="firstName"
                  id="floating_firstName"
                  className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="firstName"
                  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#537D3C] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="lastName"
                  id="floating_lastName"
                  className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="lastName"
                  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#537D3C] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="email"
                  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#537D3C] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#537D3C]-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#537D3C] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="text-white bg-[#537D3C]  hover:bg-[#FEBB22] focus:ring-2 focus:outline-none focus:ring-[#537d3c] font-medium rounded-lg text-md w-full sm:w-full px-5 py-2.5 text-center "
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
