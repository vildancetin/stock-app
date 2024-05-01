"use client";

import { Button ,Modal, TextInput } from "flowbite-react";

import useStockCalls from "../service/useStockCalls";

const ModalCard = ({ openModal, handleClose, info, setInfo }) => {
  const { postStock, updateStock } = useStockCalls();
  // ? if info includes _id value so it means this info came from api and so user want to update but if info doesnt have _id so will new firm information.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      updateStock("firms", info);
    } else {
      postStock("firms", info);
    }
    handleClose();
  };
  // ? when inputs start to fill
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
            {/* ? change button name to _id value */}
            {info._id ? "Update Firm" : "Add Firm"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCard;
