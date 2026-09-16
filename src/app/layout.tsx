import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import {
  SITE_URL,
  SITE_NAME,
  SITE_BLURB,
  logoUrl,
} from "@/lib/seo";
import { SupportModalProvider } from "@/components/support-modal";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_BLURB,
  keywords: [
    "Fountain of Hope",
    "Garissa",
    "Garissa County",
    "Kenya",
    "maternal health",
    "menstrual health",
    "women's health",
    "Okoa Mama na Mtoto",
    "community organization",
    "Sanitary towels",
    "health champions",
  ],
  icons: {
    icon: "/fohlogo.png",
    shortcut: "/fohlogo.png",
    apple: "/fohlogo.png",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_KE",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_BLURB,
    images: [{ url: logoUrl }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_BLURB,
    images: [logoUrl],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <div className="grain" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "Fountain of Hope",
                  url: SITE_URL,
                  logo: logoUrl,
                  sameAs: ["https://x.com/Fountain_FOH"],
                  foundingDate: "2017",
                  areaServed: { "@type": "City", name: "Garissa" },
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: SITE_NAME,
                  publisher: { "@id": `${SITE_URL}/#organization` },
                  inLanguage: "en-KE",
                },
              ],
            }),
          }}
        />
        <SupportModalProvider>{children}</SupportModalProvider>
      </body>
    </html>
  );
}