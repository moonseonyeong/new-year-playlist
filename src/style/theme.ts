const color = {
  main: '#7300D8',
  gray20: '#E9E9E9',
  gray90: '#252525',
} as const;

export const theme = {
  color,
};

export type Theme = typeof theme;
