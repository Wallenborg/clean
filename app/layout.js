import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clean",
  description:
    "CLEAN is an innovative app designed to help you track your sobriety time through a visually experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192x192.png" sizes="192x192" />
        <link rel="icon" href="/icons/icon-512x512.png" sizes="512x512" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
