import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-on-dark">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-sm text-[16px] leading-6 text-on-dark/70">
              O clube que conecta streamers de todo o Brasil para crescerem de
              forma legal e lícita. Sem bots. Sem atalhos. Só evolução real.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-on-dark/60">
              Navegação
            </p>
            <ul className="flex flex-col gap-3 text-[16px] text-on-dark/85">
              <li><a href="/#sobre" className="nav-link hover:text-on-dark">Sobre</a></li>
              <li><a href="/#status" className="nav-link hover:text-on-dark">Status</a></li>
              <li><a href="/#vantagens" className="nav-link hover:text-on-dark">Vantagens</a></li>
              <li><a href="/#cadastro" className="nav-link hover:text-on-dark">Cadastro</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-on-dark/60">
              Legal
            </p>
            <ul className="flex flex-col gap-3 text-[16px] text-on-dark/85">
              <li>
                <a href="/politicas-de-privacidade" className="nav-link hover:text-on-dark">
                  Políticas de privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-on-dark/60">
              Contato
            </p>
            <ul className="flex flex-col gap-3 text-[16px] text-on-dark/85">
              <li><a href="mailto:contato@hellcore.club" className="nav-link hover:text-on-dark">contato@hellcore.club</a></li>
              <li><a href="/#cadastro" className="nav-link hover:text-on-dark">Entrar na lista</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-on-dark/15 pt-6 text-[14px] text-on-dark/60 md:flex-row md:items-center md:justify-between">
          <span>© {year} HellCore Club. Todos os direitos reservados.</span>
          <span>Plataforma em desenvolvimento. Feito para a comunidade de streamers do Brasil.</span>
        </div>
      </div>
    </footer>
  );
}
