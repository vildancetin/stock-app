import { Checkbox, Table } from "flowbite-react";
import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ProductTable = () => {
  const { products } = useSelector((state) => state.stock);
  const { deleteStock } = useStockCalls();
  console.log(products);
  return (
    <div className=" w-full">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>

          {/* <Table.HeadCell>#</Table.HeadCell> */}
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Brand</Table.HeadCell>
          <Table.HeadCell>Stock</Table.HeadCell>
          <Table.HeadCell>
            Actions
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={product._id}
            >
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>

              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.name}
              </Table.Cell>
              <Table.Cell>{product.categoryId.name}</Table.Cell>
              <Table.Cell>{product.brandId.name}</Table.Cell>
              <Table.Cell>{product.quantity}</Table.Cell>

              <Table.Cell>
                <button
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 "
                  onClick={() => deleteStock("products", product._id)}
                >
                  <MdOutlineDeleteOutline className="text-xl" />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProductTable;
