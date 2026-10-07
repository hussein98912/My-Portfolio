import type { Metadata } from "next";

import "./globals.css";
import "../components/About.css";
import "../components/navbar.css";

export const metadata: Metadata = {
  title: "Hussein Salman — Backend & AI Developer",
  description:
    "Portfolio of Hussein Salman, a Backend & AI Developer building backend systems, AI applications, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-background" />
        {children}
      </body>
    </html>
  );
}