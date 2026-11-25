import type { Metadata } from "next";
import { PageHero, Section } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export type LegalSection = { title: string; paragraphs?: string[]; bullets?: string[] };

export function LegalDocument({ title, description, sections }: { title: string; description: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHero eyebrow="Informacije i pravila" title={title} description={description} />
      <Section>
        <article className="mx-auto max-w-3xl space-y-9 text-forest-800">
          <p className="text-sm text-forest-600">Posljednja revizija: 25. novembar 2026.</p>
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-xl font-semibold text-forest-900">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph} className="leading-7">{paragraph}</p>)}
              {section.bullets && <ul className="list-disc space-y-2 pl-6 leading-7">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
          <aside className="rounded-xl border border-forest-200 bg-forest-50 p-5 text-sm leading-6">
            Kontakt za pitanja i zahtjeve: <a className="font-medium underline" href={`mailto:${siteConfig.infoEmail}`}>{siteConfig.infoEmail}</a>.
            Udruženje građana „Staze Krajine“, {siteConfig.address}.
          </aside>
        </article>
      </Section>
    </>
  );
}
