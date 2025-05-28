import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "./globals.css";
import AppNavbar from "./component/AppNavbar";

const k2d = K2D({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "ระบบขายสินค้า COSCI Shop",
  description: "ขายสินค้าของนักศึกษาประจำปี 2568",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${k2d.className}`}>
        <AppNavbar />
        <hr />
        {children}
      </body>
    </html>
  );
}
