import { Link, useRouteError } from "react-router-dom"

export default function Error() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center mt-40 text-lg">
      <h1>Something went wrong 😢</h1>
      <p className="mb-5">{error.data || error.message}</p>

      <Link to="/">&larr; Go back</Link>
    </div>
  )
}
