import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers"; // Import the wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "My Awesome Application",
    template: "%s | My Awesome Application",
  },
  description:
    "A production-ready Next.js boilerplate optimized for SEO and performance.",
  keywords: ["Next.js", "React", "SEO Optimization", "Web Development"],
  authors: [{ name: "Your Name", url: "https://yourdomain.com" }],
  creator: "Your Company or Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "My Awesome Application",
    description:
      "A production-ready Next.js boilerplate optimized for SEO and performance.",
    siteName: "My Awesome Application",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Awesome Application Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Awesome Application",
    description:
      "A production-ready Next.js boilerplate optimized for SEO and performance.",
    images: ["/og-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
