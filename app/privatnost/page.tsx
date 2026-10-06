import type { Metadata } from "next";
import { PageHero, Section } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pravila privatnosti",
  description:
    "Pravila privatnosti Udruženja građana Staze Krajine — kako obrađujemo podatke posjetilaca sajta i prijava interesa.",
};

export default function PrivatnostPage() {
  return (
    <>
      <PageHero
        eyebrow="Pravni dokumenti"
        title="Pravila privatnosti"
        description="Posljednje ažurirano: oktobar 2026. Ovaj dokument je generički nacrt i zahtijeva pravnu reviziju prije konačne objave."
      />

      <Section>
        <div className="prose-sm mx-auto max-w-3xl space-y-6 text-forest-800 leading-relaxed">
          <p className="rounded-xl bg-clay-400/10 p-4 text-sm text-clay-600">
            <strong>Napomena:</strong> Tekst ispod je osnovni, generički nacrt
            pravila privatnosti za potrebe pokretanja sajta (Faza 1). Prije
            konačnog objavljivanja preporučuje se pravna revizija u skladu sa
            Zakonom o zaštiti ličnih podataka BiH i relevantnim propisima.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            1. Ko smo mi
          </h2>
          <p>
            {siteConfig.name} (&quot;Udruženje&quot;, &quot;mi&quot;) upravlja sajtom{" "}
            {siteConfig.url}. Sjedište udruženja: {siteConfig.address}.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            2. Koje podatke prikupljamo
          </h2>
          <p>
            Putem forme na stranici &quot;Članstvo i kontakt&quot;
            prikupljamo podatke koje nam dobrovoljno dostavite: ime i
            prezime ili naziv organizacije, e-mail adresu, broj telefona
            (opciono), tip interesa i sadržaj poruke. Ne prikupljamo
            automatski podatke o lokaciji niti koristimo kolačiće za
            praćenje ponašanja posjetilaca.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            3. Svrha obrade podataka
          </h2>
          <p>
            Podatke koristimo isključivo radi odgovaranja na vaš upit,
            uspostavljanja članstva, volontiranja ili partnerstva, odnosno
            evidentiranja prijavljenih lokacija/staza.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            4. Čuvanje i dijeljenje podataka
          </h2>
          <p>
            Podatke ne prodajemo i ne dijelimo sa trećim stranama izvan
            udruženja, osim kada je to neophodno radi realizacije
            projekta uz vaš pristanak, ili kada je to zakonska obaveza.
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            5. Vaša prava
          </h2>
          <p>
            Imate pravo zatražiti uvid, izmjenu ili brisanje svojih
            podataka u bilo kom trenutku, slanjem zahtjeva na{" "}
            <a
              className="text-forest-700 underline"
              href={`mailto:${siteConfig.infoEmail}`}
            >
              {siteConfig.infoEmail}
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-forest-900">
            6. Kontakt
          </h2>
          <p>
            Za sva pitanja u vezi sa ovim pravilima privatnosti, obratite nam
            se putem e-maila na{" "}
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
