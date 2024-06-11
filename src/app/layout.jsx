import { Inter } from "next/font/google";
import "./globals.css";
import config from "@/data/config.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | " + config.app_name,
    default: config.app_name,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
