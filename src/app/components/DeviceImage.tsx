import { TMinimalDevice } from "src/features/devices/types";
import NoImageIcon from "src/ui/icons/NoImage";
import cn from "src/utils/cn";
import Image from "next/image";
import getImageUrl from "src/utils/getImageUrl";

export default function DeviceImage({
  size = "default",
  device,
}: {
  device: TMinimalDevice;
  size?: "small" | "default";
}) {
  console.log("Device image ID: ", device.images?.default);

  if (device.images?.default) {
    const imageSize = size === "default" ? 48 : 16;

    return (
      <Image
        unoptimized
        src={getImageUrl({
          id: device.id,
          default: device.images.default,
          size: imageSize,
        })}
        alt={device.product.name}
        width={imageSize}
        height={imageSize}
      />
    );
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
