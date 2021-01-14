import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { RefetcherContext } from "../App";

const AddToBox = ({ item }) => {
  const [buying, setBuying] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  const [refetcher, setRefetcher] = useContext(RefetcherContext);

  const addOne = async () => {
    try {
      const { data } = await axios.post("/paniers", {
        produits_id: item.id,
        panier_id: 1,
      });
      setBuying(true);
      setItemInfo(data);
      setRefetcher(!refetcher);
    } catch (err) {}
  };

  const removeOne = async () => {
    try {
      const { data } = await axios.delete("/paniers/button/" + item.id);
      if (data === 209) {
        setBuying(false);
      }
      setItemInfo(data);
      setRefetcher(!refetcher);
    } catch (err) {}
  };

  useEffect(() => {
    const fetchItemQuantity = async () => {
      try {
        const { data } = await axios.get("/paniers/" + item.id);
        if (data) {
          setBuying(true);
          setItemInfo(data);
        } else {
          setItemInfo({});
          setBuying(false);
        }
      } catch (err) {}
    };
    fetchItemQuantity();
  }, [item,refetcher]);

  return (
    <div>
      {buying ? (
        <div className="product-card-change-adding">
          <p onClick={removeOne}>-</p>
          <p>{itemInfo.quantity}</p>
          <p onClick={addOne}>+</p>
        </div>
      ) : (
        <input
          className="product-card-item product-card-button"
          type="button"
          value="Add to box"
          onClick={addOne}
        />
      )}
    </div>
  );
};

export default AddToBox;
