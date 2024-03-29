import { Checkbox, Table, TableCell } from "flowbite-react";
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

          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell className="px-2">Product name</Table.HeadCell>
          <Table.HeadCell className="px-10">Category</Table.HeadCell>
          <Table.HeadCell className="px-10">Brand</Table.HeadCell>
          <Table.HeadCell className="px-10">Stock</Table.HeadCell>
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
              <TableCell>{product._id}</TableCell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.name}
              </Table.Cell>
              <Table.Cell className="px-10" >{product.categoryId.name}</Table.Cell>
              <Table.Cell className="px-10">{product.brandId.name}</Table.Cell>
              <Table.Cell className="px-10">{product.quantity}</Table.Cell>
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
