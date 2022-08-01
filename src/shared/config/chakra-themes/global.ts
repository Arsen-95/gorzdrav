export const global = {
  html: { scrollBehavior: "smooth", height: "100%" },
  body: {
    color: "#090909",
    cursor: "default",
    height: "100%",
  },

  "#__next": {
    height: "100%",
  },

  h3: {
    fontSize: "28px",
    fontWeight: "500",
    lineHeight: 1.2,
  },
  "@media (min-width: 480x)": {
    h3: {
      fontSize: "32px",
    },
  },
  "@media (min-width: 768px)": {
    h3: {
      fontSize: "36px",
    },
  },

  "@media (min-width: 1536px)": {
    h3: {
      fontSize: "42px",
    },
  },
};
