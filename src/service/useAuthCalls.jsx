import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const register = async (userInfo) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { login ,register};
};

export default useAuthCalls;
