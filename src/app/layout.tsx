import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import "./loading.css";
import { ThemeProviderContext } from "@/lib/themeProviderContext";
import { Suspense } from "react";
import Loading from "./loading";
import { SITE } from "@/lib/seo.config";
import Layouts from "@/components/layouts";
import JsonLd, { websiteSchema } from "@/components/elements/JsonLd";

const geistSans = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s • ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.name,
    description: SITE.description,
    locale: SITE.locale,
    siteName: SITE.name,
    images: [{ url: SITE.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE.twitterHandle,
    site: SITE.twitterHandle,
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: {
    icon: SITE.favicon,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${inter.variable} antialiased`}>
        <ThemeProviderContext
          defaultTheme="dark"
          enableSystem
          attribute={"class"}
        >
          <Layouts>
            <Suspense fallback={<Loading />}>
              <JsonLd data={websiteSchema()} />
              {children}
            </Suspense>
          </Layouts>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
