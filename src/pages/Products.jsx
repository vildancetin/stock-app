import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";

const Products = () => {
  const { getStocks } = useStockCalls();
  // ? products include category and brand id so they called with products.
  useEffect(() => {
    getStocks("products");
    getStocks("categories")
    getStocks("brands")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setInfo({ name: "", categoryId: "", brandId: "" });
    setOpenModal(false);
  };

  const [info, setInfo] = useState({
    name: "",
    categoryId: "",
    brandId: "",
  });

  return (
    <div>
      <button
        className="inline-block rounded border border-[#537D3C] bg-[#FEBB22] px-5 py-3 mt-5 ml-7 text-sm font-medium text-white  hover:bg-[#537d3c] focus:ring-2 focus:ring-[#537d3c] active:green uppercase"
        onClick={handleOpen}
      >
        Add Product
      </button>
      <ProductModal
        openModal={openModal}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mx-7 mt-4 justify-center">
        <ProductTable
          handleOpen={handleOpen}
          handleClose={handleClose}
          setInfo={setInfo}
        />
      </div>
    </div>
  );
};

export default Products;
