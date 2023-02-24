"use client";

import { manrope } from "@/app/fonts";
import Providers from "@/app/providers";
import { Grid, GridItem } from "@chakra-ui/react";
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
        <main>
          <Providers>
            <Grid
              h="100vh"
              alignItems="center"
              justifyContent="center"
              p={[7, 7]}
            >
              <GridItem>{children}</GridItem>
            </Grid>
          </Providers>
        </main>
      </body>
    </html>
  );
}
