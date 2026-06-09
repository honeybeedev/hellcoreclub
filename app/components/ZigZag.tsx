import Image from "next/image";
import { photoUrl, photos, type Photo } from "@/lib/images";

type Row = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  photo: Photo;
};

const ROWS: Row[] = [
  {
    eyebrow: "Status do projeto",
    title: "Estamos construindo a plataforma",
    body: "A HellCore Club está em pleno desenvolvimento. Neste momento, nosso foco é reunir os streamers que querem fazer parte desde o início e moldar a comunidade junto com a gente.",
    bullets: [
      "Fase atual: captação de interessados",
      "Acesso antecipado para quem entrar agora",
      "Sua opinião ajuda a definir os recursos",
    ],
    photo: photos.buildingDesk,
  },
  {
    eyebrow: "Por que entrar agora",
    title: "Os primeiros membros saem na frente",
    body: "Quem garante o lugar nesta fase recebe novidades em primeira mão, condições especiais de fundador e participa das decisões sobre o que vamos lançar primeiro.",
    bullets: [
      "Selo de membro fundador",
      "Convites prioritários para os testes",
      "Crescimento 100% legal e dentro das regras",
    ],
    photo: photos.streamerPortrait,
  },
];

function Panel({ photo }: { photo: Photo }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-ink">
      <Image
        src={photoUrl(photo, { w: 1200, q: 70 })}
        alt={photo.alt}
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover"
      />
      {/* subtle ink wash to keep the brand's dark editorial mood */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(37,40,43,0) 45%, rgba(37,40,43,0.35) 100%)",
        }}
      />
      {/* red orb anchor in the corner */}
      <span
        aria-hidden
        className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-[6px] bg-primary"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 3 7v6c0 5 3.8 8 9 9 5.2-1 9-4 9-9V7l-9-5Z"
            fill="#ffffff"
          />
        </svg>
      </span>
    </div>
  );
}

export default function ZigZag() {
  return (
    <section id="status" className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-8 md:py-28">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4 text-[16px] text-primary">Onde estamos</p>
          <h2 className="display-300 text-[clamp(32px,5vw,48px)] leading-tight text-ink">
            Um clube feito por streamers, para streamers.
          </h2>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {ROWS.map((row, i) => (
            <div
              key={row.title}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <Panel photo={row.photo} />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="eyebrow mb-3 text-[16px] text-primary">
                  {row.eyebrow}
                </p>
                <h3 className="text-[clamp(26px,3.5vw,40px)] font-bold leading-tight text-ink">
                  {row.title}
                </h3>
                <p className="mt-5 text-[18px] leading-7 text-body">{row.body}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[16px] text-ink">
                      <span
                        aria-hidden
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path
                            d="m5 13 4 4L19 7"
                            stroke="#fff"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
