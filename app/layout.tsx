import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jin Hao — Digital Marketing & AI",
  description: "Portfolio of Jin Hao, Senior Digital & Performance Marketing Manager.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
