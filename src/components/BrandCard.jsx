import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import useStockCalls from "../service/useStockCalls";

const BrandCard = ({ brand, handleOpen, handleClose, setInfo }) => {
  const { name, image, _id } = brand;
  const { deleteStock } = useStockCalls();
  const handleDelete = () => {
    deleteStock("brands", _id);
  };
  return (
    <>
      <div className=" block rounded-lg p-4 shadow-xl shadow-indigo-100">
        <div className="h-32 overflow-y-auto max-h-24 info">
          <p>{name}</p>
          
        </div>
        <img
          alt="Home"
          src={image}
          className="h-56 w-full rounded-md object-contain"
        />

        <div className="mt-2 text-center">
        
          <div className="mt-6 flex justify-center items-center gap-4 text-xl h-10">
            <button className="flex-shrink-0" onClick={handleDelete}>
              <MdOutlineDeleteOutline />
            </button>
            <button
              className="flex-shrink-0"
              onClick={() => {
                handleOpen();
                setInfo(brand);
              }}
            >
              <MdEdit />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCard;
