// prodkt.config.ts
import { presetProdkt } from 'prodkt-unocss-preset';
import {
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default ({
  presets: [
    presetUno({
      rules: [
        ['un-cloak', { display: 'none' }],
      ],
      shortcuts: [],
      theme: {
        breakpoints: {
          sm: "320px",
          md: "672px",
          lg: "1056px",
          xlg: "1312px",
          max: "1584px",
        },
      },
    }),
    presetProdkt({
      palette: ["gray", "mauve", "slate", "sage", "olive", "sand", "tomato", "red", "crimson", "pink", "plum", "purple", "violet", "indigo", "blue", "cyan", "teal", "green", "grass", "brown", "orange", "sky", "mint", "lime", "yellow", "amber", "gold", "bronze"],
      aliases: {
        primary: "orange",
        brand: "blue",
        base: "slate",
      },
    }),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: [
          {
            name: "Plus Jakarta Sans",
            weights: ["400", "600", "700", "800"],
            italic: false,
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});