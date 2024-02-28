import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'V-Agent Dashboard',
  description: 'V-Agent',
};
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
