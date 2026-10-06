import type { Metadata } from "next";
import { PageHero, Section } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Uslovi korištenja",
  description:
    "Uslovi korištenja sajta Udruženja građana Staze Krajine.",
};

export default function UsloviKoristenjaPage() {
  return (
    <>
      <PageHero
        eyebrow="Pravni dokumenti"
        title="Uslovi korištenja"
        description="Posljednje ažurirano: oktobar 2026. Ovaj dokument je generički nacrt i zahtijeva pravnu reviziju prije konačne objave."
      />

      <Section>
        <div className="prose-sm mx-auto max-w-3xl space-y-6 text-forest-800 leading-relaxed">
          <p className="rounded-xl bg-clay-400/10 p-4 text-sm text-clay-600">
            <strong>Napomena:</strong> Tekst ispod je osnovni, generički nacrt
            uslova korištenja za potrebe pokretanja sajta (Faza 1). Prije
            konačnog objavljivanja preporučuje se pravna revizija.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            1. Prihvatanje uslova
          </h2>
          <p>
            Korištenjem sajta {siteConfig.url} prihvatate ove uslove
            korištenja. Sajt vodi {siteConfig.name}, neprofitno udruženje
            registrovano u Bosni i Hercegovini.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            2. Sadržaj sajta
          </h2>
          <p>
            Sadržaj objavljen na ovom sajtu (tekstovi, opisi projekata,
            ilustracije) služi isključivo u informativne svrhe o aktivnostima
            udruženja. Trudimo se da informacije budu tačne i ažurne, ali ne
            garantujemo potpunu preciznost u svakom trenutku.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            3. Intelektualna svojina
          </h2>
          <p>
            Sav originalni sadržaj sajta vlasništvo je udruženja{" "}
            {siteConfig.name}, osim ako je drugačije naznačeno. Zabranjeno je
            neovlašteno kopiranje i komercijalno korištenje sadržaja bez
            prethodnog pismenog odobrenja.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            4. Forma za prijavu interesa
          </h2>
          <p>
            Slanjem forme na stranici &quot;Članstvo i kontakt&quot;
            potvrđujete da su dostavljeni podaci tačni i da ste saglasni da
            vas kontaktiramo u vezi sa vašim upitom.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            5. Ograničenje odgovornosti
          </h2>
          <p>
            Udruženje ne snosi odgovornost za eventualnu štetu nastalu
            korištenjem informacija sa ovog sajta, uključujući podatke o
            stazama i terenu — uvijek se pridržavajte lokalnih propisa i
            sigurnosnih preporuka prilikom boravka u prirodi.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            6. Izmjene uslova
          </h2>
          <p>
            Zadržavamo pravo izmjene ovih uslova u bilo kom trenutku. Izmjene
            stupaju na snagu objavom na ovoj stranici.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            7. Kontakt
          </h2>
          <p>
            Za sva pitanja u vezi sa uslovima korištenja, obratite nam se na{" "}
            <a
              className="text-forest-700 underline"
              href={`mailto:${siteConfig.infoEmail}`}
            >
              {siteConfig.infoEmail}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
