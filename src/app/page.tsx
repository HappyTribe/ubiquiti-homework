import { Suspense } from "react";
import DeviceList from "./components/DeviceList";
import Header from "./components/Header";

export default async function HomePage(props: {
  searchParams: Promise<{ layout: "list" | "grid" }>;
}) {
  const { layout } = await props.searchParams;

  return (
    <section className="px-8">
      <Header />

      <Suspense fallback={<div>LOADING</div>}>
        <DeviceList layout={layout} />
      </Suspense>
    </section>
  );
}
