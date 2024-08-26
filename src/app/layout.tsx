import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import StoreProvider from "./storeProvider";
import { cookies } from "next/headers";
import Navbar from "./components/Navbar/navbarUnLogin";
import NavbarLogin from "./components/Navbar/navbarLogin";
import Router from "./router";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogin=cookies().get("isLogin");

  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          {typeof isLogin=="undefined"?<Navbar/>:<NavbarLogin/>}
          <Router></Router>
        </StoreProvider>
      </body>
    </html>
  );
}
