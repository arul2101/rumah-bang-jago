import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { loaderOrder, loaderMenu } from "./loader/loader"
import { actionCreateOrder, actionUpdatePriority } from "./action/action"

import AppLayout from "./ui/AppLayout"
import Error from "./ui/Error"
import Homepage from "./pages/home/Homepage"
import Menu from "./pages/menu/Menu"
import Cart from "./pages/cart/Cart"
import CreateOrder from "./pages/order/new/CreateOrder"
import Order from "./pages/order/Order"



export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: loaderMenu,
          errorElement: <Error />
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: actionCreateOrder,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: loaderOrder,
          action: actionUpdatePriority,
        }
      ],
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
