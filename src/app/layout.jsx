import { Inter } from "next/font/google";
import "./globals.css";
import config from "@/data/config.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | " + config.app_name,
    default: config.app_name,
  },
  generator: "Portfolia",
  applicationName: "Portfolia",
  referrer: "origin-when-cross-origin",
  keywords: ["Portfolia", "CMS", "Portfolio", "Resume"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* flaticon */}
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.4.0/uicons-thin-straight/css/uicons-thin-straight.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.4.0/uicons-thin-rounded/css/uicons-thin-rounded.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.4.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.4.0/uicons-regular-straight/css/uicons-regular-straight.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.4.0/uicons-brands/css/uicons-brands.css"
        ></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
