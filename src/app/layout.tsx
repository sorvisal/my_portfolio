import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { profile, socialLinks } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteTitle = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  applicationName: profile.brand,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: profile.brand,
    title: siteTitle,
    description: profile.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: profile.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fafafa",
};

// Only publish configured real profiles in structured data; skip TODO placeholders.
const realSocialUrls = socialLinks
  .map((link) => link.href)
  .filter((href) => !/your-username/i.test(href));

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.role,
  description: profile.summary,
  address: {
    "@type": "PostalAddress",
    addressCountry: profile.location,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.education.school,
  },
  knowsAbout: skillGroups.flatMap((group) => group.skills),
  ...(profile.email ? { email: profile.email } : {}),
  ...(realSocialUrls.length > 0 ? { sameAs: realSocialUrls } : {}),
};

const personJsonLdString = JSON.stringify(personJsonLd).replace(/</g, "\\u003c");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-control bg-accent px-4 py-2.5 text-sm font-medium text-white opacity-0 focus:translate-y-0 focus:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          Skip to content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: personJsonLdString }}
        />

        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
