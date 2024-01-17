import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import FirmCard from "../components/FirmCard";
import { useSelector } from "react-redux";
import ModalCard from "../components/ModalCard";

const Firms = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen=()=>{setOpenModal(true)}
  const handleClose=()=>{setOpenModal(false)}
  const {firms}=useSelector(state=>state.stock)
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("firms");
  }, []);
  return (
    <div>
      <button className="inline-block rounded border border-[#537D3C] bg-[#FEBB22] px-5 py-3 mt-5 ml-7 text-sm font-medium text-white  hover:bg-[#537d3c] focus:ring-2 focus:ring-[#537d3c] active:green uppercase" onClick={handleOpen}>
        Add Firm
      </button>
      <ModalCard openModal={openModal} handleClose={handleClose}/>
      <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mx-7 mt-4 justify-center">
      {firms.map(firm=><FirmCard firm={firm} key={firm._id}/>)}

      </div>

    </div>
  );
};

export default Firms;
