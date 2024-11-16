import Button from "src/ui/Button";
import LeftArrowIcon from "src/ui/icons/LeftArrow";

export default function PaginationButtons() {
  return (
    <div className="flex gap-x-2">
      <Button variant="icon">
        <LeftArrowIcon />
      </Button>

      <Button variant="icon">
        <LeftArrowIcon className="rotate-180" />
      </Button>
    </div>
  );
}
