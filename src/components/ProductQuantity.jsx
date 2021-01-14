import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { RefetcherContext } from "../App";

const ProductQuantity = () => {
  const [refetcher] = useContext(RefetcherContext);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const { data } = await axios.get("/paniers");

        if (data.length > 0) {
          const fullCommand = data
            .map((x) => {
              return x.quantity;
            })
            .reduce((a, b) => a + b);
          setTotal(fullCommand);
        } else {
          setTotal([]);
        }
      } catch (err) {}
    };
    fetchTotal();
  }, [refetcher]);

  return <div>{total}</div>;
};

export default ProductQuantity;
