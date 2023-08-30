import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

export default function UpdateOrderPriority() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Ubah pesanan ini menjadi prioritas</Button>
    </fetcher.Form>
  )
}


