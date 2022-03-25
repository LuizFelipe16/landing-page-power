import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    pink: {
      600: '#E21F7E',
    },
    purple: {
      900: '#150225',
      400: '#704ce7'
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
});