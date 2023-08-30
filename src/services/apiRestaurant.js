const URL_MENU_API = "http://localhost:3000";
const URL_ORDER_API = "http://localhost:5000"

export async function getMenu() {
  const res = await fetch(`${URL_MENU_API}/menu`);
  
  if(!res.ok) throw Error("Gagal mendapatkan menu!");
  
  const data = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${URL_ORDER_API}/order/${id}`);

  if(!res.ok) throw Error("Gagal mendapatkan order!");

  const data = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${URL_ORDER_API}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(!res.ok) throw Error();

    const data = await res.json();
    return data;
  } catch {
    throw Error("Gagal membuat order!");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${URL_ORDER_API}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if(!res.ok) throw Error();
  } catch {
    throw Error("Failed updating your order");
  }
}