"use client";

import { Button, Modal, TextInput } from "flowbite-react";
import useStockCalls from "../service/useStockCalls";

import { Label, Select } from "flowbite-react";

const ProductModal = ({ openModal, handleClose, info, setInfo }) => {
  const { postStock } = useStockCalls();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
    } else {
      postStock("products", info);
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
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select your country" />
            </div>
            <Select id="countries" required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="bg-green hover:bg-[#FEBB22]"
          >
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ProductModal;
