import { useState } from "react";
import defaultImg from "../../../assets/images/yarder-skip.jpg"; 
import { Button } from "../../ui/Button";
import styles from "./index.module.scss";

type Props = {
  item: {
    id: number;
    size: number;
    hire_period_days: number;
    price_before_vat: number;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
    per_tonne_cost: number | null;
  };
  toggleSelectedItem: (id: number) => void;
};


export const ProductCard = ({ item, toggleSelectedItem }: Props) => {
  const [selectItem, setSelectItem] = useState(0);

  return (
<div className={styles.ProductCard}>
  <img src={defaultImg} alt="skip" loading="lazy" />
  <div className={styles.Title}>Size: {item.size} yd³</div>
  <div className={styles.SubText}>Hire: {item.hire_period_days} days</div>
  <div className={styles.Price}>£{item.price_before_vat} + VAT</div>
  <div className={styles.Status}>
    Heavy Waste:{" "}
    <span className={item.allows_heavy_waste ? styles.Yes : styles.No}>
      {item.allows_heavy_waste ? "Yes" : "No"}
    </span>
  </div>
  <div className={styles.Status}>
    On Road:{" "}
    <span className={item.allowed_on_road ? styles.Yes : styles.No}>
      {item.allowed_on_road ? "Allowed" : "Not allowed"}
    </span>
  </div>
  <Button classname={styles.btnSkip} onClick={()=>{setSelectItem((prev)=>prev === item.id ? 0 : item.id); toggleSelectedItem(item.id)}}>{selectItem ? "SELECTED" : "Select this skip ⇢"}</Button>
</div>
  );
};