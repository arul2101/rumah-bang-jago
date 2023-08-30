import { formatCurrency } from "../utils/helper";
import PropTypes from "prop-types";

export default function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="text-lg">
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold text-lg">{formatCurrency(totalPrice)}</p>
      </div>
      <p className='text-sm capitalize italic text-stone-500'>{isLoadingIngredients ? "Loading..." : ingredients.join(", ")}</p>
    </li>
  )
}

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
  isLoadingIngredients: PropTypes.bool.isRequired,
  ingredients: PropTypes.array,
}


