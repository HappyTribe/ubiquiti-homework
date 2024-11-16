export default function DeviceListLoadingSkeleton(props: {
  layout: "list" | "grid";
}) {
  if (props.layout === "list") {
    return (
      <ul className="divide-y-[1px] divide-neutral-100">
        <li className="flex w-full">
          <div className="w-8 h-8" />

          <div className="flex-1 px-2 py-1">
            <span className="text-sm font-bold text-black/85">
              Product Line
            </span>
          </div>

          <div className="flex-1 px-2 py-1">
            <span className="text-sm font-bold text-black/85">Name</span>
          </div>
        </li>

        {[...Array(100)]
          .map((x, i) => i)
          .map((item) => (
            <li
              key={item}
              className="flex w-full items-center outline-none rounded-md animate-pulse"
            >
              <div className="flex items-center justify-center w-8 h-8">
                <div className="flex items-center justify-center w-7 h-7 bg-[#F9FAFA] rounded-md" />
              </div>

              <div className="flex flex-1 px-2 py-1 items-center">
                <span className="w-[300px] h-4 bg-[#F9FAFA] rounded-sm" />
              </div>

              <div className="flex flex-1 px-2 py-1 items-center">
                <span className="w-[300px] h-4 bg-[#F9FAFA] rounded-sm" />
              </div>
            </li>
          ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-wrap gap-4">
      {[...Array(100)]
        .map((x, i) => i)
        .map((item) => (
          <li
            key={item}
            className="flex-grow w-[200px] min-h-10 border-[1px] border-solid border-[#EDEDF0] rounded-lg overflow-hidden bg-white"
          >
            <div className="relative w-full h-[100px] flex items-center justify-center bg-[#F9FAFA]" />

            <div className="p-2">
              <h3 className="text-black/85 text-sm h-10">
                <span className="block w-3/4 h-5 bg-[#F9FAFA]" />
              </h3>

              <p className="text-xs text-black/45">
                <span className="block w-3/4 h-5 bg-[#F9FAFA]" />
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
}
