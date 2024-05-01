import image from "../assets/stock-login-bg.png";
import { IoMdPerson } from "react-icons/io";
import RegisterComp, { registerSchema } from "../components/RegisterComp";
import { Formik } from "formik";
import useAuthCalls from "../service/useAuthCalls";

const Register = () => {
  const {register}=useAuthCalls()
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
            <Formik
              initialValues={{
                email: "",
                password: "",
                username: "",
                firstName: "",
                lastName: "",
              }}
              // ? register schema and register component created in different file adn imported here
              validationSchema={registerSchema}
              onSubmit={(values, actions) => {
                register(values)
                actions.resetForm();
                console.log(values);
              }}
              component={(props) => <RegisterComp {...props} />}
            ></Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
