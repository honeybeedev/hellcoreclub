// Curated Unsplash photography for HellCore Club.
// All photos are free to use under the Unsplash License (https://unsplash.com/license).
// Photographer credit is recommended and kept here for reference.

export type Photo = {
  /** Unsplash "photo-..." base id */
  id: string;
  alt: string;
  credit: string;
  source: string;
};

const BASE = "https://images.unsplash.com/";

export const photos = {
  heroSetup: {
    id: "photo-1762919639448-fb39e8d9311e",
    alt: "Streamer jogando com teclado e monitor em iluminação RGB",
    credit: "Amir Abbaspoor",
    source:
      "https://unsplash.com/photos/person-gaming-with-colorful-rgb-keyboard-and-monitor-eucxQzwUTt4",
  },
  buildingDesk: {
    id: "photo-1632318901408-b9322722abac",
    alt: "Mesa de streaming com dois monitores e microfone",
    credit: "Onur Binay",
    source:
      "https://unsplash.com/photos/a-computer-desk-with-two-monitors-and-a-microphone-Mr21-mhS5eE",
  },
  streamerPortrait: {
    id: "photo-1594009375825-564aac98bda6",
    alt: "Streamer com fones de ouvido segurando microfone",
    credit: "ConvertKit",
    source:
      "https://unsplash.com/photos/woman-in-white-shirt-wearing-blue-headphones-holding-black-microphone-3Bz1yBpI3GI",
  },
  neonRoom: {
    id: "photo-1767800766429-7179fd80948f",
    alt: "Setup de gaming moderno com letreiro de neon",
    credit: "Mariia Shalabaieva",
    source:
      "https://unsplash.com/photos/modern-gaming-setup-with-computer-and-neon-sign-sE00MAe_-xg",
  },
  rgbRig: {
    id: "photo-1775410631936-7de96322df0b",
    alt: "PC gamer com múltiplos monitores e iluminação RGB",
    credit: "Branden Skeli",
    source:
      "https://unsplash.com/photos/gamers-setup-with-multiple-monitors-and-rgb-lighting-zHzRrYV_Ars",
  },
} satisfies Record<string, Photo>;

type SizeOpts = { w?: number; h?: number; q?: number };

/** Builds a sized, optimized Unsplash delivery URL for a photo id. */
export function unsplashUrl(id: string, { w = 1600, h, q = 70 }: SizeOpts = {}): string {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: String(q),
    w: String(w),
  });
  if (h) params.set("h", String(h));
  return `${BASE}${id}?${params.toString()}`;
}

/** Convenience: build the delivery URL straight from a Photo. */
export function photoUrl(photo: Photo, opts?: SizeOpts): string {
  return unsplashUrl(photo.id, opts);
}
