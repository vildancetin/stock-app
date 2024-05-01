"use client";

import { Button, Modal, TextInput } from "flowbite-react";
import useStockCalls from "../service/useStockCalls";

import { Label, Select } from "flowbite-react";
import { useSelector } from "react-redux";

const ProductModal = ({ openModal, handleClose, info, setInfo }) => {
  const { postStock } = useStockCalls();
  const { categories, brands } = useSelector((state) => state.stock);
  console.log(categories);
  console.log(brands);
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
              <Label htmlFor="categories" value="Select category" />
            </div>
            <Select
              id="categories"
              required
              name="categoryId"
              value={info.categoryId}
              onChange={handleChange}
            >
              {categories.map((category) => (
                <option value={category._id} name="categoryId">
                  {category.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="brands" value="Select brand" />
            </div>
            {/* ? value is selected id */}
            <Select
              id="brands"
              required
              name="brandId"
              onChange={handleChange}
              value={info.brandId}
            >
              {brands.map((brand) => (
                <option value={brand._id} name="brandId">
                  {brand.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Product Name" />
            </div>
            <TextInput
              id="name"
              placeholder="Name *"
              required
              name="name"
              type="text"
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
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ProductModal;
