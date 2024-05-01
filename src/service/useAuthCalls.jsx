import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login successful");
      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Login not successful");
    }
  };
  // ? when i post to register the response send me a token in data and I save "token" to token info from authSlice with dispatvh.
  const register = async (userInfo) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register successful");

      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Register not successful");
    }
  };
  // ? for logout I have to send token info to server to delete it.
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(logoutSuccess());
      navigate("/");
      toastSuccessNotify("Logout successful");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Logout not successful");
    }
  };
  return { login, register, logout };
};

export default useAuthCalls;
