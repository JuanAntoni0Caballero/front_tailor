import { AppProps } from "next/app";
import "./globals.css";
import Layout from "./layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
