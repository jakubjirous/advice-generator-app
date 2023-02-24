import Section from "@/components/Section";
import DesktopDividerIcon from "@/theme/icons/DesktopDividerIcon";
import DiceIcon from "@/theme/icons/DiceIcon";
import MobileDividerIcon from "@/theme/icons/MobileDividerIcon";
import { Heading, Hide, IconButton, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
  onClick: () => void;
}

const Error: FC<Props> = ({ onClick }) => {
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
        variant="error"
      >
        Try again
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
        &#8264; There was an error &#8265;
      </Heading>
      <Hide above="md">
        <MobileDividerIcon width="100%" height="auto" />
      </Hide>
      <Hide below="md">
        <DesktopDividerIcon width="100%" height="auto" />
      </Hide>
      <IconButton
        variant="fixed"
        onClick={onClick}
        icon={<DiceIcon />}
        aria-label="Try again"
      />
    </Section>
  );
};

export default Error;
