import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { MotionContext } from "@/components/shared/MotionContext";
import { PageTransition } from "@/components/shared/PageTransition";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alisson Camargo | Portfólio",
  description:
    "Desenvolvedor Full Stack e UI/UX Designer. Portfólio de Alisson Camargo Santos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={quicksand.variable}>
      <body className="antialiased">
        <MotionContext>
          <PageTransition>{children}</PageTransition>
        </MotionContext>
      </body>
    </html>
  );
}
