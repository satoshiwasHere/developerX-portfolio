import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Chakra UI Theme Configuration
// You can expand colors, fonts, and component styles here as you build out the portfolio.
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
    body: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
  },
  styles: {
    global: {
      "html, body": {
        height: "100%",
      },
      body: {
        lineHeight: "base",
      },
    },
  },
});

export default theme;
