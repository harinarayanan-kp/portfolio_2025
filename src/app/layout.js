import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://hellohari.space"),
  title: "harixn - portfolio-2025",
  description: "Portfolio-2025 by Harinarayanan K P",
  keywords: [
    "portfolio",
    "web developer",
    "designer",
    "react",
    "nextjs",
    "Harinarayanan K P",
    "Harinarayanan K P portfolio",
  ],
  authors: [{ name: "Harinarayanan K P", url: "https://hellohari.space" }],
  creator: "Harinarayanan K P",
  openGraph: {
    title: "harixn | Portfolio-2025",
    description: "Portfolio-2025 by Harinarayanan K P",
    url: "https://hellohari.space",
    siteName: "harixn",
    images: [
      {
        url: "/banner.png",
        width: 800,
        height: 600,
        alt: "Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
