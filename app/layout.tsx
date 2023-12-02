import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yigition",
  description:
    "Created with a special hardwork to make better.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/logo2.svg",
        href: "/logo2.svg"
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/logo.svg",
        href: "/logo.svg"
      }
    ]
  }
};

function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="yigition-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
export default RootLayout;
