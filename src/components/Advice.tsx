import Section from '@/components/Section';
import useAdvice from '@/hooks/useAdvice';
import DesktopDividerIcon from '@/theme/icons/DesktopDividerIcon';
import DiceIcon from '@/theme/icons/DiceIcon';
import MobileDividerIcon from '@/theme/icons/MobileDividerIcon';
import { Heading, IconButton, Text } from '@chakra-ui/react';
import React, { useCallback, useEffect } from 'react';

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
        as="h1"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        size={{
          base: "sm",
          sm: "sm",
          md: "md",
        }}
      >
        &ldquo;{advice?.slip.advice}&rdquo;
      </Heading>
      <MobileDividerIcon
        width="100%"
        height="auto"
        display={{
          base: "flex",
          sm: "flex",
          md: "none",
        }}
      />
      <DesktopDividerIcon
        width="100%"
        height="auto"
        display={{
          base: "none",
          sm: "none",
          md: "flex",
        }}
      />
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
