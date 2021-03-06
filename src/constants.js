export const COLORS = {
  violet: "246deg 80% 60%",
  orange: "15deg 100% 70%",
  aqua: "195deg 74% 62%",
  red: "348deg 100% 68%",
  green: "145deg 58% 55%",
  purple: "264deg 64% 52%",
  yellow: "43deg 84% 65%",
  blue: {
    100: "236deg 100% 87%",
    200: "235deg 45% 61%",
    300: "235deg 46% 20%",
    400: "226deg 43% 10%",
    hover: "236 41% 34%",
  },
  white: "0deg 0% 100%",
};

export const WEIGHTS = {
  normal: 300,
  medium: 400,
  bold: 500,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1000,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  tabletOnly: `(max-width: ${BREAKPOINTS.tablet / 16}rem) 
    and (min-width: ${BREAKPOINTS.phone / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
