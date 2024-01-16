import { useEffect } from "react";
import useStockCalls from "../service/useStockCalls";

const Firms = () => {
  const { getFirms } = useStockCalls();
  useEffect(() => {
    getFirms();
  }, []);
  return <div>Firms</div>;
};

export default Firms;
