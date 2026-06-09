"use client";

import { useState } from "react";

type Fields = {
  nome: string;
  email: string;
  whatsapp: string;
  kickNick: string;
  instagram: string;
};

const EMPTY: Fields = {
  nome: "",
  email: "",
  whatsapp: "",
  kickNick: "",
  instagram: "",
};

const FIELDS: {
  name: keyof Fields;
  label: string;
  placeholder: string;
  type?: string;
  inputMode?: "text" | "email" | "tel";
  autoComplete?: string;
}[] = [
  { name: "nome", label: "Nome", placeholder: "Seu nome completo", autoComplete: "name" },
  { name: "email", label: "E-mail", placeholder: "voce@email.com", type: "email", inputMode: "email", autoComplete: "email" },
  { name: "whatsapp", label: "WhatsApp", placeholder: "(11) 90000-0000", inputMode: "tel", autoComplete: "tel" },
  { name: "kickNick", label: "Nick na Kick", placeholder: "seu_nick" },
  { name: "instagram", label: "Instagram", placeholder: "@seu_instagram" },
];

function maskPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.replace(/(\d{0,2})/, "($1");
  if (d.length <= 6) return d.replace(/(\d{2})(\d{0,4})/, "($1) $2");
  if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

export default function LeadForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update(name: keyof Fields, value: string) {
    setValues((v) => ({ ...v, [name]: name === "whatsapp" ? maskPhone(value) : value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    setErrors({});

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setValues(EMPTY);
        return;
      }

      if (data?.errors) setErrors(data.errors);
      setStatus("error");
      setMessage(data?.error ?? "Confira os campos destacados e tente novamente.");
    } catch {
      setStatus("error");
      setMessage("Falha de conexão. Tente novamente em instantes.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[6px] bg-ink p-10 text-center text-on-dark">
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M20 7 9 18l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-[28px] font-bold">Lugar garantido!</h3>
        <p className="mx-auto mt-3 max-w-md text-[18px] text-on-dark/80">
          Você está na lista de interessados da HellCore Club. Em breve entramos
          em contato pelo WhatsApp ou e-mail com as próximas novidades.
        </p>
        <button
          type="button"
          className="btn-pill btn-primary mt-8"
          onClick={() => setStatus("idle")}
        >
          Cadastrar outro streamer
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      {FIELDS.map((f) => (
        <div key={f.name} className="grid gap-2">
          <label htmlFor={f.name} className="text-[16px] font-bold text-ink">
            {f.label}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type ?? "text"}
            inputMode={f.inputMode}
            autoComplete={f.autoComplete}
            placeholder={f.placeholder}
            value={values[f.name]}
            onChange={(e) => update(f.name, e.target.value)}
            className="text-input"
            aria-invalid={Boolean(errors[f.name])}
          />
          {errors[f.name] && (
            <span className="text-[14px] text-primary">{errors[f.name]}</span>
          )}
        </div>
      ))}

      {status === "error" && message && (
        <p className="text-[14px] font-bold text-primary">{message}</p>
      )}

      <button
        type="submit"
        className="btn-pill btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "Garantir meu lugar"}
      </button>

      <p className="text-center text-[14px] text-body">
        Seus dados são usados apenas para contato sobre a HellCore Club.
      </p>
    </form>
  );
}
