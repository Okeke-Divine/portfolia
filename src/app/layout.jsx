import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import config from "@/data/config.json";

const application_font = Bricolage_Grotesque({ subsets: ["latin"], weight: '600' });

const description = "";
const banner_url = "";

export const metadata = {
  title: {
    template: "%s | " + config.app_name,
    default: config.app_name,
  },
  description: description,
  canonical: process.env.NEXT_PUBLIC_BASE_UR,
  generator: "Next.js",
  applicationName: config.app_name,
  referrer: "origin-when-cross-origin",
  keywords: [
    config.app_name,
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
  creator: "Okeke Divine-Vessel, Programmer and CEO",
  publisher: "Okeke Divine-Vessel, Programmer and CEO",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  images: ["/images/logo/logo.png"],
  icons: {
    icon: '/images/logo/logo.png',
  },
  openGraph: {
    images: [banner_url],
  },
  twitter: {
    card: "summary_large_image",
    title: config.app_name,
    description: description,
    creator: "@okekedivine__",
    images: {
      url: banner_url,
    },
  },
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
      <body className={application_font.className}>{children}</body>
    </html>
  );
}
