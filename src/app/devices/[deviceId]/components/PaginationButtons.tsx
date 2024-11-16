import Link from "next/link";
import { getSiblingDeviceIds } from "src/features/devices/queries";
import Button from "src/ui/Button";
import LeftArrowIcon from "src/ui/icons/LeftArrow";

export default async function PaginationButtons(props: { deviceId: string }) {
  const siblingDeviceIds = await getSiblingDeviceIds({ id: props.deviceId });

  return (
    <div className="flex gap-x-2">
      <Button variant="icon" asChild>
        <Link href={`/devices/${siblingDeviceIds.previous}`}>
          <LeftArrowIcon />
        </Link>
      </Button>

      <Button variant="icon">
        <Link href={`/devices/${siblingDeviceIds.next}`}>
          <LeftArrowIcon className="rotate-180" />
        </Link>
      </Button>
    </div>
  );
}
