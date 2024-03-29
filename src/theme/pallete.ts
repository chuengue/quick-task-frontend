const pallete = {
    white: "#fff",
    dark: "#000",
    purple: {
        default: "#8D37E2",
        transparency: "#E4D4F9",
        light: "#BD8AF0",
        dark: "#6E20BB",
    },
    yellow: {
        default: "#FFD700",
        light: "#FFF9C4",
        dark: "#FFA000",
        transparency: "#FFFFE0",
    },
    orange: {
        default: "#F8A335",
        light: "#FFDAB9",
        dark: "#FF8C00",
        transparency: "#FFEFD5",
    },
    red: {
        default: "#DF3A45",
        transparency: "#F5D5DA",
        light: "#F39EA4",
        dark: "#B8000C",
    },
    gray: {
        default: "#7A8B9A",
        transparency: "#F0F0F0",
        light: "#E1E2E7",
        dark: "#575B63",
        300: "#C5CCD6",
        600: "#3A404D",
        700: "#161D27",
    },
    overlay: {
        light: "rgba(0,0,0, 0.25)",
        dark: "rgba(0,0,0, 0.75)",
    },
};
export default {
    ...pallete,
    primary: pallete.purple.default,
    secondary: pallete.yellow.default,
    warning: pallete.orange.default,
    error: pallete.red.default,
};
