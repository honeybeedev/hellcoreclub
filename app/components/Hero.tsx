import Image from "next/image";
import { photoUrl, photos } from "@/lib/images";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-ink text-on-dark"
    >
      {/* Editorial photography — the brand's signature decorative system */}
      <Image
        src={photoUrl(photos.heroKickStreamer, { w: 2000, q: 65 })}
        alt={photos.heroKickStreamer.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[55%_center]"
      />
      {/* Ink overlay so the massive display headline stays legible */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(37,40,43,0.94) 0%, rgba(37,40,43,0.82) 45%, rgba(37,40,43,0.55) 100%)",
        }}
      />
      {/* atmospheric red glow — the brand uses surface contrast, kept subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--color-primary)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-8 md:py-28">
        <p className="eyebrow mb-6 text-[16px] text-primary">
          O clube dos streamers do Brasil
        </p>

        <h1 className="display-hero text-[clamp(56px,11vw,140px)]">
          Cresça no jogo
          <br />
          <span className="text-primary">do jeito certo</span>
        </h1>

        <p className="display-300 mt-8 max-w-2xl text-[clamp(20px,2.4vw,32px)] leading-tight text-on-dark/85">
          A HellCore Club conecta streamers de todo o Brasil para alcançarem
          seus objetivos de forma legal e lícita — sem bots, sem view fake, sem
          atalhos que prejudicam o seu canal.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#cadastro" className="btn-pill btn-primary">
            Entrar na lista de interessados
          </a>
          <a href="#sobre" className="btn-pill btn-outline-light">
            Conhecer a proposta
          </a>
        </div>

        <p className="mt-6 text-[14px] text-on-dark/60">
          Plataforma em desenvolvimento. Garanta seu lugar antes do lançamento.
        </p>
      </div>
    </section>
  );
}
