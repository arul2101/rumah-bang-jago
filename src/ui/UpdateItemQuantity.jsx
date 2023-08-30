import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { decreaseItemQuantity, increaseItemQuantity } from "../features/cart/cartSlice";

export default function UpdateItemQuantity({ friedRiceId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(friedRiceId))
  }

  function handleDecreaseQuantity() {
    dispatch(decreaseItemQuantity(friedRiceId));
  }

  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button type='round' onClick={handleDecreaseQuantity}>-</Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type='round' onClick={handleIncreaseQuantity}>+</Button>
    </div>
  )
}

UpdateItemQuantity.propTypes = {
  friedRiceId: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number.isRequired,
}
