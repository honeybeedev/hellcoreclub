import { NextResponse } from "next/server";
import { ensureSchema, getSql } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadPayload = {
  nome?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  kickNick?: unknown;
  instagram?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { ok: false, error: "Banco de dados não configurado (DATABASE_URL ausente)." },
      { status: 503 }
    );
  }

  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requisição inválida." },
      { status: 400 }
    );
  }

  const nome = asString(body.nome);
  const email = asString(body.email);
  const whatsapp = asString(body.whatsapp);
  const kickNick = asString(body.kickNick);
  const instagram = asString(body.instagram);

  const errors: Record<string, string> = {};
  if (nome.length < 2) errors.nome = "Informe seu nome.";
  if (!EMAIL_RE.test(email)) errors.email = "Informe um e-mail válido.";
  if (whatsapp.replace(/\D/g, "").length < 10)
    errors.whatsapp = "Informe um WhatsApp válido com DDD.";
  if (kickNick.length < 2) errors.kickNick = "Informe seu nick na Kick.";
  if (instagram.length < 2) errors.instagram = "Informe seu Instagram.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    await ensureSchema();
    const sql = getSql();
    await sql`
      INSERT INTO leads (nome, email, whatsapp, kick_nick, instagram)
      VALUES (${nome}, ${email}, ${whatsapp}, ${kickNick}, ${instagram})
      ON CONFLICT (lower(email)) DO UPDATE SET
        nome = EXCLUDED.nome,
        whatsapp = EXCLUDED.whatsapp,
        kick_nick = EXCLUDED.kick_nick,
        instagram = EXCLUDED.instagram;
    `;

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("[hellcoreclub] Failed to save lead:", err);
    return NextResponse.json(
      { ok: false, error: "Não foi possível salvar seu cadastro. Tente novamente." },
      { status: 500 }
    );
  }
}
