import { GripVerticalIcon } from "lucide-react";
import { Button } from "@/components";

// Poise: Pluely required a paid license to drag the overlay. Removed.
export const DragButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`-ml-[2px] w-fit`}
      data-tauri-drag-region
    >
      <GripVerticalIcon className="h-4 w-4" />
    </Button>
  );
};
