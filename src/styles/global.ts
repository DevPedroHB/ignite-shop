import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",

    "::-webkit-scrollbar": {
      width: "0.4rem",
      height: "0.4rem",
      backgroundColor: "$gray800",
      borderRadius: 6,
    },

    "::-webkit-scrollbar-thumb": {
      background: "linear-gradient(180deg, #7465d4 0%, #1ea483 100%)",
      borderRadius: 6,
    },

    "::-webkit-scrollbar-thumb:hover": {
      background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    },
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  a: {
    color: "inherit",
  },

  button: {
    cursor: "pointer",
  },
});
