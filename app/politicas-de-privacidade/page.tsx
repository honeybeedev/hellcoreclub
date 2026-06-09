import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Políticas de privacidade — HellCore Club",
  description:
    "Saiba como o HellCore Club trata seus dados pessoais, cookies e consentimento na lista de interessados.",
};

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4">
      <h2 className="text-[clamp(1.375rem,2.5vw,1.75rem)] font-bold leading-tight text-ink">
        {title}
      </h2>
      <div className="legal-prose">{children}</div>
    </section>
  );
}

export default function PoliticasDePrivacidadePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-canvas">
        <div className="border-b border-canvas-soft bg-canvas-soft">
          <div className="mx-auto max-w-[820px] px-6 py-14 md:px-8 md:py-20">
            <p className="section-label mb-4">Legal</p>
            <h1 className="display-300 text-[clamp(2rem,5vw,3rem)] leading-tight text-ink">
              Políticas de privacidade
            </h1>
            <p className="mt-4 max-w-prose text-[16px] leading-7 text-body">
              Última atualização: 9 de junho de 2026. Esta página descreve como o
              HellCore Club coleta, usa e protege seus dados enquanto a plataforma
              está em fase de captação de interessados.
            </p>
          </div>
        </div>

        <article className="mx-auto max-w-[820px] px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-col gap-12">
            <LegalSection title="Quem somos">
              <p>
                O <strong>HellCore Club</strong> é um clube para streamers do
                Brasil que buscam crescer de forma legal e lícita, sem bots ou
                métodos que prejudiquem o canal. Neste momento, operamos uma
                landing page de lista de interessados enquanto a plataforma está
                em desenvolvimento.
              </p>
              <p>
                Para dúvidas sobre privacidade, entre em contato:{" "}
                <a href="mailto:privacidade@hellcore.club">
                  privacidade@hellcore.club
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection title="Quais dados coletamos">
              <p>
                Quando você preenche o formulário de interesse, coletamos os
                seguintes dados:
              </p>
              <ul>
                <li>Nome</li>
                <li>E-mail</li>
                <li>WhatsApp</li>
                <li>Nick na Kick</li>
                <li>Instagram</li>
              </ul>
              <p>
                Também podemos registrar data e hora do cadastro e metadados
                técnicos mínimos gerados pelo servidor (por exemplo, endereço IP
                em logs de aplicação), quando necessários para segurança e
                operação do site.
              </p>
            </LegalSection>

            <LegalSection title="Para que usamos seus dados">
              <p>Utilizamos seus dados para:</p>
              <ul>
                <li>
                  Incluir você na lista de interessados do HellCore Club
                </li>
                <li>
                  Entrar em contato sobre novidades, acesso antecipado e
                  lançamento da plataforma
                </li>
                <li>
                  Entender o perfil da comunidade de streamers interessados
                </li>
                <li>Garantir segurança, prevenção a fraudes e suporte técnico</li>
              </ul>
              <p>
                Não vendemos seus dados pessoais. Não utilizamos bots, view fake
                ou práticas que violem as regras das plataformas de streaming.
              </p>
            </LegalSection>

            <LegalSection title="Base legal (LGPD)">
              <p>Tratamos seus dados com base em:</p>
              <ul>
                <li>
                  <strong>Consentimento</strong>, ao enviar o formulário de
                  interesse
                </li>
                <li>
                  <strong>Legítimo interesse</strong>, para comunicações
                  relacionadas ao cadastro e segurança do serviço, respeitando
                  seus direitos
                </li>
                <li>
                  <strong>Obrigação legal</strong>, quando exigido por lei
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="Armazenamento e retenção">
              <p>
                Os dados do formulário são armazenados em banco de dados
                PostgreSQL hospedado na{" "}
                <a
                  href="https://neon.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Neon
                </a>
                . A aplicação é publicada na{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </a>
                .
              </p>
              <p>
                Mantemos seus dados enquanto você permanecer na lista de
                interessados ou até que solicite exclusão, salvo obrigação legal
                de retenção por prazo maior.
              </p>
            </LegalSection>

            <LegalSection title="Compartilhamento com terceiros">
              <p>
                Compartilhamos dados apenas com provedores necessários para
                operar o site:
              </p>
              <ul>
                <li>
                  <strong>Neon</strong>: hospedagem do banco de dados
                </li>
                <li>
                  <strong>Vercel</strong>: hospedagem da aplicação web
                </li>
                <li>
                  <strong>Vercel Blob</strong>: hospedagem de assets do site
                  (como logo)
                </li>
                <li>
                  <strong>CookieFirst</strong>: gestão de consentimento de
                  cookies (detalhes abaixo)
                </li>
              </ul>
              <p>
                Esses provedores processam dados conforme contratos e políticas
                próprias, apenas na medida necessária para prestar o serviço.
              </p>
            </LegalSection>

            <LegalSection title="Seus direitos">
              <p>
                Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode
                solicitar:
              </p>
              <ul>
                <li>Confirmação do tratamento e acesso aos dados</li>
                <li>Correção de dados incompletos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade, quando aplicável</li>
                <li>Revogação do consentimento</li>
                <li>Informação sobre compartilhamento</li>
              </ul>
              <p>
                Para exercer seus direitos, envie e-mail para{" "}
                <a href="mailto:privacidade@hellcore.club">
                  privacidade@hellcore.club
                </a>
                . Responderemos em prazo razoável, conforme a legislação
                aplicável.
              </p>
            </LegalSection>

            <LegalSection title="Segurança">
              <p>
                Adotamos medidas técnicas e organizacionais para proteger seus
                dados, incluindo conexão criptografada (HTTPS), controle de
                acesso aos ambientes de produção e boas práticas de
                desenvolvimento. Nenhum método de transmissão ou armazenamento é
                100% seguro; buscamos reduzir riscos de forma contínua.
              </p>
            </LegalSection>

            <LegalSection title="Menores de idade">
              <p>
                O HellCore Club não se destina a menores de 18 anos. Se
                identificarmos cadastro de menor sem consentimento adequado do
                responsável, excluiremos os dados.
              </p>
            </LegalSection>

            <LegalSection title="Alterações desta política">
              <p>
                Podemos atualizar esta página conforme o site e a plataforma
                evoluem. A data de &quot;última atualização&quot; no topo será
                revisada quando houver mudanças relevantes. Recomendamos revisar
                periodicamente.
              </p>
            </LegalSection>

            <LegalSection title="Consentimento para a utilização de cookies">
              <p>
                Para que o nosso website funcione correctamente, utilizamos
                cookies. Para obter o seu consentimento válido para a utilização
                e armazenamento de cookies no browser que utiliza para aceder ao
                nosso website e para o documentar correctamente, utilizamos uma
                plataforma de gestão de consentimento: CookieFirst. Esta
                tecnologia é fornecida pela Digital Data Solutions BV, Plantage
                Middenlaan 42a, 1018 DH, Amesterdão, Países Baixos. Website:{" "}
                <a
                  href="https://cookiefirst.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://cookiefirst.com
                </a>{" "}
                referido como CookieFirst.
              </p>
              <p>
                Quando acede ao nosso sítio web, é estabelecida uma ligação com
                o servidor CookieFirst para nos dar a possibilidade de obter o
                seu consentimento válido para a utilização de certos cookies.
                CookieFirst armazena então um cookie no seu navegador, a fim de
                poder activar apenas aqueles cookies a que deu o seu
                consentimento e de documentar devidamente este facto. Os dados
                processados são armazenados até o período de armazenamento
                pré-definido expirar ou o utilizador solicita a eliminação dos
                dados. Certos períodos de armazenamento legal obrigatórios podem
                aplicar-se, não obstante o acima mencionado.
              </p>
              <p>
                CookieFirst é utilizada para obter o consentimento legalmente
                exigido para a utilização de cookies. A base jurídica para isto
                é o artigo 6(1)(c) do Regulamento Geral de Protecção de Dados
                (GDPR).
              </p>
            </LegalSection>

            <LegalSection title="Contrato de tratamento de dados">
              <p>
                Concluímos um acordo de tratamento de dados com CookieFirst. Este
                é um contrato exigido pela lei de protecção de dados, que
                assegura que os dados dos visitantes do nosso sítio web só são
                processados de acordo com as nossas instruções e em conformidade
                com a GDPR.
              </p>
            </LegalSection>

            <LegalSection title="Ficheiros de registo do servidor">
              <p>
                O nosso website e CookieFirst recolhem e armazenam
                automaticamente informações nos chamados ficheiros de registo do
                servidor, que o seu browser nos transmite automaticamente. São
                recolhidos os seguintes dados:
              </p>
              <ul>
                <li>O seu estado de consentimento ou a retirada do consentimento</li>
                <li>O seu endereço IP anonimizado</li>
                <li>Informação sobre o seu Navegador</li>
                <li>Informação sobre o seu Dispositivo</li>
                <li>A data e a hora em que visitou o nosso sítio</li>
                <li>
                  A página web url onde guardou ou actualizou as suas
                  preferências de consentimento
                </li>
                <li>
                  A localização aproximada do utilizador que guardou a sua
                  preferência de consentimento
                </li>
                <li>
                  Um identificador universalmente único (UUID) do visitante do
                  website que clicou no banner cookie
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="Tabela de cookies">
              <div id="cookiefirst-cookies-table" />
              <p className="mt-4 text-[14px] text-body">
                Esta tabela de cookies foi criada e atualizada pela{" "}
                <a
                  href="https://cookiefirst.com/pt/cookie-consent/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookie Consent
                </a>
                .
              </p>
            </LegalSection>

            <p className="text-[16px] leading-7 text-body">
              <Link href="/" className="font-semibold text-primary hover:underline">
                Voltar para a página inicial
              </Link>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
