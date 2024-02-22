import { Checkbox, Table, TableCell } from "flowbite-react";
import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
import { MdOutlineDeleteOutline } from "react-icons/md";

const SalesTable = () => {
  const { sales } = useSelector((state) => state.stock);
  const { deleteStock,updateStock } = useStockCalls();
  console.log(sales);
  return (
    <div className=" w-full min-w-[780px]">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>

          <Table.HeadCell className="px-12">Date</Table.HeadCell>
          <Table.HeadCell className="px-12">Brand</Table.HeadCell>
          <Table.HeadCell className="px-12">Product</Table.HeadCell>
          <Table.HeadCell className="px-10">Quantity</Table.HeadCell>
          <Table.HeadCell className="px-10">Price</Table.HeadCell>
          <Table.HeadCell className="px-10">Amount</Table.HeadCell>
          <Table.HeadCell className="px-6">
            Actions
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {sales.map((product) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={product._id}
            >
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <TableCell className="text-center">{product.createdAt.slice(0,10)}</TableCell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                {product.brandId.name}
              </Table.Cell>
              <Table.Cell className="px-10 text-center">{product.productId.name}</Table.Cell>
              <Table.Cell className="px-10 text-center">{product.quantity}</Table.Cell>
              <Table.Cell className="px-10 text-center">{product.price}</Table.Cell>
              <Table.Cell className="px-10 text-center">{product.amount}</Table.Cell>
              <Table.Cell className="text-center">
                <button
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 "
                  onClick={() => deleteStock("sales", product._id)}
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

export default SalesTable;
