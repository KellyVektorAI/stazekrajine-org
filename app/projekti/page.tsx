import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekti | Udruženje građana Staze Krajine",
  description:
    "Otkrijte naše trenutne i završene projekte razvoja, mapiranja i digitalizacije outdoor i održivog turizma u Krajini.",
  keywords: [
    "projekti staze krajine", // Focus keyphrase
    "mapiranje planinarskih staza", // Synonym 1
    "digitalizacija outdoor turizma", // Synonym 2
    "turističke staze krajina",
    "razvoj ruralnog turizma",
  ],
  openGraph: {
    title: "Projekti Održivog Turizma | Staze Krajine",
    description:
      "Pregled projekata uređenja, označavanja i digitalne promocije turističkih staza u regionu Krajine.",
    url: "https://stazekrajine.org/projekti", // Slug
    siteName: "Staze Krajine",
    images: [
      {
        url: "https://stazekrajine.org/hero.jpeg", // Featured Image
        width: 1200,
        height: 630,
        alt: "Mapiranje i obilježavanje planinarskih staza u Krajini", // Alt text
      },
    ],
    type: "website",
  },
};
import type { Metadata } from "next";
import { PageHero, Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Projekti i inicijative",
  description:
    "Pregled ključnih projekata Udruženja građana Staze Krajine: mreža staza, edukacija domaćinstava, održivi turistički registar i podrška donatora.",
};

const projects = [
  {
    title: "Mreža staza Krajine",
    tag: "Infrastruktura",
    description:
      "Digitalno mapiranje postojećih planinarskih, biciklističkih i pješačkih staza u regiji, uz postavljanje jasne i ujednačene signalizacije na terenu.",
  },
  {
    title: "Edukacija ruralnih domaćinstava i iznajmljivača",
    tag: "Edukacija",
    description:
      "Radionice i mentorstvo za mala domaćinstva i iznajmljivače smještaja o digitalnom prihvatu gostiju — od online prisustva do komunikacije i rezervacija.",
  },
  {
    title: "Održivi turistički registar regije",
    tag: "Digitalizacija",
    description:
      "Centralizovan, javno dostupan registar provjerenih turističkih ponuda, staza i usluga u Krajini, zasnovan na principima održivosti.",
  },
];

export default function ProjektiPage() {
  return (
    <>
      <PageHero
        eyebrow="Projekti i inicijative"
        title="Konkretni koraci ka održivom turizmu Krajine"
        description="Naši projekti povezuju teren, zajednicu i digitalne alate — od signalizacije na stazama do edukacije domaćinstava i javnog registra ponude."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-2xl border border-forest-100 bg-white p-6"
            >
              <span className="inline-block w-fit rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700">
                {p.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-forest-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-700">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        title="Grantovi i podrška"
        description="Sekcija namijenjena donatorima, EU fondovima i lokalnim samoupravama koji žele podržati projekte udruženja."
      >
        <div className="rounded-2xl border border-forest-100 bg-white p-8">
          <p className="text-forest-700 leading-relaxed">
            Otvoreni smo za saradnju sa donatorima, programima EU fondova i
            lokalnim samoupravama koje prepoznaju vrijednost održivog
            turizma za razvoj regije. Ukoliko predstavljate organizaciju koja
            može podržati naše projekte — finansijski, stručno ili kroz
            partnerstvo — javite nam se putem stranice{" "}
            <a href="/clanstvo" className="font-semibold text-forest-700 underline">
              Članstvo i kontakt
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
