import {
  MdOutlinePayment,
  MdAttachMoney,
  MdAddShoppingCart,
} from "react-icons/md";
import { useSelector } from "react-redux";

const Kpi = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  const totalSales = sales?.reduce((acc, val) => acc + val.amount, 0);

  const totalPurchases = purchases?.reduce((acc, val) => acc + val.amount, 0);

  const kpiDatas = [
    {
      id: 1,
      name: "SALES",
      price: `${totalSales}`,
      icon: <MdAttachMoney className="w-[50px] h-40 text-yellow-300" />,
    },
    {
      id: 2,
      name: "PURCHASES",
      price: `${totalPurchases}`,
      icon: <MdOutlinePayment className="w-[50px] h-44 green" />,
    },
    {
      id: 3,
      name: "PROFIT",
      price: `${totalSales - totalPurchases}`,
      icon: <MdAddShoppingCart className="w-[50px] h-44 text-red-500" />,
    },
  ];
  return (
    <div className="flex gap-2 flex-wrap justify-center items-center">
      {kpiDatas.map((item) => (
        <div className="w-[250px] flex justify-center items-center max-h-28  rounded border-2">
          <div>{item.icon}</div>
          <div className="font-medium  ml-4">
            <p className="text-xl">{item.name}</p>
            <p className="text-xl">$ {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kpi;
