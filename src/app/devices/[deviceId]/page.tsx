import { getDeviceById } from "src/features/devices/queries";

export default async function DevicePage(props: {
  params: Promise<{ deviceId: string }>;
}) {
  const { deviceId } = await props.params;

  const device = await getDeviceById({ id: deviceId });

  if (!device) {
    return <div>NO DEVICE FOUND</div>;
  }

  return <div>DevicePage {deviceId}</div>;
}
