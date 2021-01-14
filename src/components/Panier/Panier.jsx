import { useEffect, useState } from "react";
import useRequest from "../../customHooks/useRequest";
import PanierCard from "./PanierCard";

const Panier = ({ facture }) => {
  const setTotal = facture[1];
  const [refetch, setRefetch] = useState(false);
  const { data } = useRequest("get", "/paniers", refetch);

  useEffect(() => {
    if (data.length > 0) {
      const totalPrice = data
        .map((price) => {
          return price.price * price.quantity;
        })
        .reduce((a, b) => a + b);
      setTotal(totalPrice);
    }
  }, [data, setTotal]);

  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <PanierCard {...item} key={item.id} fetch={[refetch, setRefetch]} />
          );
        })}
    </div>
  );
};

export default Panier;
