import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import CaptureProtection from "@/components/CaptureProtection";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sharathkancherla.com"),
  title: "Sharath Chandra Kancherla | Healing, Wisdom & Holistic Wellness",
  description:
    "Explore 1-on-1 sessions and workshops in CranioSacral Therapy, Rakkenho, Music Therapy, Vedic Astrology, and NLP by Sharath Chandra Kancherla.",
  icons: {
    icon: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
  openGraph: {
    title: "Sharath Chandra Kancherla | Holistic Well-being & Healing",
    description:
      "Transformative sessions in CST, Rakkenho, Music Therapy, Vedic Astrology, and NLP.",
    images: ["/images/profile-hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${poppinsFont.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem("hasSeenIntro") !== "true") {
                  document.documentElement.classList.add("intro-active");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <CaptureProtection />
        {children}
      </body>
    </html>
  );
}
