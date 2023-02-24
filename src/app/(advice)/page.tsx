"use client";

import Loading from "@/app/(advice)/loading";
import Advice from "@/components/Advice";
import Error from "@/components/Error";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Page() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <Error onClick={() => resetErrorBoundary()} />
      )}
    >
      <Suspense fallback={<Loading />}>
        <Advice />
      </Suspense>
    </ErrorBoundary>
  );
}
