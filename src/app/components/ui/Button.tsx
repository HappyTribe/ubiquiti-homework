import { Slot } from "@radix-ui/react-slot";
import clsn from "src/utils/clsn";

export default function Button({
  asChild,
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsn(
        "flex items-center justify-center hover:bg-[#f4f5f6] outline-none focus:ring-1 focus:ring-primary data-[active]:bg-[#f4f5f6] text-[#838691] data-[active]:text-primary rounded-md text-sm px-1 py-0.5",
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
