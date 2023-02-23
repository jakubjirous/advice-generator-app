import { defineStyleConfig } from "@chakra-ui/react";

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    lineHeight: "short",
    letterSpacing: "normal",
    color: "botticelli.100",
    _before: {
      content: `"\\201C"`,
    },
    _after: {
      content: `"\\201D"`,
    },
  },
  sizes: {
    sm: {
      fontSize: "2xl",
    },
    md: {
      fontSize: "3xl",
    },
  },
  defaultProps: {
    size: "sm",
  },
});

export default Heading;
