import { getDevices } from "src/features/devices/queries";

export default async function DevicesTable() {
  const result = await getDevices();

  if (!result.success) {
    return <div>ERROR: {result.message}</div>;
  }

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
