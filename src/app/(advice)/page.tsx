import AdviceBoundary from "@/app/(advice)/adviceBoundary";
import { fetchAdvice } from "@/app/(fetch)/fetchAdvice";
import React from "react";

export default async function Page() {
  const initialAdvice = await fetchAdvice();

  return <AdviceBoundary initialAdvice={initialAdvice} />;
}
