// AUTH
import UserButton from "@/components/custom/auth/UserButton";

// NEXT
import Image from "next/image";
import Link from "next/link";

// UI
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { primary } from "@/lib/fonts";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="fixed z-10 flex w-screen items-center justify-center">
      <div className="m-2 flex w-full items-center justify-between space-x-4 rounded-lg border bg-background px-2 md:w-fit md:justify-center">
        <Image src="/assets/image.png" alt="logo" width={40} height={40} />
        <div className="hidden items-center md:flex">
          <Link className="navlink" href="/about">
            About
          </Link>
          <Link className="navlink" href="/events">
            Events
          </Link>
          <Link className="navlink" href="/blog">
            Blog
          </Link>
          <Link className="navlink" href="/faq">
            FAQ
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <UserButton />

          <Sheet>
            <SheetTrigger className="flex md:hidden">
              <Icon icon="streamline:horizontal-menu-circle" fontSize={24} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle
                  className={cn(
                    primary.className,
                    "text-left text-2xl font-light uppercase tracking-wide",
                  )}
                >
                  navigation
                </SheetTitle>
                <SheetDescription className="flex flex-col space-y-4 text-left">
                  <Link className="navlink" href="/about">
                    About
                  </Link>
                  <Link className="navlink" href="/events">
                    Events
                  </Link>
                  <Link className="navlink" href="/blog">
                    Blog
                  </Link>
                  <Link className="navlink" href="/faq">
                    FAQ
                  </Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
