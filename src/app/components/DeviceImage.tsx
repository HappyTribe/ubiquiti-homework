import { TMinimalDevice } from "src/features/devices/types";
import NoImageIcon from "src/ui/icons/NoImage";
import cn from "src/utils/cn";

export default function DeviceImage({
  size = "default",
  device,
}: {
  device: TMinimalDevice;
  size?: "small" | "default";
}) {
  console.log("Device image ID: ", device.images?.default);

  {
    /* {device.images?.default && (
    <Image
      src={getImageUrl({
        id: device.id,
        default: device.images.default,
        size: 20,
      })}
      alt={device.product.name}
      width={20}
      height={20}
    />
  )} */
  }

  return (
    <NoImageIcon
      className={cn("text-neutral-400", {
        "w-12 h-12": size === "default",
        "w-4 h-4": size === "small",
      })}
    />
  );
}
