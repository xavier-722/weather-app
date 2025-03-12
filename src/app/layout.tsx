import { MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "A real-time weather app using OpenWeather API",
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
          <MantineProvider>
            {children}
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}