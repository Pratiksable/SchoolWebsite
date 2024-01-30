import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Inter } from "next/font/google";

// Add the Font Awesome icons to the library
library.add(fas);
library.add(fab);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GOVERNMENT PU COLLEGE,RAJANUKUNTE",
  description:
    "Welcome to GOVERNMENT PU COLLEGE located in RAJANUKUNTE, BENGALORE.",

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
