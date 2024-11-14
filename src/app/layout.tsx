import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ubiquiti Homework",
  description: "Built by Mārtiņš Barkovs (HappyTribe on GitHub)",
};

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
