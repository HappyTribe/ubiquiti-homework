export default function IconButton({
  icon,
  ...rest
}: {
  icon: React.ReactNode;
  onClick: VoidFunction;
}) {
  return (
    <button
      className="w-8 h-8 flex items-center justify-center hover:bg-[#f4f5f6] focus:ring-1 focus:ring-primary data-[active]:bg-[#f4f5f6] text-[#838691] data-[active]:text-primary rounded-md"
      {...rest}
    >
      {icon}
    </button>
  );
}
