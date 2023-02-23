"use client";

import { manrope } from "@/app/fonts";
import theme from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  ColorModeScript,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";

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
