import { Syne } from "next/font/google";
import "./globals.css";
import "./style.css";

const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "Kakxshii",
  description: "Kakxshii",
  keywords: "Kakxshii",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body className={syne.className}>{children}</body>
    </html>
  );
}
