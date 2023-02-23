import useAdvice from "@/hooks/useAdvice";
import Section from "@/components/Section";
import DesktopDividerIcon from "@/theme/icons/DesktopDividerIcon";
import DiceIcon from "@/theme/icons/DiceIcon";
import MobileDividerIcon from "@/theme/icons/MobileDividerIcon";
import { Heading, IconButton, Text } from "@chakra-ui/react";
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
    <Section
      size={{ base: "sm", sm: "sm", md: "md" }}
      gap={{ base: "4", sm: "4", md: "8" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Text
        size={{
          base: "sm",
          sm: "sm",
          md: "md",
        }}
      >
        Advice #{advice?.slip.id}
      </Text>
      <Heading
        size={{
          base: "sm",
          sm: "sm",
          md: "md",
        }}
      >
        {advice?.slip.advice}
      </Heading>
      <>
        <DesktopDividerIcon />
        <MobileDividerIcon />
      </>
      <IconButton
        variant="fixed"
        onClick={handleGenerate}
        isDisabled={isFetching}
        icon={<DiceIcon />}
        aria-label="Generate advice"
      />
    </Section>
  );
};

export default Advice;
