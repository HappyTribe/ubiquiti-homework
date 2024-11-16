import { getDeviceById } from "src/features/devices/queries";
import DescriptionListItem from "./components/DescriptionListItem";
import Button from "src/app/components/ui/Button";
import Link from "next/link";

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
      <div className="w-full h-16 flex items-center">
        <Button asChild>
          <Link href="/">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 16C12.367 16 12.235 15.947 12.136 15.843L7.287 10.701C7.102 10.513 7 10.264 7 9.99998C7 9.73598 7.102 9.48698 7.287 9.29898L12.136 4.15697C12.325 3.95597 12.642 3.94697 12.843 4.13597C13.044 4.32597 13.053 4.64197 12.864 4.84297L8 9.99998L8.01 10.01L12.864 15.156C13.053 15.357 13.044 15.673 12.843 15.863C12.746 15.955 12.623 16 12.5 16Z"
                fill="currentColor"
              />
            </svg>

            <span>Back</span>
          </Link>
        </Button>
      </div>

      <div className="flex gap-x-8 self-center w-full max-w-[768px] mt-4">
        <div className="bg-[#F9FAFA] aspect-square w-full max-w-[292px] flex items-center justify-center">
          IMG
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
              title="Short Name"
              value={device.shortnames.join(", ")}
            />
          </dl>
        </div>
      </div>

      <Button className="self-center text-primary mt-4">
        See All Details as JSON
      </Button>
    </>
  );
}
