import { cn } from "@/lib/cn";
import Navbar from "@/components/Navbar";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div
        className={cn(
          "rounded-xl p-6 transition-colors",
          "bg-white text-black dark:bg-gray-900 dark:text-white",
        )}
      >
        This is a dark-mode-aware card!
      </div>
    </div>
  );
}
