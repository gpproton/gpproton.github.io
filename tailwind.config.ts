import tailwindTypography from '@tailwindcss/typography';

export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ['presets/**/*.{js,vue,ts}', 'articles/**/*.md'],
  plugins: [tailwindTypography],
};
