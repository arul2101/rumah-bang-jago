import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import Button from "../../../ui/Button";
import { useSelector } from "react-redux";
import EmptyCart from "../../../features/cart/EmptyCart";
import { useState } from "react";
import { formatCurrency } from "../../../utils/helper";

export default function CreateOrder() {
  const { name } = useSelector(state => state.user);
  const { cart } = useSelector(state => state.cart);
  const [withPriority, setWithPriority] = useState(false);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting"

  const formErrors = useActionData();

  const totalCartPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const priorityPRice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPRice;

  if (!cart.length) return <EmptyCart />

  return (
    <div className="px-4 py-6">
      <Link to="/cart">&larr; Kembali ke keranjang</Link>
      <h2 className="mt-8 mb-8 text-xl font-semibold">Siap untuk lanjut? Buruan pesan sekarang!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Nama Lengkap</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            required
            autoComplete="off"
            defaultValue={name}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Nomor HP</label>
          <div className="grow">
            <input
              className="input w-full"
              type="tel"
              name="phone"
              required
              autoComplete="off"
            />
            {formErrors?.phoneErrorMessage && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phoneErrorMessage}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Alamat Lengkap</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
              autoComplete="off"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 cursor-pointer"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Mau menjadikan pesanan ini proritas?
          </label>
        </div>

        <div>
          <input
            type="hidden"
            value={JSON.stringify(cart)}
            name="cart"
          />
          <Button type="primary">
            {isSubmitting
              ? "Sedang membuat pesanan.."
              : `Pesan Sekarang (TOTAL: ${formatCurrency(totalPrice)})`}
          </Button>
        </div>
      </Form>
    </div>
  )
}
