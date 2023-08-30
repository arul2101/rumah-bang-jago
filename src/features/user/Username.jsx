import { useSelector } from "react-redux"

export default function Username() {
  const { name } = useSelector(state => state.user);
  return (
    <div className="hidden text-lg font-semibold md:block">{name}</div>
  )
}
