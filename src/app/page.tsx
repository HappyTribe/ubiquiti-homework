import { Suspense } from "react";
import DeviceList from "./components/DeviceList";
import Header from "./components/Header";
import DeviceListLoadingSkeleton from "./components/DeviceListLoadingSkeleton";

export default async function DevicesPage(props: {
  searchParams: Promise<{ layout: "list" | "grid" }>;
}) {
  const { layout } = await props.searchParams;

  return (
    <>
      <Header />

      <Suspense fallback={<DeviceListLoadingSkeleton layout={layout} />}>
        <DeviceList layout={layout} />
      </Suspense>
    </>
  );
}
