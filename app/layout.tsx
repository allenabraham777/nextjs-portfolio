import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Allen K Abraham",
  description:
    "I'm a fullstack developer with a wide range of experience in javascript and related technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
