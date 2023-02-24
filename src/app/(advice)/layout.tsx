"use client";

import { Grid } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export default function AdviceLayout({ children }: { children: ReactNode }) {
  return (
    <Grid h="100vh" placeItems="center">
      {children}
    </Grid>
  );
}
