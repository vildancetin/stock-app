"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

import { useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { toastErrorNotify } from "../helper/ToastNotify";

const BrandModal = ({ openModal, handleClose, info, setInfo }) => {
  const { postStock, updateStock } = useStockCalls();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      updateStock("brands", info);
    } else {
      postStock("brands", info);
    }
    handleClose();
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(info);
  return (
    <>
      <Modal dismissible show={openModal} onClose={handleClose}>
        <Modal.Body>
          <div className="space-y-3">
            <div>
              <TextInput
                id="name"
                placeholder="name *"
                required
                name="name"
                type="text"
                value={info.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <TextInput
                id="image"
                type="url"
                required
                placeholder="image *"
                name="image"
                value={info.image}
                onChange={handleChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="bg-green hover:bg-[#FEBB22]"
          >
            {info._id ? "Update Brand" : "Add Brand"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default BrandModal;
