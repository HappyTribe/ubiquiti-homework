import { getDevices } from "src/features/devices/queries";

export default async function DevicesTable() {
  const result = await getDevices();

  if (!result.success) {
    return <div>ERROR: {result.message}</div>;
  }

  return (
    <ul>
      {result.data.map((device) => (
        <li key={device.id}>{device.product.name}</li>
      ))}
    </ul>
  );
}
