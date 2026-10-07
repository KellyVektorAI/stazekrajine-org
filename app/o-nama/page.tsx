import type { Metadata } from "next";
import { PageHero, Section } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Misija, vizija, organizaciona struktura i vrijednosti Udruženja građana Staze Krajine.",
};

const values = [
  {
    title: "Održivost",
    description:
      "Svaki projekat planiramo tako da čuva prirodu i resurse Krajine za buduće generacije.",
  },
  {
    title: "Transparentnost",
    description:
      "Javno izvještavamo o aktivnostima, projektima i korištenju sredstava udruženja.",
  },
  {
    title: "Zajednica",
    description:
      "Rad udruženja temelji se na saradnji sa lokalnim stanovništvom, institucijama i gostima.",
  },
  {
    title: "Digitalna transformacija",
    description:
      "Koristimo moderne digitalne alate kako bismo turizam Krajine učinili vidljivijim i pristupačnijim.",
  },
];

const team = [
  {
    name: "Igor Kelečević",
    role: "Predsjednik udruženja",
    bio: "Kontakt: +387 65 210 302",
  },
  {
    name: "Tamara Mirnić",
    role: "Sekretar",
    bio: "Kontakt: +387 66 927 522",
  },
  {
    name: "Nikola Macan",
    role: "Grafički dizajner",
    bio: "Kontakt: +387 63 584 536",
  },
];

export default function ONamaPage() {
  return (
    <>
      <PageHero
        eyebrow="O nama"
        title="Udruženje građana Staze Krajine"
        description="Nevladina, neprofitna organizacija posvećena razvoju održivog turizma i digitalizaciji lokalne zajednice u regiji Krajina."
      />

      <Section title="Misija i vizija">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-forest-100 bg-white p-6">
            <h3 className="text-lg font-semibold text-forest-900">Misija</h3>
            <p className="mt-3 text-forest-700 leading-relaxed">
              Razvijati, promovisati i digitalizovati održivi turizam u
              Krajini kroz mapiranje i uređenje staza, podršku lokalnim
              zajednicama i povezivanje tradicije sa modernim digitalnim
              alatima.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-100 bg-white p-6">
            <h3 className="text-lg font-semibold text-forest-900">Vizija</h3>
            <p className="mt-3 text-forest-700 leading-relaxed">
              Krajina prepoznata kao regija održivog outdoor turizma u Bosni i
              Hercegovini, u kojoj lokalne zajednice imaju koristi od
              očuvanja prirodnog i kulturnog naslijeđa.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Vrijednosti" tone="muted">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-forest-100 bg-white p-6"
            >
              <h3 className="font-semibold text-forest-900">{v.title}</h3>
              <p className="mt-2 text-sm text-forest-700 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Organizaciona struktura">
        <dl className="grid gap-6 rounded-2xl border border-forest-100 bg-white p-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold text-forest-500">
              Naziv udruženja
            </dt>
            <dd className="mt-1 text-forest-900">{siteConfig.name}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-forest-500">Sjedište</dt>
            <dd className="mt-1 text-forest-900">{siteConfig.address}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-forest-500">JIB/PIB</dt>
            <dd className="mt-1 text-forest-900">{siteConfig.taxId}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-forest-500">
              Broj rješenja o registraciji
            </dt>
            <dd className="mt-1 text-forest-900">
              {siteConfig.registrationNumber}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-forest-500">
              Matični broj
            </dt>
            <dd className="mt-1 text-forest-900">{siteConfig.registrationId}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-forest-500">
              Nadležni registracioni organ
            </dt>
            <dd className="mt-1 text-forest-900">{siteConfig.registrationBody}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-semibold text-forest-500">
              Osnovna djelatnost
            </dt>
            <dd className="mt-1 text-forest-900">{siteConfig.activity}</dd>
          </div>
        </dl>
        <p className="mt-3 text-xs text-forest-500">
          Dodatni članovi vodstva biće dopunjeni čim budu dostupni — vidi
          README.md za uputstvo.
        </p>
      </Section>

      <Section title="Vodstvo i tim" tone="muted">
        <div className="grid gap-6 sm:grid-cols-3">
          {team.map((member, i) => (
            <div
              key={i}
              className="rounded-2xl border border-forest-100 bg-white p-6 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-2xl font-semibold text-forest-600">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold text-forest-900">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-forest-500">
                {member.role}
              </p>
              <p className="mt-2 text-sm text-forest-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
