import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import cn from "classnames";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newsletters",
  description: "Subscribe to our newsletter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(sourceSans3.className, inter.className, "antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
