// NEXT
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Titans - Auth",
  description: "Powered by CESS-GNDU",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen items-center justify-center">{children}</div>
  );
}
