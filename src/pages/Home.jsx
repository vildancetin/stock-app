import { useEffect } from "react";
import Charts from "../components/Charts";
import Kpi from "../components/Kpi";
import useStockCalls from "../service/useStockCalls";
import { CardSkeleton } from "../components/DataFetchMsg";

const Home = () => {
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("sales");
    getStocks("purchases");
  }, []);
  return (
    <div>
      <Kpi />
      <Charts />
    </div>
  );
};

export default Home;
