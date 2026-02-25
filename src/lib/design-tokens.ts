export const colors = {
  brand: {
    gold: "#AF7E2D",
  },
  background: {
    black: "#000000",
    softBlack: "#171717",
    beige: "#FFF8ED",
  },
  text: {
    white: "#FFFFFF",
    gray: "#6C6C6C",
    grayLight: "#939292",
  },
  border: {
    gray: "#939292",
    light: "#DBE0EC",
  },
  form: {
    inputBackground: "#D9D9D9",
  },
  status: {
    success: "#11C900",
  },
} as const;

export type ColorTokens = typeof colors;

export const typography = {
  heading2: {
    fontFamily: "var(--font-inter)",
    fontWeight: 600,
    fontSize: "56px",
    lineHeight: 1.21,
  },
  heading3: {
    fontFamily: "var(--font-inter)",
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: 1.3,
  },
  body: {
    regular: {
      fontFamily: "var(--font-inter)",
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: 1.21,
    },
    large: {
      fontFamily: "var(--font-inter)",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: 1.21,
    },
  },
  nav: {
    link: {
      fontFamily: "var(--font-inter)",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.21,
    },
  },
  caption: {
    fontFamily: "var(--font-geist-mono)",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: 1.14,
  },
} as const;

export type TypographyTokens = typeof typography;

export const spacing = {
  xxs: 10,
  xs: 20,
  sm: 40,
  md: 60,
  lg: 80,
  xl: 100,
  "2xl": 120,
  custom126: 126,
  custom129: 129,
  section: {
    paddingY: 100,
    paddingX: 20,
  },
} as const;

export type SpacingTokens = typeof spacing;

export const radii = {
  md: 8,
  lg: 16,
} as const;

export type RadiusTokens = typeof radii;

export const designTokens = {
  colors,
  typography,
  spacing,
  radii,
} as const;

export type DesignTokens = typeof designTokens;

