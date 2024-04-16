import type { Metadata } from "next";
import { AuthProvider } from "@/context/authContext";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Prueba técnica Tailor-Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <main className={inter.className}>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
