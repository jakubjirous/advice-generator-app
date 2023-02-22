"use client";

import theme from '@/theme';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript, } from '@chakra-ui/react';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme} resetCSS>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />

            <h1>Advice Generator App</h1>

          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
