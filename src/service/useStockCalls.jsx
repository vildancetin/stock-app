import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { fetchFail, fetchStart,getFirmsSuccess } from "../features/stockSlice"
const useStockCalls = () => {
const {axiosWithToken}=useAxios()
const dispatch=useDispatch()
    const getFirms=async ()=>{
        dispatch(fetchStart())
        try {
            const {data}=await axiosWithToken("/firms/")
            dispatch(getFirmsSuccess(data.data))
            console.log(data.data)
        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
        }
    }
    return {getFirms}
}

export default useStockCalls