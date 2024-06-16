import { Inter } from "next/font/google";
import "./globals.css";
import config from "@/data/config.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | " + config.app_name,
    default: config.app_name,
  },
  canonical: process.env.NEXT_PUBLIC_BASE_UR,
  generator: "Next.js",
  applicationName: "Portfolia",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Portfolia",
    "CMS",
    "Portfolio",
    "Resume",
    "No code portfolio and resume creator",
    "Wordpress",
    "Bubble",
  ],
  authors: [
    { name: "Okeke Divine-Vessel", url: "https://twitter.com/okekedivine__" },
  ],
  creator: "Okeke Divine-Vessel",
  publisher: "Okeke Divine-Vessel",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons: {
  //   icon: '/icon.png',
  //   shortcut: '/shortcut-icon.png',
  //   apple: '/apple-icon.png',
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/apple-touch-icon-precomposed.png',
  //   },
  // },
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
