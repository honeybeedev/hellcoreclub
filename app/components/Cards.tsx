type Card = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-card bg-primary text-on-primary">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {children}
      </svg>
    </span>
  );
}

const CARDS: Card[] = [
  {
    // Networking — connected nodes
    icon: (
      <Icon>
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <path d="M12 8v3M5 16v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2" />
      </Icon>
    ),
    title: "Networking real",
    body: "Conecte-se com streamers de todos os cantos do Brasil, troque experiências e cresça em comunidade: colaborações, raids e parcerias de verdade.",
  },
  {
    // Crescimento orgânico — trending up
    icon: (
      <Icon>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M17 7h4v4" />
      </Icon>
    ),
    title: "Crescimento orgânico",
    body: "Estratégias e apoio para aumentar sua audiência de forma orgânica, respeitando as regras das plataformas. Resultados que duram.",
  },
  {
    // 100% legal — shield with check
    icon: (
      <Icon>
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="m9 12 2 2 4-4" />
      </Icon>
    ),
    title: "100% legal e lícito",
    body: "Nada de bots, view fake ou métodos que colocam seu canal em risco. Aqui o crescimento é limpo e seguro, do começo ao fim.",
  },
  {
    // Conteúdo e mentoria — graduation cap
    icon: (
      <Icon>
        <path d="M22 9.5 12 5 2 9.5l10 4.5 10-4.5z" />
        <path d="M22 9.5V15" />
        <path d="M6 11.4V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.6" />
      </Icon>
    ),
    title: "Conteúdo e mentoria",
    body: "Acesso a materiais, lives e mentorias com quem entende do jogo. Aprenda a profissionalizar seu canal e transformar paixão em carreira.",
  },
  {
    // Eventos e desafios — trophy
    icon: (
      <Icon>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M6 4h12v5a6 6 0 0 1-12 0V4z" />
        <path d="M9 19h6M10 15.5V19M14 15.5V19M8 22h8" />
      </Icon>
    ),
    title: "Eventos e desafios",
    body: "Participe de eventos, campeonatos e desafios exclusivos do clube, com visibilidade extra para quem faz parte da comunidade.",
  },
  {
    // Vantagens de fundador — crown
    icon: (
      <Icon>
        <path d="M3 6l4 4 5-6 5 6 4-4-2 12H5L3 6z" />
        <path d="M5 20h14" />
      </Icon>
    ),
    title: "Vantagens de fundador",
    body: "Quem entra agora garante benefícios exclusivos de membro fundador e prioridade em todas as novidades da plataforma.",
  },
];

export default function Cards() {
  return (
    <section id="vantagens" className="bg-canvas-soft">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-8 md:py-28">
        <div className="mb-14 max-w-3xl">
          <h2 className="display-300 text-[clamp(2rem,5vw,3rem)] leading-tight text-ink">
            Tudo que você precisa para crescer com consistência.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="group rounded-card bg-canvas p-6 motion-safe:transition-transform motion-safe:hover:-translate-y-1"
            >
              {card.icon}
              <h3 className="text-[24px] font-bold leading-7 text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-[16px] leading-6 text-body">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
