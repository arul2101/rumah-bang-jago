import { useLoaderData } from "react-router-dom";
import MenuItem from "../../features/menu/MenuItem";

export default function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((friedRice) => (
        <MenuItem friedRice={friedRice} key={friedRice.id} />
      ))}
    </ul>
  )
}
