import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/BrandModal";
import { CardSkeleton, Error, NoDataMsg } from "../components/DataFetchMsg";

const Brands = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setInfo({
      name: "",
      image: "",
    });
    setOpenModal(false);
  };

  const [info, setInfo] = useState({
    name: "",
    image: "",
  });

  const { brands, loading, error } = useSelector((state) => state.stock);
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("brands");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <button
        className="inline-block rounded border border-[#537D3C] bg-[#FEBB22] px-5 py-3 mt-5 ml-7 text-sm font-medium text-white  hover:bg-[#537d3c] focus:ring-2 focus:ring-[#537d3c] active:green uppercase"
        onClick={handleOpen}
      >
        Add Brand
      </button>
      <BrandModal
        openModal={openModal}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      {error && <Error />}
      {loading && (
        <CardSkeleton>
          <BrandCard />
        </CardSkeleton>
      )}
      {!loading && !brands?.length && !error && <NoDataMsg />}
      {!loading && brands?.length > 0 && !error && (
        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mx-7 mt-4 justify-center">
          {brands.map((brand) => (
            <BrandCard
              brand={brand}
              key={brand._id}
              handleOpen={handleOpen}
              handleClose={handleClose}
              setInfo={setInfo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Brands;
