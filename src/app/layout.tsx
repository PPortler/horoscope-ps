import { Prompt } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Horoscope",
  description: "Horoscope app built with Next.js 13 and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className={`${prompt.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
