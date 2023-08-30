import { getMenu, getOrder } from "../services/apiRestaurant";

export async function loaderOrder({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export async function loaderMenu() {
  const menu = await getMenu();
  return menu;
}

