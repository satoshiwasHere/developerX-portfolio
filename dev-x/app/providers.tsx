"use client";

import { ReactNode } from "react";
import { ChakraProvider, ColorModeScript, extendTheme, ThemeConfig } from "@chakra-ui/react";
import theme from "@/theme";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
