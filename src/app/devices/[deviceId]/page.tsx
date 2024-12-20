import DeviceImage from "src/app/components/DeviceImage";
import { getDeviceById } from "src/features/devices/queries";
import BackButton from "./components/BackButton";
import DescriptionListItem from "./components/DescriptionListItem";
import ShowJSONButton from "./components/ShowJSONButton";
import PaginationButtons from "./components/PaginationButtons";

export default async function DevicePage(props: {
  params: Promise<{ deviceId: string }>;
}) {
  const { deviceId } = await props.params;

  const device = await getDeviceById({ id: deviceId });

  if (!device) {
    return <section>NO DEVICE FOUND</section>;
  }

  return (
    <>
      <div className="w-full h-16 flex items-center justify-between">
        <BackButton />

        <PaginationButtons deviceId={device.id} />
      </div>

      <div className="flex gap-x-8 self-center w-full max-w-[768px] mt-4">
        <div className="bg-[#F9FAFA] aspect-square w-full max-w-[292px] flex items-center justify-center">
          <DeviceImage device={device} />
        </div>

        <div className="w-full">
          <h1 className="text-xl font-bold text-black/85">
            {device.product.name}
          </h1>

          {device.line && (
            <h2 className="mt-1 text-sm text-black/45">{device.line?.name}</h2>
          )}

          <dl className="mt-4">
            <DescriptionListItem
              hide={!device.line}
              title="Product Line"
              value={device.line?.name}
            />
            <DescriptionListItem title="ID" value={device.id} />
            <DescriptionListItem title="Name" value={device.product.name} />
            <DescriptionListItem
              hide={device.shortnames.length === 0}
              title="Short Name"
              value={device.shortnames.join(", ")}
            />
          </dl>
        </div>
      </div>

      <ShowJSONButton json={JSON.stringify(device, null, 2)} />
    </>
  );
}
