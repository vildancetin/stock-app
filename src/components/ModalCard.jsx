"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

import { useState } from "react";
import useStockCalls from "../service/useStockCalls";

const ModalCard = ({ openModal, handleClose }) => {
  const [info, setInfo] = useState({
    name: "",
    address: "",
    phone: "",
    image: "",
  });
  const {postStock}=useStockCalls()
  const handleSubmit=(e)=>{
    e.preventDefault()
    postStock(info)
    handleClose()
  }
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
                id="phone"
                type="text"
                required
                placeholder="phone *"
                name="phone"
                value={info.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextInput
                id="address"
                type="text"
                required
                placeholder="address *"
                name="address"
                value={info.address}
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
            Add Firm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCard;
