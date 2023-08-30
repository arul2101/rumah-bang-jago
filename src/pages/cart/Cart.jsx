import { Link } from "react-router-dom";
import CartItem from "../../features/cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllItem } from "../../features/cart/cartSlice";
import EmptyCart from "../../features/cart/EmptyCart";
import Button from "../../ui/Button";

export default function Cart() {
  const { name } = useSelector(state => state.user);
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  function handleDeleteAllCart() {
    dispatch(deleteAllItem());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <Link to="/menu">&larr; Kembali ke menu</Link>

      <h2 className="mt-7 text-xl font-semibold">Keranjang kamu, {name}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.friedRiceId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Pesan
        </Button>

        <Button type="secondary" onClick={handleDeleteAllCart}>Hapus semua keranjang</Button>
      </div>
    </div>
  )
}
