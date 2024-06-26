import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import useStockCalls from "../service/useStockCalls";

const FirmCard = ({ firm, handleOpen, setInfo }) => {

  const { deleteStock } = useStockCalls();
  // ? _id is getting from api
  const handleDelete = () => {
    deleteStock("firms", firm?._id);
  };
  return (
    <>
      <div className=" block rounded-lg p-4 shadow-xl shadow-indigo-100">
        <div className="h-32 overflow-y-auto max-h-24 info">
          <p>{firm?.name}</p>
          <p>{firm?.address}</p>
        </div>
        <img
          alt="Home"
          src={firm?.image}
          className="h-56 w-full rounded-md object-contain"
        />

        <div className="mt-2 text-center">
          <p>{firm?.phone}</p>
          <div className="mt-6 flex justify-center items-center gap-4 text-xl h-10">
            <button className="flex-shrink-0" onClick={handleDelete}>
              <MdOutlineDeleteOutline />
            </button>
            <button
            // ? edit infos came from api so it includes _id information
              className="flex-shrink-0"
              onClick={() => {
                handleOpen();
                setInfo(firm);
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

export default FirmCard;
