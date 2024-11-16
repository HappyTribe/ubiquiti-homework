import { Suspense } from "react";
import DeviceList from "./components/DeviceList";
import Header from "./components/Header";

export default async function DevicesPage(props: {
  searchParams: Promise<{ layout: "list" | "grid" }>;
}) {
  const { layout } = await props.searchParams;

  return (
    <>
      <Header />

      <Suspense fallback={<div>LOADING</div>}>
        <DeviceList layout={layout} />
      </Suspense>
    </>
  );
}
