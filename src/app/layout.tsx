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
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  title: {
    default: SITE_NAME,
    template: "%s | Fountain of Hope",
  },
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
    "gender-based violence",
    "girls education",
    "community resilience",
  ],
  authors: [{ name: "Fountain of Hope" }],
  creator: "Fountain of Hope",
  publisher: "Fountain of Hope",
  icons: {
    icon: "/fohlogo.png",
    shortcut: "/fohlogo.png",
    apple: "/fohlogo.png",
  },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_KE",
    ...(SITE_URL ? { url: SITE_URL } : {}),
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
                  "@id": SITE_URL ? `${SITE_URL}/#organization` : "/#organization",
                  name: "Fountain of Hope",
                  alternateName: "Fountain of Hope Garissa",
                  url: SITE_URL || undefined,
                  logo: {
                    "@type": "ImageObject",
                    url: logoUrl,
                  },
                  sameAs: ["https://x.com/Fountain_FOH"],
                  foundingDate: "2017",
                  areaServed: [
                    { "@type": "City", name: "Garissa" },
                    { "@type": "AdministrativeArea", name: "Garissa County" },
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Garissa",
                    addressRegion: "Garissa County",
                    addressCountry: "KE",
                  },
                  email: "cflgarissa007@gmail.com",
                  telephone: "+254 742 789 903",
                  description: SITE_BLURB,
                },
                {
                  "@type": "WebSite",
                  "@id": SITE_URL ? `${SITE_URL}/#website` : "/#website",
                  url: SITE_URL || undefined,
                  name: SITE_NAME,
                  description: SITE_BLURB,
                  publisher: { "@id": SITE_URL ? `${SITE_URL}/#organization` : "/#organization" },
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