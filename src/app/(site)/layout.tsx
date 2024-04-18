import "../../styles/globals.css";
import "../../styles/satoshi.css";
import "../../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import Loader from "@/components/Common/PreLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Loader />

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
  );
}
