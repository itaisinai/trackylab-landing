import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrackyLab — AI-powered products",
  description: "TrackyLab builds focused AI-powered products for music and career workflows.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
