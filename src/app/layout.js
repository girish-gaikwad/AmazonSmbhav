// /src/app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import LayoutWrapper from "./components/LayoutWrapper.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GlobalXport",
  description:
    "A user-friendly interface for exporting data from the GlobalXplort platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}