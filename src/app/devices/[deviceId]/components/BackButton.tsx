"use client";

import { useRouter } from "next/navigation";
import Button from "src/ui/Button";
import LeftArrowIcon from "src/ui/icons/LeftArrow";

export default function BackButton() {
  const router = useRouter();

  function onNavigateBack() {
    router.back();
  }

  return (
    <Button
      onClick={onNavigateBack}
      className="pr-3 border-[1px] border-[#EDEDF0]"
    >
      <LeftArrowIcon />

      <span>Back</span>
    </Button>
  );
}
