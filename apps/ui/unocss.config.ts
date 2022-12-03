import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-2.5 inline-block cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['background', 'bg-[#F7F9FB] dark:bg-[#1C1C1C]'],
    ['background-secondary', 'bg-white dark:bg-[#121212]'],
    ['bg-icons', 'bg-gradient-to-r from-[#383838] to-[#8264F9]'],
    ['border-color', 'border-[#ADADAD] dark:border-[#646465]'],
    ['text-color-primary', 'text-black dark:text-white'],
    ['text-color-secondary', 'text-[#7C7878] dark:text-[#bbbbbb]'],
    ['dropdown-item', 'p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: '#646465',
      secondary: '#640AE7',
      blue: '#2F69FF',
      starColor: '#FFC643',
    },
  },
})
