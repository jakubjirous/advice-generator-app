import useAdvice from "@/hooks/useAdvice";
import { Box } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";

const Advice = () => {
  const { data: advice, isFetching, refetch } = useAdvice();

  const handleGenerate = useCallback(() => {
    if (!isFetching) {
      refetch();
    }
  }, [isFetching]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Box textAlign="center">
      {advice?.slip.id} - {advice?.slip.advice}
      <br />
      <br />
      {isFetching && <>Loading...</>}
      <button onClick={handleGenerate} disabled={isFetching}>
        Refetch
      </button>
    </Box>
  );
};

export default Advice;
