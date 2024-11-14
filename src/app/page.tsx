import DevicesTable from "./components/DevicesTable";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className="px-8">
        <Header />

        <DevicesTable />
      </div>
    </>
  );
}
