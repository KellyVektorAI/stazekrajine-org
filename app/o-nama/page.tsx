import { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "O nama | Udruženje građana Staze Krajine",
  description:
    "Saznajte više o misiji, viziji i timu udruženja građana Staze Krajine. Nevladina i neprofitna organizacija posvećena razvoju održivog turizma.",
  keywords: [
    "staze krajine o nama",
    "planinarenje krajina",
    "outdoor turizam bosna",
    "udruzenje gradana krajina",
  ],
  openGraph: {
    title: "O nama | Staze Krajine",
    description:
      "Saznajte više o misiji, viziji i timu udruženja građana Staze Krajine.",
    url: "https://stazekrajine.org/o-nama",
    siteName: "Staze Krajine",
    images: [
      {
        url: "https://stazekrajine.org/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Planinske staze Krajine - O nama",
      },
    ],
    type: "website",
  },
};

const team = [
  {
    name: "Igor Kelečević",
    role: "Predsjednik udruženja",
    contact: "Kontakt: +387 65 210 302",
  },
  {
    name: "[PLACEHOLDER - popuniti ime i prezime]",
    role: "[PLACEHOLDER - npr. Koordinator/ica projekata]",
    bio: "[PLACEHOLDER - kratka biografija člana/ice vodstva udruženja.]",
  },
  {
    name: "[PLACEHOLDER - popuniti ime i prezime]",
    role: "[PLACEHOLDER - npr. Koordinator/ica digitalizacije]",
    bio: "[PLACEHOLDER - kratka biografija člana/ice vodstva udruženja.]",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest-50 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <span className="inline-block rounded-full bg-forest-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-forest-700">
            O nama
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest-900 sm:text-4xl md:text-5xl">
            Udruženje građana Staze Krajine
          </h1>
          <p className="mt-4 text-lg text-forest-700">
            Nevladina, neprofitna organizacija posvećena razvoju održivog
            turizma i digitalizaciji lokalne zajednice u regiji Krajina.
          </p>
        </div>
      </section>

      {/* Video Background Banner */}
      <section className="relative h-[350px] w-full overflow-hidden sm:h-[450px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/promo.mp4" type="video/mp4" />
          Vaš preglednik ne podržava video element.
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </section>

      <Section title="Misija i vizija">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-forest-900">Misija</h3>
            <p className="mt-2 text-sm leading-relaxed text-forest-700">
              Razvijati, promovisati i digitalizovati održivi turizam u Krajini
              kroz mapiranje i uređenje staza, podršku lokalnim zajednicama i
              povezivanje tradicije sa modernim digitalnim alatima.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-forest-900">Vizija</h3>
            <p className="mt-2 text-sm leading-relaxed text-forest-700">
              Krajina prepoznata kao regija održivog outdoor turizma u Bosni i
              Hercegovini, u kojoj lokalne zajednice imaju koristi od očuvanja
              prirodnog i kulturnog naslijeđa.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Vodstvo i tim" tone="muted">
        <div className="grid gap-6 sm:grid-cols-3">
          {team.map((m, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-2xl border border-forest-100 bg-white p-6 text-center shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-xl font-bold text-forest-800">
                {idx + 1}
              </div>
              <h3 className="mt-4 font-semibold text-forest-900">{m.name}</h3>
              <p className="text-sm font-medium text-forest-600">{m.role}</p>
              {m.contact && (
                <p className="mt-2 text-xs text-forest-700">{m.contact}</p>
              )}
              {m.bio && (
                <p className="mt-2 text-xs text-forest-600">{m.bio}</p>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
