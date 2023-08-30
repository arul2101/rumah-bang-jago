import store from "../store";

import { redirect } from "react-router-dom";
import { deleteAllItem } from "../features/cart/cartSlice";
import { createOrder, getOrder, updateOrder } from "../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export async function actionCreateOrder({ request }) {
  const condition = confirm("Pastikan data & pesanan yg dibuat sudah benar, yakin ingin lanjutkan pesanan?")

  if (condition) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // Konversi ke JSON
    const cart = JSON.parse(data.cart);
    const orderPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0)

    // Buat date isoString dan tambahkan 15 menit delivery
    const date = new Date();
    date.setMinutes(date.getMinutes() + 15);
    const estimatedDelivery = date.toISOString();

    const order = {
      ...data,
      cart,
      priority: data.priority === "true",
      orderPrice,
      priorityPrice: data.priority === "true" ? orderPrice * 0.2 : 0,
      status: "preparing",
      id: `RBJ${Math.floor(Math.random() * 14532133)}`,
      estimatedDelivery,
    }

    // Cek apakah nomor hp valid
    const errors = {};
    if (!isValidPhone(order.phone)) errors.phoneErrorMessage = "Pastikan Nomor HP yang kamu inputkan benar yaa!";
    if (Object.keys(errors).length > 0) return errors;

    // Kalo ok lanjut buat order dan redirect ke halaman /order/orderId
    const newOrder = await createOrder(order);
    store.dispatch(deleteAllItem());

    return redirect(`/order/${newOrder.id}`);
  }

  return null;
}

export async function actionUpdatePriority({ params }) {
  const condition = confirm("Apakah anda yakin?");
  if(condition) {
    const { orderPrice } = await getOrder(params.orderId);

    const data = { 
      priority: true,
      priorityPrice: orderPrice * 0.2,
    };
  
    await updateOrder(params.orderId, data);
    return null;
  }
  
  return null;
}