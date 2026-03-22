import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "HuntWell Advisory Group",
    template: "%s | HuntWell Advisory Group",
  },
  description:
    "HuntWell Advisory Group is a strategic consulting firm in Belgrade focused on labor market intelligence, executive and critical role advisory, talent mapping, and employer branding.",
  keywords: [
    "HuntWell Advisory Group",
    "HuntWell",
    "Hunt Well Advisory Group",
    "huntwell advisory",
    "huntwell.rs",
    "POSAO",
    "OGLAS",
    "OGLAS ZA POSAO",
    "konsalting zapošljavanje",
    "ljudski resursi",
    "konsalting agencija",
    "problemi u zapošljavanju",
    "nema prijava za posao",
    "zašto nemamo prijave za posao",
    "zašto kandidati nisu zainteresovani",
    "kako rešiti probleme sa zapošljavanjem",
    "problemi u kompaniji",
    "ljudi odlaze iz firme",
    "JOB",
    "JOB AD",
    "hiring",
    "consulting",
    "consulting agency",
    "hr agency",
    "human resources",
    "career",
    "job opportunities",
    "no applicants for job positions",
    "hiring problems in companies",
    "company invisible to candidates",
    "HR",
    "strategic consulting",
    "labor market intelligence",
    "talent identification",
    "executive search advisory",
    "critical role advisory",
    "employer branding",
    "talent market intelligence",
    "leadership potential assessment",
    "Belgrade consulting",
  ],
  metadataBase: new URL("https://huntwell.rs"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "HuntWell Advisory Group",
    description:
      "Strategic consulting in labor market intelligence, executive and critical role advisory, and employer branding.",
    url: "https://huntwell.rs",
    siteName: "HuntWell Advisory Group",
    type: "website",
    locale: "en_RS",
    images: [
      {
        url: "/hw_advisory_group_blue_logo.png",
        width: 1200,
        height: 630,
        alt: "HuntWell Advisory Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HuntWell Advisory Group",
    description:
      "Strategic consulting in labor market intelligence, executive and critical role advisory, and employer branding.",
    images: ["/hw_advisory_group_blue_logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HuntWell Advisory Group",
    url: "https://huntwell.rs",
    logo: "https://huntwell.rs/hw_advisory_group_blue_logo.png",
    email: "contact@huntwell.rs",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Belgrade",
      addressCountry: "RS",
    },
    sameAs: [
      "https://www.instagram.com/huntwell.group?igsh=MW1kYWk5cm9mNmpkMg%3D%3D&utm_source=qr",
      "https://www.linkedin.com/company/huntwell-advisory-group/?viewAsMember=true",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
