import useAdvice from "@/hooks/useAdvice";
import { Box } from "@chakra-ui/react";
import React from "react";

const Advice = () => {
  const { data: advice, isFetching, refetch } = useAdvice();

  const handleGenerate = () => {
    refetch();
  };

  return (
    <Box textAlign="center">
      {advice?.slip.id} - {advice?.slip.advice}
      <br />
      <br />
      {isFetching && <>Loading...</>}
      <button onClick={handleGenerate}>Refetch</button>
    </Box>
  );
};

export default Advice;
