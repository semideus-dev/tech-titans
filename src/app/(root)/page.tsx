// UI
import { cn } from "@/lib/utils";
import { Hero } from "@/components/custom/Hero";
import { primary } from "@/lib/fonts";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Hero className="flex w-full flex-col items-center justify-center px-4">
        <h2
          className={cn(
            primary.className,
            "relative z-20 py-2 text-center text-4xl font-thin uppercase tracking-tight md:py-10 lg:text-7xl",
          )}
        >
          Tech <br /> Titans
        </h2>
        <p className="mx-auto max-w-xl text-center text-sm text-neutral-400 md:text-lg">
          Innovate, Collaborate, and Shape the Future of Tech Together!
        </p>
      </Hero>
    </div>
  );
}
