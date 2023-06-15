import { builder } from '@builder.io/react';
// Be sure to import all of your components where you use <BuilderComponent /> so they are
// bundled and accessible
import '/builder-settings';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Navbar from "@/components/Navbar/Navbar";
builder.allowCustomFonts = false;

export default function App({ Component, pageProps, links }: any) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
