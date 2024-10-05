import { primary } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface EventStatusProps {
  type?: "upcoming" | "ongoing" | "completed";
}

export default function EventStatus({ type }: EventStatusProps) {
  return (
    <div
      className={cn(
        type === "upcoming" &&
          "border-amber-300 bg-amber-400/10 text-amber-300",
        type === "completed" && "border-rose-400 bg-rose-500/10 text-rose-400",
        type === "ongoing" &&
          "border-emerald-400 bg-emerald-500/10 text-emerald-400",
        "w-fit rounded-xl border px-3 text-sm font-thin uppercase tracking-wide",
      )}
    >
      <span>{type}</span>
    </div>
  );
}
