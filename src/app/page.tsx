import { Suspense } from "react";
import DeviceList from "./components/DeviceList";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <section className="px-8">
      <Header />

      <Suspense fallback={<div>LOADING</div>}>
        <DeviceList />
      </Suspense>
    </section>
  );
}
