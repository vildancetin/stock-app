import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  getStocksSuccess,
} from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
const useStockCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getStocks = async (url = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}`);
      const newData = data.data;
      dispatch(getStocksSuccess({ url, newData }));
      toastSuccessNotify(`${url} information was received`)
      console.log(data.data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} information wasn't received`)
      console.log(error);
    }
  };

  const postStock = async (url = "firms", info) => {
    try {
      await axiosWithToken.post(`${url}`, info);
      getStocks(`${url}`);
      toastSuccessNotify(`${url} information updated`)
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} information wasn't updated`)

    }
  };
  const updateStock = async (url = "firms", info) => {
    try {
      await axiosWithToken.put(`${url}/${info._id}`,info);
      getStocks(`${url}`);
      toastSuccessNotify(`${url} information updated`)

    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} information wasn't updated`)

    }
  };
  const deleteStock = async (url = "firms", id) => {
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      getStocks(`${url}`);
      toastSuccessNotify("Delete is succesful")
    } catch (error) {
      console.log(error);
      toastErrorNotify("Delete isn't successful")
    }
  };
  return { getStocks, postStock, deleteStock, updateStock };
};

export default useStockCalls;
