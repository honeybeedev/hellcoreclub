import Image from "next/image";
import { asset } from "@/lib/assets";

/** Intrinsic dimensions of hellcore-logo (1672×941). */
const LOGO_W = 1672;
const LOGO_H = 941;

type LogoProps = {
  /** logo width in px */
  width?: number;
  /** show extra "HellCore Club" wordmark beside the logo */
  withWordmark?: boolean;
  /** wordmark text color */
  onDark?: boolean;
};

/** Brand logo hosted on Vercel Blob (public). Synced via `npm run sync:assets`. */
const LOGO_SRC = asset("hellcore-logo");

export default function Logo({
  width = 150,
  withWordmark = false,
  onDark = false,
}: LogoProps) {
  const height = Math.round(width * (LOGO_H / LOGO_W));

  return (
    <span className="inline-flex items-center gap-3">
      {LOGO_SRC && (
        <Image
          src={LOGO_SRC}
          alt="HellCore Club"
          width={LOGO_W}
          height={LOGO_H}
          priority
          className="h-auto"
          style={{ width, height: "auto", maxHeight: height }}
        />
      )}
      {withWordmark && (
        <span
          className="text-[18px] font-extrabold tracking-tight"
          style={{ color: onDark ? "var(--color-on-dark)" : "var(--color-ink)" }}
        >
          HellCore<span className="text-primary">Club</span>
        </span>
      )}
    </span>
  );
}
