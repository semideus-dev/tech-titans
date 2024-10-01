// NEXT
import Link from "next/link";

// UI
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  UserButton as CoreUserButton,
} from "@clerk/nextjs";

export default function UserButton() {
  return (
    <>
      <SignedIn>
        <CoreUserButton
          appearance={{
            variables: {
              colorBackground: "#08090A",
              colorText: "white",
              colorNeutral: "#f4f4f5",
            },
          }}
          userProfileProps={{
            appearance: {
              variables: {
                colorBackground: "#08090A",
                colorNeutral: "#f4f4f5",
                colorText: "#f4f4f5",
                colorInputBackground: "#1d1d1d",
                colorPrimary: "#22d3ee",
                colorTextOnPrimaryBackground: "#09090b",
                colorInputText: "#f4f4f5",
              },
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <Button variant="muted" className="space-x-3" size="sm">
            <span>Sign In</span>
            <Icon icon="lets-icons:sign-in-circle" />
          </Button>
        </Link>
      </SignedOut>
    </>
  );
}
