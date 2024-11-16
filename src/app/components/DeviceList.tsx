import Link from "next/link";
import { getDevices } from "src/features/devices/queries";
import DeviceImage from "./DeviceImage";

export default async function DeviceList(props: { layout: "list" | "grid" }) {
  const result = await getDevices();

  if (!result.success) {
    return <div>ERROR: {result.message}</div>;
  }

  if (props.layout === "list") {
    return (
      <ul className="divide-y-[1px] divide-neutral-100">
        <li className="flex w-full">
          <div className="w-8 h-8" />

          <div className="flex-1 px-2 py-1">
            <span className="text-sm font-bold text-black/85">
              Product Line
            </span>
          </div>

          <div className="flex-1 px-2 py-1">
            <span className="text-sm font-bold text-black/85">Name</span>
          </div>
        </li>

        {result.data.map((device) => (
          <li key={device.id} className="z-0">
            <Link
              href={`/devices/${device.id}`}
              className="flex w-full items-center hover:bg-[#f4f5f6] outline-none focus:ring-1 focus:ring-primary rounded-md ring-inset"
            >
              <div className="flex items-center justify-center w-8 h-8">
                <div className="flex items-center justify-center w-7 h-7 bg-neutral-100 rounded-md">
                  <DeviceImage device={device} size="small" />
                </div>
              </div>

              <div className="flex flex-1 px-2 py-1 items-center">
                <span className="text-sm text-black/65">
                  {device.line?.name}
                </span>
              </div>

              <div className="flex flex-1 px-2 py-1 items-center">
                <span className="text-sm text-black/45">
                  {device.product.name}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-wrap gap-4">
      {result.data.map((device) => (
        <li
          key={device.id}
          className="flex-grow w-[200px] min-h-10 border-[1px] border-solid border-[#EDEDF0] rounded-lg overflow-hidden bg-white hover:bg-[#F9FAFA] group focus-within:ring-1 focus-within:ring-primary"
        >
          <Link href={`/devices/${device.id}`} className="outline-none">
            <div className="relative w-full h-[100px] flex items-center justify-center bg-[#F9FAFA] group-hover:bg-[#f4f5f6]">
              <span className="absolute top-1 right-1 px-1 py-0.5 text-primary rounded-sm bg-white text-xs">
                {device.line && <span>{device.line?.name}</span>}
              </span>

              <DeviceImage device={device} />
            </div>

            <div className="p-2">
              <h3 className="text-black/85 text-sm h-10">
                {device.product.name}
              </h3>

              <p className="text-xs text-black/45">
                {device.shortnames.join(", ")}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
