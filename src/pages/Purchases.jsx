import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import PurchaseTable from "../components/PurchaseTable";
import PurchaseModal from "../components/PurchaseModal";
import TableSkleton, { Error, NoDataMsg } from "../components/DataFetchMsg";
import { useSelector } from "react-redux";

const Purchases = () => {
  const [openModal, setOpenModal] = useState(false);
  const { getStocks } = useStockCalls();
  const { error, loading, purchases } = useSelector((state) => state.stock);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setInfo({ name: "", categoryId: "", brandId: "" });
    setOpenModal(false);
  };

  const [info, setInfo] = useState({
    quantity: "",
    price: "",
    productId: "",
    brandId: "",
    firmId: "",
  });

  useEffect(() => {
    getStocks("products");
    getStocks("categories");
    getStocks("brands");
    getStocks("purchases");
    getStocks("firms");
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {error && <Error />}
      {loading && <TableSkleton />}
      {!loading && !purchases?.length && !error && <NoDataMsg />}
      {!loading && purchases?.length > 0 && !error && (
        <div className="grid sm:grid-col-1 gap-4 mx-7 mt-4 justify-center min-w-[900px]">
          <PurchaseTable
            handleOpen={handleOpen}
            handleClose={handleClose}
            setInfo={setInfo}
          />
        </div>
      )}
    </div>
  );
};

export default Purchases;
