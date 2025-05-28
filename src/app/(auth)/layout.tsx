import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "../globals.css";
import Navbar01Page from "@/components/navbar-01/navbar-01";
import Footer05Page from "@/components/footer-05/footer-05";

const k2d = K2D({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "ระบบขายสินค้า COSCI Shop",
  description: "ขายสินค้าของนักศึกษาประจำปี 2568",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${k2d.className}`}>
        {children}
      </body>
    </html>
  );
}
