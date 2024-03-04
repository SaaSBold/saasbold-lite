"use client";
import "../../styles/globals.css";
import "../../styles/satoshi.css";
import "../../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";
import Loader from "@/components/Common/PreLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Providers>
            <NextTopLoader
              color="#635BFF"
              crawlSpeed={300}
              showSpinner={false}
              shadow="none"
            />
            <Header />
            {children}
            <Footer />
          </Providers>
        </>
      )}
    </>
  );
}
