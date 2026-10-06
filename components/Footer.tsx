import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { TrailMark } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-forest-100 bg-forest-900 text-sand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <TrailMark className="h-8 w-8" />
            <span className="text-lg font-semibold text-sand-50">
              Staze Krajine
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-200">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-forest-300">
            Navigacija
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-sand-50" href="/o-nama">O nama</Link></li>
            <li><Link className="hover:text-sand-50" href="/projekti">Projekti</Link></li>
            <li><Link className="hover:text-sand-50" href="/partnerstva">Partnerstva</Link></li>
            <li><Link className="hover:text-sand-50" href="/clanstvo">Članstvo i kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-forest-300">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-sand-50" href={`mailto:${siteConfig.infoEmail}`}>
                {siteConfig.infoEmail}
              </a>
            </li>
            <li className="text-forest-300">{siteConfig.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-forest-300 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. Sva prava zadržana.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>JIB: {siteConfig.taxId}</span>
            <span>Matični broj: {siteConfig.registrationId}</span>
            <span>Rješenje o registraciji: {siteConfig.registrationNumber}</span>
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1">
            <a className="hover:text-sand-50" href={siteConfig.statuteUrl}>
              Statut (PDF)
            </a>
            <Link className="hover:text-sand-50" href="/privatnost">
              Pravila privatnosti
            </Link>
            <Link className="hover:text-sand-50" href="/uslovi-koristenja">
              Uslovi korištenja
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
