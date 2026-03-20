import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "HuntWell - Advisory Group",
  description:
    "HuntWell Advisory Group is a strategic consulting firm specializing in labor market intelligence, critical talent identification, employer branding, and advisory services for organizations seeking stronger market positioning and high-impact business decisions.",
  keywords: [
    "HuntWell Advisory Group",
    "strategic consulting",
    "labor market intelligence",
    "talent identification",
    "critical talent",
    "employer branding",
    "market positioning",
    "HR advisory",
    "business advisory",
  ],
  metadataBase: new URL("https://huntwell.rs"),
  openGraph: {
    title: "HuntWell - Advisory Group",
    description:
      "Strategic consulting in labor market intelligence, critical talent identification, employer branding, and high-impact advisory services.",
    url: "https://huntwell.rs",
    siteName: "HuntWell Advisory Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HuntWell - Advisory Group",
    description:
      "Strategic consulting in labor market intelligence, critical talent identification, employer branding, and high-impact advisory services.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
