import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "./../../utils/helper";

export default function CartOverview() {
  const { cart } = useSelector(state => state.cart);
  const totalOrder = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);

  if (!totalOrder) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalOrder} Pesanan</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>

      <Link to="/cart">Buka Keranjang &rarr;</Link>
    </div>
  )
}
