/**
 * https://chakra-ui.com/docs/styled-system/advanced-theming#single-part-component
 */
const Section = {
  baseStyle: {
    position: "relative",
    bg: "bayoux.500",
    borderRadius: "2xl",
    w: "100vw",
  },
  sizes: {
    sm: {
      p: 8,
      maxW: "xs",
    },
    md: {
      p: 10,
      maxW: "md",
    },
  },
  defaultProps: {
    size: "sm",
  },
};

export default Section;
