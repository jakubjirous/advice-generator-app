"use client";

import Loading from "@/app/(advice)/loading";
import Advice from "@/components/Advice";
import { Button } from "@chakra-ui/react";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Page() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          There was an error!
          <Button onClick={() => resetErrorBoundary()}>Try again</Button>
        </div>
      )}
    >
      <Suspense fallback={<Loading />}>
        <Advice />
      </Suspense>
    </ErrorBoundary>
  );
}
