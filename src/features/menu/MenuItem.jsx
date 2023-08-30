import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, getCurrentQuantity } from "../cart/cartSlice";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helper";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";

export default function MenuItem({ friedRice }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = friedRice;
  const currentQuantity = useSelector(getCurrentQuantity(id));
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      friedRiceId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {currentQuantity > 0 && (
            <div className='flex items-center gap-3 sm:gap-8'>
              <UpdateItemQuantity friedRiceId={id} currentQuantity={currentQuantity} />
              <Button type="small" onClick={() => dispatch(deleteItem(id))}>Delete</Button>
            </div>
          )}

          {!soldOut && currentQuantity === 0 && <Button type="small" onClick={handleAddToCart}>Add to cart</Button>}
        </div>
      </div>
    </li>
  )
}

MenuItem.propTypes = {
  friedRice: PropTypes.object.isRequired,
}
