import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import {
  CANONICAL_ORIGIN,
  SITE_NAME,
  SITE_BLURB,
  logoUrl,
} from "@/lib/seo";
import { ORG_KEYWORDS } from "@/lib/organization";
import { SITE_SCHEMA } from "@/lib/schema";
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
  metadataBase: new URL(CANONICAL_ORIGIN),
  title: {
    default: SITE_NAME,
    template: "%s | Fountain of Hope",
  },
  description: SITE_BLURB,
  keywords: ORG_KEYWORDS,
  category: "nonprofit",
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
    url: CANONICAL_ORIGIN,
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
        {/*
          JSON-LD is rendered with a native <script> tag as recommended by the
          Next.js App Router docs. Crawlers read it wherever it appears in the
          document; keeping it first in <body> makes it available immediately.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SITE_SCHEMA).replace(/</g, "\\u003c"),
          }}
        />
        <div className="grain" aria-hidden="true" />
        <SupportModalProvider>{children}</SupportModalProvider>
      </body>
    </html>
  );
}