import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        md: '480px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
      },
    },
  },
  // plugins: [require('tailwindcss-animate')],
};
export default config;
