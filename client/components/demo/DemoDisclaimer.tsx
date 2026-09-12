import { cn } from "@/lib/utils";

interface DemoDisclaimerProps {
  text: string;
  tone?: "light" | "dark";
}

export function DemoDisclaimer({ text, tone = "light" }: DemoDisclaimerProps) {
  return (
    <p
      className={cn(
        "mx-auto mt-2 max-w-lg px-2 text-center text-xs leading-relaxed",
        tone === "dark" ? "text-slate-400" : "text-ink-400",
      )}
    >
      {text}
    </p>
  );
}
