import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Partnerstva i mreža",
  description:
    "Kategorije partnera Udruženja građana Staze Krajine i proces prijave za partnerstvo: gradovi, DMO, ugostitelji, donatori i razvojne agencije.",
};

const categories = [
  {
    title: "Gradovi, opštine i turističke organizacije (DMO)",
    description:
      "Saradnja na mapiranju staza, zajedničkoj promociji destinacije i integraciji u lokalne i regionalne turističke strategije.",
  },
  {
    title: "Lokalni ugostitelji, kampovi, vodiči i iznajmljivači opreme",
    description:
      "Uključivanje u turistički registar, zajedničke edukacije i digitalnu promociju ponude prema posjetiocima.",
  },
  {
    title: "Donatori i regionalne razvojne agencije",
    description:
      "Finansijska i stručna podrška projektima mapiranja staza, edukacije zajednice i digitalizacije turističke ponude.",
  },
];

const steps = [
  {
    title: "Prijava interesa",
    description: "Popunite formu na stranici Članstvo i kontakt i opišite kako biste željeli sarađivati.",
  },
  {
    title: "Razgovor i usklađivanje",
    description: "Kontaktiraćemo vas radi dogovora o konkretnom obliku saradnje i očekivanjima obje strane.",
  },
  {
    title: "Potpisivanje saradnje",
    description: "Dogovaramo okvir partnerstva (memorandum o razumijevanju, projektni dogovor i sl.).",
  },
  {
    title: "Zajednički rad na terenu",
    description: "Krećemo sa konkretnim aktivnostima — mapiranjem, edukacijom, promocijom ili podrškom.",
  },
];

export default function PartnerstvaPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerstva i mreža"
        title="Gradimo mrežu zajedno sa zajednicom"
        description="Partnerstva su temelj svih naših projekata — od lokalnih samouprava i turističkih organizacija do ugostitelja, donatora i razvojnih agencija."
      />

      <Section title="Kategorije partnera">
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-forest-100 bg-white p-6"
            >
              <h3 className="font-semibold text-forest-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-700">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Kako postati partner" tone="muted">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-2xl border border-forest-100 bg-white p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-700 text-sm font-semibold text-sand-50">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-forest-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-700">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Link
            href="/clanstvo"
            className="inline-block rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-colors hover:bg-[#ff8e29]"
          >
            Prijavi se kao partner
          </Link>
        </div>
      </Section>
    </>
  );
}
