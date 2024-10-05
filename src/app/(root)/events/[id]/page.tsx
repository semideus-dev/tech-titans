// ACTIONS
import { getEventById } from "@/lib/actions/event.actions";

// MODELS
import { IEvent } from "@/lib/db/models/event.model";

// NEXT
import Image from "next/image";

// TYPES
import { SearchParamProps } from "@/types";

// UI
import EventStatus from "@/components/custom/EventStatus";
import { cn, formatDateTime } from "@/lib/utils";
import { primary } from "@/lib/fonts";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export default async function EventDetails({
  params: { id },
}: SearchParamProps) {
  const event: IEvent = await getEventById(id);
  return (
    <section className="flex w-full flex-col items-center justify-center pt-24">
      <div className="my-10 grid w-[90%] grid-cols-1 gap-4 rounded-md border border-t-primary md:h-[400px] md:grid-cols-2">
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={400}
          height={400}
          className="absolute -z-10 hidden h-[400px] w-[90%] rounded-md opacity-10 grayscale-0 md:flex"
        />
        <div className="flex flex-col items-center p-4 md:items-start md:justify-between">
          <div className="space-y-4">
            {/* EVENT TITLE */}
            <h1
              className={cn(
                primary.className,
                "text-start text-4xl font-thin uppercase tracking-tight text-secondary",
              )}
            >
              {event.title}
            </h1>

            <div className="flex items-center space-x-2 font-semibold">
              {/* EVENT PRICE */}
              <div className="flex items-center rounded-xl border-primary bg-primary/10 px-3 text-primary">
                <Icon icon="lucide:indian-rupee" />
                <span>{event.price}</span>
              </div>

              {/* EVENT CATEGORY */}
              <div className="flex items-center rounded-xl bg-border/50 px-3 text-muted-foreground">
                <span>{event.category.name}</span>
              </div>

              {/* EVENT SPONSER */}
              <div className="font-normal text-muted-foreground">
                sponsered by{" "}
                <span className="font-semibold italic text-secondary underline underline-offset-2">
                  {event.sponser}
                </span>
              </div>
            </div>
            <br />
            {/* EVENT LOCATION */}
            <div className="flex items-center space-x-2 text-lg">
              <Icon icon="mdi:map-marker" />
              <span>{event.eventLocation}</span>
            </div>

            {/* EVENT DATETIME */}
            <div className="flex items-center space-x-2 text-lg">
              <Icon icon="mdi:calendar-clock" />
              <span>
                {formatDateTime(event.startDateTime).dateOnly} (
                {formatDateTime(event.startDateTime).timeOnly}) -{" "}
                {formatDateTime(event.endDateTime).dateOnly} (
                {formatDateTime(event.endDateTime).timeOnly})
              </span>
            </div>
          </div>
          <br />
          <Button size="lg">Get Ticket</Button>
        </div>
        <div className="flex flex-col items-center justify-center p-4 text-muted-foreground">
          <p className="my-4 text-justify leading-relaxed text-white">
            {event.description}
          </p>
          <div className="flex w-full justify-end">
            <EventStatus type="upcoming" />
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}
