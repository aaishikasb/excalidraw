import { GOOGLE_FONTS_RANGES } from "@excalidraw/common";

import { type ExcalidrawFontFaceDescriptor } from "../Fonts";

// Using jsDelivr CDN for Mona Sans - latest version 5.2.8
// Weight 500 for Latin
const MonaSansLatin500 = "https://cdn.jsdelivr.net/npm/@fontsource/mona-sans@5.2.8/files/mona-sans-latin-500-normal.woff2";
const MonaSansLatinExt500 = "https://cdn.jsdelivr.net/npm/@fontsource/mona-sans@5.2.8/files/mona-sans-latin-ext-500-normal.woff2";

export const MonaSansFontFaces: ExcalidrawFontFaceDescriptor[] = [
  {
    uri: MonaSansLatinExt500,
    descriptors: {
      unicodeRange: GOOGLE_FONTS_RANGES.LATIN_EXT,
      weight: "500",
    },
  },
  {
    uri: MonaSansLatin500,
    descriptors: {
      unicodeRange: GOOGLE_FONTS_RANGES.LATIN,
      weight: "500",
    },
  },
];
