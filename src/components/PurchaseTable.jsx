import { Checkbox, Table, TableCell } from "flowbite-react";
import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ProductTable = () => {
  const { sales , purchases} = useSelector((state) => state.stock);
  const { deleteStock,updateStock } = useStockCalls();
  console.log(sales);
  return (
    <div className=" w-full">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>

          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell className="px-2">Firm</Table.HeadCell>
          <Table.HeadCell className="px-2">Brand</Table.HeadCell>
          <Table.HeadCell className="px-10">Product</Table.HeadCell>
          <Table.HeadCell className="px-10">Quantity</Table.HeadCell>
          <Table.HeadCell className="px-10">Price</Table.HeadCell>
          <Table.HeadCell className="px-10">Amount</Table.HeadCell>
          <Table.HeadCell>
            Actions
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {purchases.map((product) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={product._id}
            >
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <TableCell>{product.createdAt}</TableCell>
              <TableCell>{product.firmId.name}</TableCell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.brandId.name}
              </Table.Cell>
              <Table.Cell className="px-10" >{product.productId.name}</Table.Cell>
              <Table.Cell className="px-10">{product.quantity}</Table.Cell>
              <Table.Cell className="px-10">{product.price}</Table.Cell>
              <Table.Cell className="px-10">{product.amount}</Table.Cell>
              <Table.Cell>
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

export default ProductTable;
