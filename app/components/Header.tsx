"use client";

import { useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#status", label: "Status" },
  { href: "#vantagens", label: "Vantagens" },
  { href: "#cadastro", label: "Cadastro" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-on-dark">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-8">
        <a href="#topo" className="shrink-0" aria-label="HellCore Club — início">
          <Logo onDark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] text-on-dark/80 transition-colors hover:text-on-dark"
            >
              {link.label}
            </a>
          ))}
          <a href="#cadastro" className="btn-pill btn-primary !py-2.5 !px-6 text-[16px]">
            Quero participar
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-on-dark transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-on-dark transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-on-dark transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-on-dark/15 bg-ink md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-[18px] text-on-dark/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cadastro"
              className="btn-pill btn-primary mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              Quero participar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
