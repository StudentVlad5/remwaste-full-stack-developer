import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { QuizActions } from "../../../store/reducers/quiz.reducer";
import { toast } from 'react-toastify';
import s from "./index.module.scss";
import { useNavigate } from "react-router";
import { Button } from "../../ui/Button";

interface OrderItem {
  id: number;
  size: number;
  price_before_vat: number;
  quantity: number;          
}

interface FooterProps {
  orderedItems: any[];
}


const Footer = ({ orderedItems }: FooterProps) => {
  const dispatch = useDispatch();
  const notify = (message:string) => toast(message);
  let navigate = useNavigate();

  const [itemsWithCount, setItemsWithCount] = useState<OrderItem[]>([]);

  useEffect(() => {
    const initialized = orderedItems.map((item) => ({
      ...item,
      quantity: item.quantity ?? 1,
    }));
    itemsWithCount.map(item=> initialized.some(i => i.id === item.id) ? item : {...item, quantity: 1});
    setItemsWithCount(initialized);
  }, [orderedItems]);

  const changeQuantity = (id: number, delta: number) => {
    setItemsWithCount((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const setQuantity = (id: number, newQuantity: number) => {
    setItemsWithCount((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItemsWithCount((prev) => prev.filter((item) => item.id !== id));
  };

  const handleConfirmOrder = () => {
    const payload = itemsWithCount.map(({ id, quantity }) => ({ id, quantity }));
    dispatch(QuizActions.setQuizListOrders(payload)); 
    notify(`Order confirmed with items: ${JSON.stringify(payload)}`);
    setItemsWithCount([])
    setTimeout(()=>{navigate("/permit_check")},2000);

  };

  return (
    <footer className={s.Footer}>
      { itemsWithCount.length > 0 && <div className={s.FooterContent}>
        <h4>
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </h4>

        {itemsWithCount.map((item) => (
          <div key={item.id} className={s.OrderItem}>
            <div className={s.ItemInfo}>
              <span>{item.size} Yard Skip</span>
              <span>£{item.price_before_vat * item.quantity} + VAT</span>
              <span>{item.quantity} items</span>
            </div>

            <div className={s.QuantityControl}>
              <button type="button" onClick={() => changeQuantity(item.id, -1)}>-</button>
              <input className={s.EditQuantity} 
              title="quantity"
                type="number"
                name="quantity"
                min={1}
                value={item.quantity}
                onChange={(e) => setQuantity(item.id, +e.target.value)}
              />
              <button type="button" onClick={() => changeQuantity(item.id, 1)}>+</button>
            </div>

            <Button
              onClick={() => removeItem(item.id)}
              classname={s.RemoveButton}
            >
              Remove
            </Button>
          </div>
        ))}
        <div>TOTAL:  £{itemsWithCount.reduce((acc, item) => acc + item.price_before_vat * item.quantity, 0)} + VAT </div>
        <div className={s.FooterActions}>
          <button
            onClick={handleConfirmOrder}
            className={s.ConfirmButton}
          >
            Confirm Order
          </button>
        </div>
      </div>}
    </footer>
  );
};

export default Footer;
