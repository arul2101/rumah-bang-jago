import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className='py-3 px-4'>
      <Link to="/menu">&larr; Kembali ke menu</Link>

      <p className='mt-7 font-semibold'>Keranjang lu masih kosong! Lanjut belanja di menu dulu yaa :)</p>
    </div>
  )
}
