import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  getFirmsSuccess,
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
    } catch (error) {
      console.log(error);
    }
    getStocks(`${url}`);
  };
  const deleteStock = async (url = "firms", id) => {
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      getStocks(`${url}`);
    } catch (error) {}
  };
  return { getStocks, postStock, deleteStock };
};

export default useStockCalls;
