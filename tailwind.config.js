const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: [
      "./public/**/*.html",
      "./public/*.html",
      "./src/**/*.js",
      "./src/*.js",
      "./src/**/*.html",
      "./src/*.html",
      "./public/**/*.js",
      "./public/*.js",
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      base: {
        base01: "#FFFFFF",
        base02: "#F0F0F0",
        base03: "#E7E7E7",
        base04: "#E5E5E5",
        base05: "#D4D4D4",
        base06: "#CCCCCC",
        base07: "#C6C6C6",
        base08: "#BBBBBB",
        base09: "#A0A0A0",
        base10: "#808080",
        base11: "#7F7F7F",
        base12: "#606060",
        base13: "#454545",
        base14: "#3C3C3C",
        base15: "#424750",
        base16: "#3A3D41",
        base17: "#333333",
        base18: "#303031",
        base19: "#292929",
        base20: "#252526",
        base21: "#1E1E1E",
        base22: "#000000"
      },
      accents: {
        blue01: "#75BEFF",
        blue02: "#40A6FF",
        blue03: "#3399CC",
        blue04: "#3794FF",
        blue05: "#0097FB",
        blue06: "#007ACC",
        blue07: "#0E639C",
        blue08: "#264F78",
        blue09: "#094771",
        blue10: "#062F4A",
        blue11: "#001F33",
        red01: "#F14C4C",
        red02: "#C74E39",
        red03: "#FF0000",
        red04: "#A31515",
        green01: "#73C991",
        green02: "#40C8AE",
        green03: "#16825D",
        green04: "#327E36",
        green05: "#28632B",
        purple01: "#6C6CC4",
        purple02: "#B180D7",
        purple03: "#BC3FBC",
        purple04: "#68217A",
        yellow01: "#D7BA7D",
        yellow02: "#CCA700",
        yellow03: "#B89500",
        yellow04: "#FFFF00",
        orange01: "#CC6633",
        orange02: "#EE9D28",
        orange03: "#EA5C00"
      },
      seti: {
        blue: "#519ABA",
        green: "#8DC149",
        orange: "#E37933",
        pink: "#F55385",
        red: "#CC3E44",
        steel: "#7494A3",
        yellow: "#CBCB41",
        purple: "#A074C4",
        ignore: "#41535B",
        white: "#D4D7D6",
        gray: "#6D8086"
      }
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Inter", "serif"],
    },
    extend: {
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
  ],
};
