import { ErrorMessage } from "formik";
import { object, string } from "yup";

export const registerSchema = object({
  username: string(),
  password: string(),
  email: string(),
  firstName: string(),
  lastName: string(),
});
const RegisterComp = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="username"
            id="username"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
            handleBlur={handleBlur}
            onChange={handleChange}
            value={values.username}
          />
          <label
            htmlFor="username"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#537D3C] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
          {errors.username && touched.username ? (
            <ErrorMessage
              name="username"
              component="span"
              className="text-red-500 text-xs"
            />
          ) : null}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
            handleBlur={handleBlur}
            onChange={handleChange}
            value={values.firstName}
          />
          <label
            htmlFor="firstName"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#537D3C] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First Name
          </label>
          {errors.firstName && touched.firstName ? (
            <ErrorMessage
              name="firstName"
              component="span"
              className="text-red-500 text-xs"
            />
          ) : null}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
            handleBlur={handleBlur}
            onChange={handleChange}
            value={values.lastName}
          />
          <label
            htmlFor="lastName"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#537D3C] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last Name
          </label>
          {errors.lastName && touched.lastName ? (
            <ErrorMessage
              name="lastName"
              component="span"
              className="text-red-500 text-xs"
            />
          ) : null}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
            handleBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#537D3C] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
          {errors.email && touched.email ? (
            <ErrorMessage
              name="email"
              component="span"
              className="text-red-500 text-xs"
            />
          ) : null}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#537D3C]-600 peer"
            placeholder=" "
            required
            handleBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#537D3C] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          {errors.password && touched.password ? (
            <ErrorMessage
              name="password"
              component="span"
              className="text-red-500 text-xs"
            />
          ) : null}
        </div>

        <button
          type="submit"
          className="text-white bg-[#537D3C]  hover:bg-[#FEBB22] focus:ring-2 focus:outline-none focus:ring-[#537d3c] font-medium rounded-lg text-md w-full sm:w-full px-5 py-2.5 text-center "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterComp;
