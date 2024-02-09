"use client";

import { Button, Modal, TextInput } from "flowbite-react";
import useStockCalls from "../service/useStockCalls";

import { Label, Select } from "flowbite-react";
import { useSelector } from "react-redux";

const PurchaseModal = ({ openModal, handleClose, info, setInfo }) => {
  const { postStock,updateStock } = useStockCalls();
  const { products, brands,firms } = useSelector((state) => state.stock);
console.log(firms)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      updateStock("purchases",info)
    } else {
      postStock("purchases", info);
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
              <Label htmlFor="firms" value="Select firm" />
            </div>
            <Select
              id="firms"
              required
              name="firmId"
              value={info.firmId}
              onChange={handleChange}
            >
              {firms.map((firm) => (
                <option
                  value={firm._id}
                  name="firmId"
                  key={firm._id}
                >
                  {firm.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="products" value="Select product" />
            </div>
            <Select
              id="products"
              required
              name="productId"
              value={info.productId}
              onChange={handleChange}
            >
              {products.map((product) => (
                <option
                  value={product._id}
                  name="productId"
                  key={product._id}
                >
                  {product.name}
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
            Add New Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PurchaseModal;
