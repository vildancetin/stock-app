import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import SalesTable from "../components/SalesTable";
import SalesModal from "../components/SalesModal";
import { useSelector } from "react-redux";
import TableSkleton, { Error, NoDataMsg } from "../components/DataFetchMsg";

const Sales = () => {
  const [openModal, setOpenModal] = useState(false);
  const { error, loading, sales } = useSelector((state) => state.stock);

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
  });

  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("products");
    getStocks("categories");
    getStocks("brands");
    getStocks("sales");
  }, []);
  return (
    <div>
      <button
        className="inline-block rounded border border-[#537D3C] bg-[#FEBB22] px-5 py-3 mt-5 ml-7 text-sm font-medium text-white  hover:bg-[#537d3c] focus:ring-2 focus:ring-[#537d3c] active:green uppercase"
        onClick={handleOpen}
      >
        New Sale
      </button>
      <SalesModal
        openModal={openModal}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      {error && <Error />}
      {loading && <TableSkleton />}
      {!loading && !sales?.length && !error && <NoDataMsg />}
      {!loading && sales?.length > 0 && !error && (
        <div className="grid sm:grid-col-1 gap-4 mx-7 mt-4 justify-center min-w-[900px] ">
          <SalesTable
            handleOpen={handleOpen}
            handleClose={handleClose}
            setInfo={setInfo}
          />
        </div>
      )}
    </div>
  );
};

export default Sales;
