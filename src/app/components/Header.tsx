"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "../../ui/Button";
import ListViewIcon from "../../ui/icons/ListView";
import GridViewIcon from "../../ui/icons/GridView";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function onClickLayout(variant: "list" | "grid") {
    return () => {
      router.push(`${pathname}?layout=${variant}`);
    };
  }

  return (
    <div className="flex w-full items-center justify-between py-4">
      <div className="flex items-center gap-x-2 ml-auto">
        <Button
          variant="icon"
          onClick={onClickLayout("list")}
          data-active={searchParams.get("layout") === "list" ? true : undefined}
        >
          <ListViewIcon />
        </Button>

        <Button
          variant="icon"
          onClick={onClickLayout("grid")}
          data-active={searchParams.get("layout") !== "list" ? true : undefined}
        >
          <GridViewIcon />
        </Button>
      </div>
    </div>
  );
}
