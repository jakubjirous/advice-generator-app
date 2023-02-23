import { defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    lineHeight: "base",
    letterSpacing: "widest",
    textTransform: "uppercase",
    color: "aquamarine.100",
  },
  sizes: {
    sm: {
      fontSize: "sm",
    },
    md: {
      fontSize: "md",
    },
  },
  defaultProps: {
    size: "sm",
  },
});

export default Text;
