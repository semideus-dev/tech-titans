// NEXT
import type { Metadata } from "next";

// UI
import Navbar from "@/components/custom/navigation/Navbar";

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
    <main>
      <Navbar />
      {children}
    </main>
  );
}
