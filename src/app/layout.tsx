// AUTH
import { ClerkProvider } from "@clerk/nextjs";

// NEXT
import type { Metadata } from "next";

// UI
import "@/components/css/globals.css";
import { cn } from "@/lib/utils";
import { secondary } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Tech Titans",
  description: "Powered by CESS-GNDU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(secondary.className)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
