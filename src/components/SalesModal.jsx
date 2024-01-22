"use client";

import { Button, Modal, TextInput } from "flowbite-react";
import useStockCalls from "../service/useStockCalls";

import { Label, Select } from "flowbite-react";
import { useSelector } from "react-redux";

const SalesModal = ({ openModal, handleClose, info, setInfo }) => {
  const { postStock,updateStock } = useStockCalls();
  const { products, brands } = useSelector((state) => state.stock);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      updateStock("sales",info)
    } else {
      postStock("sales", info);
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
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="categories" value="Select product" />
            </div>
            <Select
              id="categories"
              required
              name="categoryId"
              value={info.categoryId}
              onChange={handleChange}
            >
              {products.map((category) => (
                <option
                  value={category._id}
                  name="categoryId"
                  key={category._id}
                >
                  {category.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="brands" value="Select brand" />
            </div>
            <Select
              id="brands"
              required
              name="brandId"
              onChange={handleChange}
              value={info.brandId}
            >
              {brands.map((brand) => (
                <option value={brand._id} name="brandId" key={brand._id}>
                  {brand.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <TextInput
              id="quantity"
              placeholder="Quantity *"
              required
              name="quantity"
              type="number"
              value={info.name}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              placeholder="Price *"
              required
              name="price"
              type="number"
              value={info.name}
              onChange={handleChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="bg-green hover:bg-[#FEBB22]"
          >
            Add New Sale
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SalesModal;
