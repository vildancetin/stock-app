import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import PurchaseTable from "../components/PurchaseTable";
import PurchaseModal from "../components/PurchaseModal";

const Sales = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setInfo({ name: "", categoryId: "", brandId: "" });
    setOpenModal(false);
  };

  const [info, setInfo] = useState({
    quantity:"",
    price: "",
    productId: "",
    brandId: "",
    firmId:""
  });

  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("products");
    getStocks("categories")
    getStocks("brands")
    getStocks("purchases")
    getStocks("firms")

  }, []);
  return (
    <div>
      <button
        className="inline-block rounded border border-[#537D3C] bg-[#FEBB22] px-5 py-3 mt-5 ml-7 text-sm font-medium text-white  hover:bg-[#537d3c] focus:ring-2 focus:ring-[#537d3c] active:green uppercase"
        onClick={handleOpen}
      >
        New Purchase
      </button>
      <PurchaseModal
        openModal={openModal}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mx-7 mt-4 justify-center">
        <PurchaseTable
          handleOpen={handleOpen}
          handleClose={handleClose}
          setInfo={setInfo}
        />
      </div>
    </div>
  );
};

export default Sales;
