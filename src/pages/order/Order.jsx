import { useFetcher, useLoaderData } from "react-router-dom";
import OrderItem from "../../ui/OrderItem";
import { calcMinutesLeft, formatCurrency, formatDate } from "../../utils/helper";
import { useEffect } from "react";
import UpdateOrderPriority from "./UpdateOrderPriority";

export default function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load('/menu');
  }, [fetcher])

  const {
    id,
    customer,
    address,
    phone,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>



      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium text-lg">
          {deliveryIn >= 0
            ? `Tinggal ${calcMinutesLeft(estimatedDelivery)} menit lagi 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimasi Sampai: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <div>
        <ul>
          <li>Customer : {customer}</li>
          <li>Address : {address}</li>
          <li>Phone Number : {phone}</li>
        </ul>
      </div>

      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.friedRiceId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={fetcher?.data?.find(eachItem => eachItem.id === item.friedRiceId).ingredients ?? []}
          />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5 uppercase">
        <p className="text-lg font-medium text-stone-600">
          Total Harga: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-lg font-medium text-stone-600 uppercase">
            Harga Prioritas: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold text-lg uppercase">
          Yang harus dibayar: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrderPriority />}
    </div>
  )
}


