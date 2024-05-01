import axios from "axios";
import { useSelector } from "react-redux";

// ? axios config file
const useAxios = () => {
  // ? token info took from global state
  const { token } = useSelector((state) => state.auth);
  const axiosWithToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  });
  const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });
  return { axiosPublic, axiosWithToken };
};

export default useAxios;
