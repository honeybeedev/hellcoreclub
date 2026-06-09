import Header from "./components/Header";
import Hero from "./components/Hero";
import ZigZag from "./components/ZigZag";
import Cards from "./components/Cards";
import LeadSection from "./components/LeadSection";
import Footer from "./components/Footer";

function About() {
  return (
    <section id="sobre" className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-8 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <span
            aria-hidden
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-card bg-primary"
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <div>
            <h2 className="display-300 text-[clamp(1.75rem,4.4vw,3rem)] leading-tight text-ink">
              A HellCore Club nasce para unir os streamers do Brasil em torno de
              um crescimento{" "}
              <span className="font-extrabold text-ink">honesto e sustentável</span>.
              Acreditamos que dá para chegar longe sem bots, sem view fake e sem
              colocar o seu canal em risco.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <ZigZag />
        <Cards />
        <LeadSection />
      </main>
      <Footer />
    </>
  );
}
