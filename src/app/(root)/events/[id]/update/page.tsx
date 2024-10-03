// AUTH
import { auth } from "@clerk/nextjs/server";

// UI
import { cn } from "@/lib/utils";
import { primary } from "@/lib/fonts";

// FORMS
import EventForm from "@/components/custom/forms/EventForm";

export default function Update() {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h1
        className={cn(
          primary.className,
          "mt-24 text-4xl font-thin uppercase tracking-tight",
        )}
      >
        <span className="mr-2 text-primary">update</span> event
      </h1>
      <br />
      <EventForm userId={userId} type="Create" />
    </section>
  );
}
