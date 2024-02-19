import { AreaChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  const salesData = sales?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
    total: item.amount,
  }));
  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
    total: item.amount,
  }));

  return (
    <>
      <div className="mt-6">
        <h3 className="text-lg font-medium text-tremor-content-strong">Sales Chart</h3>
        <AreaChart
          className="h-80"
          data={salesData}
          index="date"
          categories={["total"]}
          colors={["purple", "rose"]}
          valueFormatter={dataFormatter}
          onValueChange={(v) => console.log(v)}
        />
      </div>
      <div>
        <h3 className="text-lg font-medium text-tremor-content-strong">Purchases Chart</h3>
        <AreaChart
          className="h-80"
          data={purchasesData}
          index="date"
          categories={["total"]}
          colors={["green", "blue"]}
          valueFormatter={dataFormatter}
          onValueChange={(v) => console.log(v)}
        />
      </div>
    </>
  );
};
export default Charts;
