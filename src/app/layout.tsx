import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
      <body>
        <Navbar />

        <section className="px-8 relative flex flex-col">
          {props.children}
        </section>
      </body>
    </html>
  );
}
