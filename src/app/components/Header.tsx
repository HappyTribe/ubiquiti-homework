export default function Header() {
  return (
    <div className="flex w-full items-center justify-between py-4">
      <div className="flex items-center gap-x-4">
        <div>INPUT</div>

        <div>RESULTS</div>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="flex">
          <div>L1</div>
          <div>L2</div>
        </div>

        <button className="p-2">FILTER</button>
      </div>
    </div>
  );
}
