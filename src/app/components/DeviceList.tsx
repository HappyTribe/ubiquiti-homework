import { getDevices } from "src/features/devices/queries";

export default async function DeviceList(props: { layout: "list" | "grid" }) {
  const result = await getDevices();

  if (!result.success) {
    return <div>ERROR: {result.message}</div>;
  }

  if (props.layout === "list") {
    return (
      <table className="w-full text-left">
        <thead>
          <tr>
            <th />
            <th className="text-sm font-bold px-2 py-1">Product Line</th>
            <th className="text-sm font-bold px-2 py-1">Product Name</th>
          </tr>
        </thead>

        <tbody>
          {result.data.map((device) => (
            <tr
              key={device.id}
              className="border-t-2 border-solid border-neutral-100"
            >
              <td className="px-2 py-1">
                {/* {device.images?.default && (
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
                )} */}
                <div className="w-7 h-7 bg-neutral-100 rounded-md" />
              </td>

              <td className="px-2 py-1">{device.line?.name}</td>
              <td className="px-2 py-1">{device.product.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <ul className="flex flex-wrap gap-4">
      {result.data.map((device) => (
        <li
          key={device.id}
          className="flex-grow w-[200px] min-h-10 border-[1px] border-solid border-[#EDEDF0] rounded-lg"
        >
          <div className="relative bg-[#F9FAFA] w-full h-[100px] flex items-center justify-center">
            <span className="absolute top-1 right-1 px-1 py-0.5 text-primary rounded-sm bg-white text-xs">
              {device.line && <span>{device.line?.name}</span>}
            </span>

            <div>IMAGE</div>
          </div>

          <div className="p-2">
            <h3 className="text-black/85 text-sm h-10">
              {device.product.name}
            </h3>

            <p className="text-xs text-black/45">U6-Enterprise</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
