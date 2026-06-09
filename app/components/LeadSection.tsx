import LeadForm from "./LeadForm";

export default function LeadSection() {
  return (
    <section id="cadastro" className="bg-ink text-on-dark">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-4 text-[16px] text-primary">Lista de interessados</p>
          <h2 className="display-hero text-[clamp(40px,7vw,90px)]">
            Garanta
            <br />
            seu lugar
          </h2>
          <p className="display-300 mt-6 max-w-md text-[clamp(18px,2.2vw,24px)] leading-snug text-on-dark/85">
            Preencha seus dados e seja um dos primeiros streamers a fazer parte
            da HellCore Club. Sem compromisso — só novidades quentes.
          </p>
          <ul className="mt-8 flex flex-col gap-3 text-[16px] text-on-dark/80">
            {[
              "Acesso antecipado à plataforma",
              "Benefícios exclusivos de fundador",
              "Crescimento legal, sem riscos para o canal",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M20 7 9 18l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[6px] bg-canvas p-6 md:p-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
