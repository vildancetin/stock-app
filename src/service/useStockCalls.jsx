import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  getStocksSuccess,
} from "../features/stockSlice";
const useStockCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getStocks = async (url = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}`);
      const newData = data.data;
      dispatch(getStocksSuccess({ url, newData }));
      console.log(data.data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const postStock = async (url = "firms", info) => {
    try {
      await axiosWithToken.post(`${url}`, info);
      getStocks(`${url}`);
    } catch (error) {
      console.log(error);
    }
  };
  const updateStock = async (url = "firms", info) => {
    try {
      await axiosWithToken.put(`${url}/${info._id}`,info);
      getStocks(`${url}`);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteStock = async (url = "firms", id) => {
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      getStocks(`${url}`);
    } catch (error) {
      console.log(error);
    }
  };
  return { getStocks, postStock, deleteStock, updateStock };
};

export default useStockCalls;
