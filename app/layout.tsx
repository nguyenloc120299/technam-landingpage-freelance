import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import MainLayout from "@/layout/MainLayout";




export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


const lato = localFont({
  src: [
    {
      path: '../public/fonts/sf-compact/SF-Compact-Display-Semibold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/sf-compact/SF-Compact-Display-Bold.ttf',
      weight: '600'
    },
    {
      path: '../public/fonts/sf-compact/SF-Compact-Display-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/sf-compact/SF-Compact-Display-Regular.ttf',
      weight: '400'
    },
  ],
  variable: '--font-lato'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.variable}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
