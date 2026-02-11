import { GOOGLE_FONTS_RANGES } from "@excalidraw/common";

import { type ExcalidrawFontFaceDescriptor } from "../Fonts";

// Using jsDelivr CDN for Hubot Sans - latest version 5.2.8
// Weight 500 for Latin
const HubotSansLatin500 = "https://cdn.jsdelivr.net/npm/@fontsource/hubot-sans@5.2.8/files/hubot-sans-latin-500-normal.woff2";
const HubotSansLatinExt500 = "https://cdn.jsdelivr.net/npm/@fontsource/hubot-sans@5.2.8/files/hubot-sans-latin-ext-500-normal.woff2";

export const HubotSansFontFaces: ExcalidrawFontFaceDescriptor[] = [
  {
    uri: HubotSansLatinExt500,
    descriptors: {
      unicodeRange: GOOGLE_FONTS_RANGES.LATIN_EXT,
      weight: "500",
    },
  },
  {
    uri: HubotSansLatin500,
    descriptors: {
      unicodeRange: GOOGLE_FONTS_RANGES.LATIN,
      weight: "500",
    },
  },
];
