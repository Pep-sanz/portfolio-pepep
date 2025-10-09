import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./loading.css";
import { ThemeProviderContext } from "@/lib/themeProviderContext";
import { Suspense } from "react";
import Loading from "./loading";
import { SITE } from "@/lib/seo.config";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900", "500", "300"], // Sesuaikan dengan kebutuhan
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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${roboto.className} antialiased`}>
        {/* <NextTopLoader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        /> */}
        <ThemeProviderContext
          defaultTheme="dark"
          enableSystem
          attribute={"class"}
        >
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
