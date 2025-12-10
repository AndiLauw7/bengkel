import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "ANG'S MOTOR",
//   description: "Ahlinya Performa Motor & Service Terpercaya di Tangerang.",
// };

export const metadata: Metadata = {
  title: "ANG'S MOTOR",
  icons: {
    icon: "./hero.jpeg",
  },
  description:
    "Ahlinya Performa Motor & Service Terpercaya di Tangerang. Spesialis servis dan upgrade performa motor injeksi/karbu.",

  openGraph: {
    title: "ANG'S MOTOR",
    description:
      "Ahlinya Performa Motor & Service Terpercaya di Tangerang. Spesialis servis dan upgrade performa motor injeksi/karbu.",
    url: "https://angs-motor-tangerang.netlify.app/",
    siteName: "ANG'S MOTOR",
    images: [
      {
        url: "https://angs-motor-tangerang.netlify.app/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "ANG'S MOTOR Official Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // Twitter Card
  // twitter: {
  //   card: "summary_large_image",
  //   title: "ANG'S MOTOR",
  //   description:
  //     "Ahlinya Performa Motor & Service Terpercaya di Tangerang. Spesialis servis dan upgrade performa motor injeksi/karbu.",
  //   images: ["https://angs-motor-tangerang.netlify.app/og-image.jpg"],
  // },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
