import "./Panier.css";
import axios from "axios";
import { useContext } from "react";
import { RefetcherContext } from "../../App";

const PanierCard = ({ id, name, quantity, price, photo, fetch }) => {
  const [refetch, setRefetch] = fetch;
  const [refetcher, setRefetcher] = useContext(RefetcherContext);

  const addOne = async () => {
    try {
      await axios.post("/paniers", {
        produits_id: id,
        panier_id: 1,
      });

      setRefetch(!refetch);
      setRefetcher(!refetcher)
    } catch (err) {}
  };

  const removeOne = async () => {
    try {
      await axios.delete("/paniers/button/" + id);
      setRefetch(!refetch);
      setRefetcher(!refetcher)
    } catch (err) {}
  };

  return (
    <div className="panier-card-all">
      <img src={"/" + photo} alt={name} />
      <div className="panier-change-quantity">
        <p onClick={removeOne}>-</p>
        <p>{quantity}</p>
        <p onClick={addOne}>+</p>
      </div>
    </div>
  );
};

export default PanierCard;
