import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.synodhospital.org'),
  title: {
    default: "Synod Hospital, Durtlang | Presbyterian Church of Mizoram",
    template: "%s | Synod Hospital, Durtlang",
  },
  description: "Synod Hospital is a multispeciality secondary hospital located in Durtlang, Aizawl, Mizoram. Run by the Presbyterian Church of Mizoram since 1928, we provide quality medical care at affordable rates with focus on the poor and needy.",
  keywords: ["Synod Hospital", "Durtlang", "Aizawl", "Mizoram", "Presbyterian Church", "hospital", "medical care", "healthcare", "mission hospital", "College of Nursing"],
  authors: [{ name: "Synod Hospital, Durtlang" }],
  creator: "Presbyterian Church of Mizoram",
  publisher: "Synod Hospital",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.synodhospital.org",
    siteName: "Synod Hospital, Durtlang",
    title: "Synod Hospital, Durtlang | Presbyterian Church of Mizoram",
    description: "Synod Hospital is a multispeciality secondary hospital located in Durtlang, Aizawl, Mizoram. Run by the Presbyterian Church of Mizoram since 1928, we provide quality medical care at affordable rates.",
    images: [
      {
        url: "/images/synod-hospital-durtlang-casualty-facade.jpg",
        width: 1200,
        height: 630,
        alt: "Synod Hospital, Durtlang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synod Hospital, Durtlang | Presbyterian Church of Mizoram",
    description: "Multispeciality secondary hospital in Durtlang, Aizawl, Mizoram. Quality medical care at affordable rates since 1928.",
    images: ["/images/synod-hospital-durtlang-casualty-facade.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.synodhospital.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${lora.variable}`}>
        <Header />
        <main role="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              "name": "Synod Hospital, Durtlang",
              "alternateName": "Presbyterian Hospital Durtlang",
              "url": "https://www.synodhospital.org",
              "logo": "https://www.synodhospital.org/images/synod-hospital-durtlang-mizoram.png",
              "image": "https://www.synodhospital.org/images/synod-hospital-durtlang-casualty-facade.jpg",
              "description": "Synod Hospital is a multispeciality secondary hospital located in Durtlang, Aizawl, Mizoram. Run by the Presbyterian Church of Mizoram since 1928.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Durtlang",
                "addressLocality": "Aizawl",
                "addressRegion": "Mizoram",
                "postalCode": "796015",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.7667",
                "longitude": "92.7333"
              },
              "telephone": "+91-389-2361122",
              "email": "synodhospital@gmail.com",
              "foundingDate": "1928",
              "founder": {
                "@type": "Organization",
                "name": "Presbyterian Church of Mizoram"
              },
              "medicalSpecialty": [
                "Anesthesiology",
                "Ophthalmology",
                "Otolaryngology",
                "General Surgery",
                "Orthopedics",
                "Obstetrics and Gynecology",
                "Pediatrics",
                "Internal Medicine",
                "Radiology",
                "Pathology"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "13:00",
                  "description": "OPD Registration"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59",
                  "description": "Emergency Services - 24x7"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
