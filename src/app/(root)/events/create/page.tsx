// AUTH
import { auth } from "@clerk/nextjs/server";

// UI
import { cn } from "@/lib/utils";
import { primary } from "@/lib/fonts";

// FORMS
import EventForm from "@/components/custom/forms/EventForm";

export default function CreateEvent() {
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
        <span className="mr-2 text-primary">create</span> event
      </h1>
      <span className="m-4 text-justify text-neutral-400">
        Create an event by filling in essential details like title, date,
        location, and description.
      </span>
      <br />
      <EventForm userId={userId} type="Create" />
    </section>
  );
}
