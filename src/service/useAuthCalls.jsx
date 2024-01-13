import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} =useSelector(state=>state.auth)
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

  const logout= async ()=>{
    dispatch(fetchStart())
    try {
      await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout`,{
        headers:{
          Authorization:`Token ${token}`
        }
      })
      navigate("/")
    } catch (error) {
      dispatch(fetchFail())
    }
  }
  return { login ,register,logout};
};

export default useAuthCalls;
