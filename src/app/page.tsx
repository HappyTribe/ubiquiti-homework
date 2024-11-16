import { Suspense } from "react";
import DevicesTable from "./components/DevicesTable";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <section className="px-8">
      <Header />

      <Suspense fallback={<div>LOADING</div>}>
        <DevicesTable />
      </Suspense>
    </section>
  );
}
