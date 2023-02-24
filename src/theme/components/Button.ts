import { pxToRem } from "@/utils/unitConvertors";
import { defineStyleConfig, keyframes } from "@chakra-ui/react";

const roll = keyframes({
  "0%": {
    transform: "rotate(0) translateX(0)",
  },
  "25%": {
    transform: `rotate(90deg) translateX(${pxToRem(-4)})`,
  },
  "50%": {
    transform: "rotate(180deg) translateX(0)",
  },
  "75%": {
    transform: `rotate(270deg) translateX(${pxToRem(4)})`,
  },
  "100%": {
    transform: "rotate(360deg) translateX(0)",
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "full",
    transitionProperty: "common",
    transitionDuration: "slower",
    fontSize: "2xl",
    bg: "aquamarine.100",
    color: "bayoux.900",
    h: "16",
    w: "16",

    _hover: {
      boxShadow: "hover",
    },

    _focusVisible: {
      boxShadow: "outline",
      outline: `${pxToRem(1)} solid transparent`,
    },

    _disabled: {
      cursor: "wait",
      boxShadow: "unset",
      svg: {
        animation: `${roll} 400ms linear infinite`,
      },
    },
  },
  variants: {
    fixed: {
      position: "absolute",
      bottom: "-8",
    },
  },
});

export default Button;
