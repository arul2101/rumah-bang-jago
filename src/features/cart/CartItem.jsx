import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCurrentQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helper";

import PropTypes from "prop-types";
import Button from "../../ui/Button";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";

export default function CartItem({ item }) {
  const { friedRiceId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantity(friedRiceId));

  const dispatch = useDispatch();

  function handleDeleteCart() {
    dispatch(deleteItem(friedRiceId))
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity friedRiceId={friedRiceId} currentQuantity={currentQuantity} />
        <Button type="small" onClick={handleDeleteCart}>Delete</Button>
      </div>
    </li>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
}
