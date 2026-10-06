import type { Metadata } from "next";
import { PageHero, Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Članstvo i kontakt",
  description:
    "Prijavite interes za članstvo, volontiranje ili partnerstvo sa Udruženjem građana Staze Krajine, ili nas kontaktirajte direktno.",
};

export default function ClanstvoPage() {
  return (
    <>
      <PageHero
        eyebrow="Članstvo i kontakt"
        title="Postanite dio mreže Staze Krajine"
        description="Popunite formu ispod ukoliko želite postati član, volontirati, ostvariti partnerstvo ili prijaviti lokaciju/stazu koju bismo trebali uključiti u mapiranje."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-2xl border border-forest-100 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-forest-900">
              Prijava interesa
            </h2>
            <p className="mt-2 text-sm text-forest-700">
              Polja označena sa * su obavezna.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-forest-100 bg-forest-50 p-6">
              <h3 className="font-semibold text-forest-900">
                Zvanični kontakt
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-forest-500">Sjedište</dt>
                  <dd className="text-forest-900">{siteConfig.address}</dd>
                </div>
                <div>
                  <dt className="font-medium text-forest-500">
                    Opšti upiti
                  </dt>
                  <dd>
                    <a
                      className="text-forest-700 underline"
                      href={`mailto:${siteConfig.infoEmail}`}
                    >
                      {siteConfig.infoEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-forest-500">
                    Članstvo i partnerstva
                  </dt>
                  <dd>
                    <a
                      className="text-forest-700 underline"
                      href={`mailto:${siteConfig.contactEmail}`}
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-forest-500">
                Napomena: e-mail adrese su aktivne i stabilne, dok se zvanični
                Google Workspace nalozi udruženja aktiviraju.
              </p>
            </div>

            <div className="rounded-2xl border border-forest-100 bg-white p-6">
              <h3 className="font-semibold text-forest-900">
                Zašto se prijaviti?
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-forest-700">
                <li>• Direktno doprinosite očuvanju i razvoju staza Krajine.</li>
                <li>• Povezujete se sa lokalnim zajednicama i partnerima.</li>
                <li>
                  • Vaša ponuda ili lokacija postaje vidljiva kroz digitalne
                  kanale udruženja.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
