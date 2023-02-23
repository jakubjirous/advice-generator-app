"use client";

import theme from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  ColorModeScript,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Manrope } from "@next/font/google";
import React from "react";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme} resetCSS>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Grid
              h="100vh"
              alignItems="center"
              justifyContent="center"
              p={{
                base: 7,
                sm: 7,
              }}
            >
              <GridItem>{children}</GridItem>
            </Grid>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
