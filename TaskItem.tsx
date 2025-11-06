import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ id, text, completed, onToggle, onDelete }: TaskItemProps) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-card rounded border border-border mb-2">
      <Checkbox
        id={id}
        checked={completed}
        onCheckedChange={() => onToggle(id)}
        className="h-4 w-4"
      />
      <label
        htmlFor={id}
        className={cn(
          "flex-1 text-sm cursor-pointer select-none",
          completed && "line-through text-muted-foreground"
        )}
      >
        {text}
      </label>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(id)}
        className="h-8 w-8 p-0 text-destructive hover:bg-destructive/10"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
