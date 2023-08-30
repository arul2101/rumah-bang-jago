import { useSelector } from "react-redux";
import CreateUser from "../../features/user/CreateUser";
import Button from "../../ui/Button";

export default function Homepage() {
  const { name } = useSelector(state => state.user);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        Nasi Goreng Terbaik.
        <br />
        <span className="text-sky-500">
          Coba sekarang, dari pada coba kemaren!
        </span>
      </h1>


      {name ? <Button to='/menu' type='primary'>Continue Order, {name}!</Button> : <CreateUser />}
    </div>
  )
}
