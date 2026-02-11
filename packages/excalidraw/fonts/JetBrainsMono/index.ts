import { GOOGLE_FONTS_RANGES } from "@excalidraw/common";

import { type ExcalidrawFontFaceDescriptor } from "../Fonts";

// Using jsDelivr CDN for JetBrains Mono
// Weight 500 for Latin
const JetBrainsMonoLatin500 = "https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.0.0/files/jetbrains-mono-latin-500-normal.woff2";
const JetBrainsMonoLatinExt500 = "https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.0.0/files/jetbrains-mono-latin-ext-500-normal.woff2";
const JetBrainsMonoCyrillic500 = "https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.0.0/files/jetbrains-mono-cyrillic-500-normal.woff2";

export const JetBrainsMonoFontFaces: ExcalidrawFontFaceDescriptor[] = [
  {
    uri: JetBrainsMonoCyrillic500,
    descriptors: {
      unicodeRange: GOOGLE_FONTS_RANGES.CYRILIC,
      weight: "500",
    },
  },
  {
    uri: JetBrainsMonoLatinExt500,
    descriptors: {
      unicodeRange: GOOGLE_FONTS_RANGES.LATIN_EXT,
      weight: "500",
    },
  },
  {
    uri: JetBrainsMonoLatin500,
    descriptors: {
      unicodeRange: GOOGLE_FONTS_RANGES.LATIN,
      weight: "500",
    },
  },
];
