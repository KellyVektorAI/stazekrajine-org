import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/Section";

const pillars = [
  {
    title: "Održivi & outdoor turizam",
    description:
      "Mapiramo, uređujemo i promovišemo planinarske, biciklističke i pješačke staze Krajine — uz jasnu signalizaciju i poštovanje prirode.",
    icon: "🥾",
  },
  {
    title: "Digitalizacija & promocija",
    description:
      "Povezujemo lokalne pružaoce usluga (smještaj, vodiče, iznajmljivače opreme) sa modernim turističkim kanalima i digitalnim alatima.",
    icon: "📡",
  },
  {
    title: "Lokalni razvoj & edukacija",
    description:
      "Podržavamo ruralni razvoj, mala domaćinstva i očuvanje kulturno-historijskog naslijeđa kroz edukaciju i zajedničke projekte.",
    icon: "🌾",
  },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-forest-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-forest-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-forest-700">
              Udruženje građana
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-forest-900 sm:text-4xl md:text-5xl">
              Udruženje građana Staze Krajine — razvoj, promocija i
              digitalizacija održivog turizma
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-forest-700">
              Povezujemo lokalne zajednice, outdoor infrastrukturu i moderne
              digitalne modele za očuvanje i promociju Krajine.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projekti"
                className="rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-colors hover:bg-[#ff8e29]"
              >
                Istraži projekte
              </Link>
              <Link
                href="/clanstvo"
                className="rounded-full border border-forest-300 px-6 py-3 text-sm font-semibold text-forest-800 transition-colors hover:bg-forest-100"
              >
                Postani partner / član
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-md">
            <Image
              src="/hero.jpeg"
              alt="Staze Krajine outdoor priroda"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <Section
        title="Tri stuba našeg djelovanja"
        description="Sve što radimo oslanja se na saradnju lokalnih zajednica, struke i digitalnih alata."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm"
            >
              <span className="text-3xl" aria-hidden="true">
                {p.icon}
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

      <Section tone="muted">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-forest-900 sm:text-3xl">
            Pridružite nam se u očuvanju i promociji Krajine
          </h2>
          <p className="max-w-2xl text-forest-700">
            Bilo da ste lokalna samouprava, turistička organizacija,
            ugostitelj, donator ili pojedinac koji želi volontirati — vaš
            doprinos nam znači.
          </p>
          <Link
            href="/clanstvo"
            className="rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-colors hover:bg-[#ff8e29]"
          >
            Prijavi interes
          </Link>
        </div>
      </Section>
    </>
  );
}
