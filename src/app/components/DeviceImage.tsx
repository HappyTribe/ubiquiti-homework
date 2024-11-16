import { TMinimalDevice } from "src/features/devices/types";
import NoImageIcon from "src/ui/icons/NoImage";

export default function DeviceImage(props: { device: TMinimalDevice }) {
  console.log("Device image ID: ", props.device.images?.default);

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

  return <NoImageIcon className="w-12 h-12 text-neutral-400" />;
}
