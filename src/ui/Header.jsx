import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-sky-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest font-semibold text-lg">
        Rumah Bang Jago Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  )
}
